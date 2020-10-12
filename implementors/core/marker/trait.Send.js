(function() {var implementors = {};
implementors["rsynth"] = [{"text":"impl&lt;'channels, 'samples, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/buffer/struct.AudioBufferIn.html\" title=\"struct rsynth::buffer::AudioBufferIn\">AudioBufferIn</a>&lt;'channels, 'samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::buffer::AudioBufferIn"]},{"text":"impl&lt;'channels, 'out_samples, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/buffer/struct.AudioBufferOut.html\" title=\"struct rsynth::buffer::AudioBufferOut\">AudioBufferOut</a>&lt;'channels, 'out_samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::buffer::AudioBufferOut"]},{"text":"impl&lt;'channels, 'samples, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/buffer/struct.AudioBufferOutChannelIteratorMut.html\" title=\"struct rsynth::buffer::AudioBufferOutChannelIteratorMut\">AudioBufferOutChannelIteratorMut</a>&lt;'channels, 'samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::buffer::AudioBufferOutChannelIteratorMut"]},{"text":"impl&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/buffer/struct.AudioBufferInOut.html\" title=\"struct rsynth::buffer::AudioBufferInOut\">AudioBufferInOut</a>&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::buffer::AudioBufferInOut"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/buffer/struct.AudioChunk.html\" title=\"struct rsynth::buffer::AudioChunk\">AudioChunk</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::buffer::AudioChunk"]},{"text":"impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/struct.MidiWriterWrapper.html\" title=\"struct rsynth::backend::combined::MidiWriterWrapper\">MidiWriterWrapper</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::MidiWriterWrapper"]},{"text":"impl&lt;'b, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/struct.TestAudioReader.html\" title=\"struct rsynth::backend::combined::TestAudioReader\">TestAudioReader</a>&lt;'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::TestAudioReader"]},{"text":"impl&lt;'w, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/struct.TestAudioWriter.html\" title=\"struct rsynth::backend::combined::TestAudioWriter\">TestAudioWriter</a>&lt;'w, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::TestAudioWriter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/struct.TestMidiReader.html\" title=\"struct rsynth::backend::combined::TestMidiReader\">TestMidiReader</a>","synthetic":true,"types":["rsynth::backend::combined::TestMidiReader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/struct.TestMidiWriter.html\" title=\"struct rsynth::backend::combined::TestMidiWriter\">TestMidiWriter</a>","synthetic":true,"types":["rsynth::backend::combined::TestMidiWriter"]},{"text":"impl&lt;AudioInErr, AudioOutErr&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/backend/combined/enum.CombinedError.html\" title=\"enum rsynth::backend::combined::CombinedError\">CombinedError</a>&lt;AudioInErr, AudioOutErr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioInErr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioOutErr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::CombinedError"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/dummy/struct.AudioDummy.html\" title=\"struct rsynth::backend::combined::dummy::AudioDummy\">AudioDummy</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::dummy::AudioDummy"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/dummy/struct.MidiDummy.html\" title=\"struct rsynth::backend::combined::dummy::MidiDummy\">MidiDummy</a>","synthetic":true,"types":["rsynth::backend::combined::dummy::MidiDummy"]},{"text":"impl&lt;'wr, S&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/hound/struct.HoundAudioReader.html\" title=\"struct rsynth::backend::combined::hound::HoundAudioReader\">HoundAudioReader</a>&lt;'wr, S&gt;","synthetic":true,"types":["rsynth::backend::combined::hound::HoundAudioReader"]},{"text":"impl&lt;'ww, S&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/hound/struct.HoundAudioWriter.html\" title=\"struct rsynth::backend::combined::hound::HoundAudioWriter\">HoundAudioWriter</a>&lt;'ww, S&gt;","synthetic":true,"types":["rsynth::backend::combined::hound::HoundAudioWriter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/backend/combined/hound/enum.HoundAudioError.html\" title=\"enum rsynth::backend::combined::hound::HoundAudioError\">HoundAudioError</a>","synthetic":true,"types":["rsynth::backend::combined::hound::HoundAudioError"]},{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/memory/struct.AudioChunkReader.html\" title=\"struct rsynth::backend::combined::memory::AudioChunkReader\">AudioChunkReader</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::memory::AudioChunkReader"]},{"text":"impl&lt;'b, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/combined/memory/struct.AudioBufferWriter.html\" title=\"struct rsynth::backend::combined::memory::AudioBufferWriter\">AudioBufferWriter</a>&lt;'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::combined::memory::AudioBufferWriter"]},{"text":"impl&lt;'c, 'mp, 'mw&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/jack_backend/struct.JackHost.html\" title=\"struct rsynth::backend::jack_backend::JackHost\">JackHost</a>&lt;'c, 'mp, 'mw&gt;","synthetic":true,"types":["rsynth::backend::jack_backend::JackHost"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/backend/vst_backend/struct.VstPluginWrapper.html\" title=\"struct rsynth::backend::vst_backend::VstPluginWrapper\">VstPluginWrapper</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::backend::vst_backend::VstPluginWrapper"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/envelope/struct.EnvelopeIteratorItem.html\" title=\"struct rsynth::envelope::EnvelopeIteratorItem\">EnvelopeIteratorItem</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::envelope::EnvelopeIteratorItem"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/envelope/staircase_envelope/struct.StairCaseEnvelopeIterator.html\" title=\"struct rsynth::envelope::staircase_envelope::StairCaseEnvelopeIterator\">StairCaseEnvelopeIterator</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::envelope::staircase_envelope::StairCaseEnvelopeIterator"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/envelope/staircase_envelope/struct.StairCaseEnvelope.html\" title=\"struct rsynth::envelope::staircase_envelope::StairCaseEnvelope\">StairCaseEnvelope</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::envelope::staircase_envelope::StairCaseEnvelope"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/struct.SysExEvent.html\" title=\"struct rsynth::event::SysExEvent\">SysExEvent</a>&lt;'a&gt;","synthetic":true,"types":["rsynth::event::SysExEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/struct.RawMidiEvent.html\" title=\"struct rsynth::event::RawMidiEvent\">RawMidiEvent</a>","synthetic":true,"types":["rsynth::event::RawMidiEvent"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/struct.Timed.html\" title=\"struct rsynth::event::Timed\">Timed</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::event::Timed"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/struct.Indexed.html\" title=\"struct rsynth::event::Indexed\">Indexed</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::event::Indexed"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/struct.DeltaEvent.html\" title=\"struct rsynth::event::DeltaEvent\">DeltaEvent</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::event::DeltaEvent"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/event_queue/struct.EventQueue.html\" title=\"struct rsynth::event::event_queue::EventQueue\">EventQueue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::event::event_queue::EventQueue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/event_queue/struct.AlwaysInsertNewBeforeOld.html\" title=\"struct rsynth::event::event_queue::AlwaysInsertNewBeforeOld\">AlwaysInsertNewBeforeOld</a>","synthetic":true,"types":["rsynth::event::event_queue::AlwaysInsertNewBeforeOld"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/event_queue/struct.AlwaysInsertNewAfterOld.html\" title=\"struct rsynth::event::event_queue::AlwaysInsertNewAfterOld\">AlwaysInsertNewAfterOld</a>","synthetic":true,"types":["rsynth::event::event_queue::AlwaysInsertNewAfterOld"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/event_queue/struct.AlwaysIgnoreNew.html\" title=\"struct rsynth::event::event_queue::AlwaysIgnoreNew\">AlwaysIgnoreNew</a>","synthetic":true,"types":["rsynth::event::event_queue::AlwaysIgnoreNew"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/event/event_queue/struct.AlwaysRemoveOld.html\" title=\"struct rsynth::event::event_queue::AlwaysRemoveOld\">AlwaysRemoveOld</a>","synthetic":true,"types":["rsynth::event::event_queue::AlwaysRemoveOld"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/event/event_queue/enum.EventCollisionHandling.html\" title=\"enum rsynth::event::event_queue::EventCollisionHandling\">EventCollisionHandling</a>","synthetic":true,"types":["rsynth::event::event_queue::EventCollisionHandling"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/meta/struct.AudioPort.html\" title=\"struct rsynth::meta::AudioPort\">AudioPort</a>","synthetic":true,"types":["rsynth::meta::AudioPort"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/meta/struct.MidiPort.html\" title=\"struct rsynth::meta::MidiPort\">MidiPort</a>","synthetic":true,"types":["rsynth::meta::MidiPort"]},{"text":"impl&lt;G, AP, MP&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/meta/struct.MetaData.html\" title=\"struct rsynth::meta::MetaData\">MetaData</a>&lt;G, AP, MP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;MP: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::meta::MetaData"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/meta/struct.InOut.html\" title=\"struct rsynth::meta::InOut\">InOut</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::meta::InOut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/test_utilities/struct.DummyEventHandler.html\" title=\"struct rsynth::test_utilities::DummyEventHandler\">DummyEventHandler</a>","synthetic":true,"types":["rsynth::test_utilities::DummyEventHandler"]},{"text":"impl&lt;S, E, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/test_utilities/struct.TestPlugin.html\" title=\"struct rsynth::test_utilities::TestPlugin\">TestPlugin</a>&lt;S, E, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::test_utilities::TestPlugin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/utilities/polyphony/struct.ToneIdentifier.html\" title=\"struct rsynth::utilities::polyphony::ToneIdentifier\">ToneIdentifier</a>","synthetic":true,"types":["rsynth::utilities::polyphony::ToneIdentifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/utilities/polyphony/struct.RawMidiEventToneIdentifierDispatchClassifier.html\" title=\"struct rsynth::utilities::polyphony::RawMidiEventToneIdentifierDispatchClassifier\">RawMidiEventToneIdentifierDispatchClassifier</a>","synthetic":true,"types":["rsynth::utilities::polyphony::RawMidiEventToneIdentifierDispatchClassifier"]},{"text":"impl&lt;Identifier&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/utilities/polyphony/enum.EventDispatchClass.html\" title=\"enum rsynth::utilities::polyphony::EventDispatchClass\">EventDispatchClass</a>&lt;Identifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Identifier: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::utilities::polyphony::EventDispatchClass"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/utilities/polyphony/enum.VoiceAssignment.html\" title=\"enum rsynth::utilities::polyphony::VoiceAssignment\">VoiceAssignment</a>","synthetic":true,"types":["rsynth::utilities::polyphony::VoiceAssignment"]},{"text":"impl&lt;Classifier, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rsynth/utilities/polyphony/simple_event_dispatching/struct.SimpleEventDispatcher.html\" title=\"struct rsynth::utilities::polyphony::simple_event_dispatching::SimpleEventDispatcher\">SimpleEventDispatcher</a>&lt;Classifier, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Classifier: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::utilities::polyphony::simple_event_dispatching::SimpleEventDispatcher"]},{"text":"impl&lt;VoiceIdentifier&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"rsynth/utilities/polyphony/simple_event_dispatching/enum.SimpleVoiceState.html\" title=\"enum rsynth::utilities::polyphony::simple_event_dispatching::SimpleVoiceState\">SimpleVoiceState</a>&lt;VoiceIdentifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VoiceIdentifier: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["rsynth::utilities::polyphony::simple_event_dispatching::SimpleVoiceState"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()