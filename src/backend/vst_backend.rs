use vst::buffer::AudioBuffer;
use vst::plugin::Category;
use backend::Plugin;
use backend::Transparent;
use core::cmp;
use backend::RawMidiEvent;
use backend::Event;
use backend::utilities::{VecStorage, VecStorageMut};
use vst::plugin::{Info, HostCallback};
use vst::channels::ChannelInfo;
use vst::event::Event as VstEvent;
use vst::event::MidiEvent as VstMidiEvent;
use vst::api::Events;

pub trait VstPlugin {
    const PLUGIN_ID: i32;
    const CATEGORY: Category;
}

impl<T> VstPlugin for T
where T:Transparent,
    <T as Transparent>::Inner : VstPlugin {
    const PLUGIN_ID: i32 = T::Inner::PLUGIN_ID;
    const CATEGORY: Category = T::Inner::CATEGORY;
}

pub struct VstPluginWrapper<P>
{
    plugin: P,
    host: HostCallback,
    inputs_f32: VecStorage<[f32]>,
    outputs_f32: VecStorageMut<[f32]>,
    inputs_f64: VecStorage<[f64]>,
    outputs_f64: VecStorageMut<[f64]>
}

impl<P> VstPluginWrapper<P>
where
    P: VstPlugin,
    for<'a> P: Plugin<Event<RawMidiEvent<'a>, ()>>
{
    pub fn get_info(&self) -> Info {
        trace!("get_info");
        Info {
            name: P::NAME.to_string(),
            inputs: P::MAX_NUMBER_OF_AUDIO_INPUTS as i32,
            outputs: P::MAX_NUMBER_OF_AUDIO_OUTPUTS as i32,
            unique_id: P::PLUGIN_ID,
            category: P::CATEGORY,
            ..Info::default()
        }
    }

    pub fn new(plugin: P, host: HostCallback) -> Self
    {
        Self {
            plugin,
            inputs_f32: VecStorage::with_capacity(P::MAX_NUMBER_OF_AUDIO_INPUTS),
            outputs_f32: VecStorageMut::with_capacity(P::MAX_NUMBER_OF_AUDIO_OUTPUTS),
            inputs_f64: VecStorage::with_capacity(P::MAX_NUMBER_OF_AUDIO_INPUTS),
            outputs_f64: VecStorageMut::with_capacity(P::MAX_NUMBER_OF_AUDIO_OUTPUTS),
            host
        }
    }

    pub fn host(&self) -> &HostCallback {
        &self.host
    }

    pub fn process<'b>(&mut self, buffer: &mut AudioBuffer<'b, f32>) {
        let (input_buffers, output_buffers) = buffer.split();

        let mut inputs = self.inputs_f32.vec_guard();
        for i in 0 .. cmp::min(inputs.capacity(), input_buffers.len()) {
            inputs.push(input_buffers.get(i));
        }

        let mut outputs = self.outputs_f32.vec_guard();
        for i in 0 .. cmp::min(outputs.capacity(), output_buffers.len()) {
            outputs.push(output_buffers.get_mut(i));
        }

        self.plugin.render_buffer::<f32>(inputs.as_slice(), outputs.as_mut_slice());
    }

    pub fn process_f64<'b>(&mut self, buffer: &mut AudioBuffer<'b, f64>) {
        let (input_buffers, output_buffers) = buffer.split();

        let mut inputs = self.inputs_f64.vec_guard();
        for i in 0 .. cmp::min(inputs.capacity(), input_buffers.len()) {
            inputs.push(input_buffers.get(i));
        }

        let mut outputs = self.outputs_f64.vec_guard();
        for i in 0 .. cmp::min(outputs.capacity(), output_buffers.len()) {
            outputs.push(output_buffers.get_mut(i));
        }

        self.plugin.render_buffer::<f64>(&*inputs, &mut *outputs);
    }

    pub fn get_input_info(&self, input_index: i32) -> ChannelInfo {
        trace!("get_input_info({})", input_index);
        ChannelInfo::new(
            P::audio_input_name(input_index as usize),
            None,
            true,
            None
        )
    }

    pub fn get_output_info(&self, output_index: i32) -> ChannelInfo {
        trace!("get_output_info({})", output_index);
        ChannelInfo::new(
            P::audio_output_name(output_index as usize),
            None,
            true,
            None
        )
    }
    
    pub fn process_events(&mut self, events: &Events) {
        trace!("process_events");
        for e in events.events() {
            match e {
                VstEvent::Midi(VstMidiEvent { data, delta_frames, .. }) => {
                    let event = Event::Timed{samples: delta_frames as u32, event: RawMidiEvent {data: &data}};
                    self.plugin.handle_event(&event);
                }
                _ => ()
            }
        }
    }

    pub fn set_sample_rate(&mut self, sample_rate: f64) {
        trace!("sample_rate: {}", sample_rate);
        self.plugin.set_sample_rate(sample_rate);
    }
}

/// A wrapper around the `plugin_main!` macro from the `vst` crate.
/// You call this with one parameter, which is the function declaration of a function
/// that creates your plugin.
/// Example:
/// ```
/// # #[macro_use] extern crate rsynth;
/// # extern crate num_traits;
/// # extern crate asprim;
/// # #[macro_use] extern crate vst;
/// struct MyPlugin {
///   // Define your fields here
/// }
///
/// use rsynth::backend::vst_backend::VstPlugin;
/// use vst::plugin::Category;
/// impl VstPlugin for MyPlugin {
///     // Implementation omitted for brevity.
/// #    const PLUGIN_ID: i32 = 123;
/// #    const CATEGORY: Category = Category::Synth;
/// }
///
/// use rsynth::backend::{Plugin, Event, RawMidiEvent};
/// use asprim::AsPrim;
/// use num_traits::Float;
///
/// impl<'e, U> Plugin<Event<RawMidiEvent<'e>, U>> for MyPlugin {
///     // Implementation omitted for brevity.
/// #    const NAME: &'static str = "Example";
/// #    const MAX_NUMBER_OF_AUDIO_INPUTS: usize = 1;
/// #    const MAX_NUMBER_OF_AUDIO_OUTPUTS: usize = 2;
/// #
/// #    fn audio_input_name(index: usize) -> String {
/// #        unimplemented!()
/// #    }
/// #
/// #    fn audio_output_name(index: usize) -> String {
/// #        unimplemented!()
/// #    }
/// #
/// #    fn set_sample_rate(&mut self, _sample_rate: f64) {
/// #    }
/// #
/// #    fn render_buffer<F>(&mut self, inputs: &[&[F]], outputs: &mut[&mut[F]])
/// #        where F: Float + AsPrim
/// #    {
/// #        unimplemented!()
/// #    }
/// #
/// #    fn handle_event(&mut self, event: &Event<RawMidiEvent<'e>, U>) {
/// #        unimplemented!()
/// #    }
/// }
/// vst_init!(
///    fn init() -> MyPlugin {
///        MyPlugin{}
///    }
/// );
/// ```
/// Make sure that `MyPlugin` (in this example) implements the `VstPlugin` trait
/// and `Plugin<Event<RawMidiEvent<'a>, ()>>` for every lifetime `'a`.
/// You also can use this function to do some setup (e.g. initialize logging).
#[macro_export]
macro_rules! vst_init {
    (fn $function_name:ident() -> $return_type:ty
        $body:block
    ) => {

        fn $function_name () -> $return_type
        $body

        // This macro is expanded in the context of the plugin.
        // For this reason, we do not use any "use" statements here,
        // as this may mess up the plugin's namespaces.
        struct VstWrapperWrapper {
            wrapper: $crate::backend::vst_backend::VstPluginWrapper<$return_type>
        }

        impl Default for VstWrapperWrapper {
            fn default() -> Self {
                // We only need this so that the `Plugin` trait from the vst crate
                // can have a default implementation for its `new` function,
                // it is not actually used by the `vst` crate.
                unreachable!()
            }
        }

        impl vst::plugin::Plugin for VstWrapperWrapper
        {
            fn get_info(&self) -> vst::plugin::Info {
                self.wrapper.get_info()
            }

            fn new(host: vst::plugin::HostCallback) -> Self
            where
                Self: Sized + Default
            {
                VstWrapperWrapper
                {
                    wrapper: $crate::backend::vst_backend::VstPluginWrapper::new($function_name(), host)
                }
            }

            fn init(&mut self) {
                let sample_rate =
                    if let Some(vst::api::TimeInfo{sample_rate: sr, ..}) =
                        vst::host::Host::get_time_info(
                            self.wrapper.host(),
                            vst::api::TimeInfoFlags::empty().bits()
                        )
                    {
                        Some(sr)
                    } else {
                        None
                    };
                if let Some(sr) = sample_rate {
                    self.wrapper.set_sample_rate(sr);
                }
            }

            #[inline]
            fn process<'b>(&mut self, buffer: &mut vst::buffer::AudioBuffer<'b, f32>) {
                self.wrapper.process(buffer);
            }

            #[inline]
            fn process_f64<'b>(&mut self, buffer: &mut vst::buffer::AudioBuffer<'b, f64>) {
                self.wrapper.process_f64(buffer);
            }

            fn get_input_info(&self, input_index: i32) -> vst::channels::ChannelInfo {
                self.wrapper.get_input_info(input_index)
            }

            fn get_output_info(&self, output_index: i32) -> vst::channels::ChannelInfo {
                self.wrapper.get_output_info(output_index)
            }

            #[inline]
            fn process_events(&mut self, events: &vst::api::Events) {
                self.wrapper.process_events(events)
            }
        }

        plugin_main!(VstWrapperWrapper);
    }
}