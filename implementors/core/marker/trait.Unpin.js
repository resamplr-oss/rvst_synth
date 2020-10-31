(function() {var implementors = {};
implementors["rsynth"] = [{"text":"impl&lt;'channels, 'samples, S&gt; Unpin for AudioBufferIn&lt;'channels, 'samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'samples: 'channels,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'channels, 'out_samples, S&gt; Unpin for AudioBufferOut&lt;'channels, 'out_samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'out_samples: 'channels,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'channels, 'samples, S&gt; Unpin for AudioBufferOutChannelIteratorMut&lt;'channels, 'samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'samples: 'channels,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt; Unpin for AudioBufferInOut&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'in_samples: 'in_channels,<br>&nbsp;&nbsp;&nbsp;&nbsp;'out_samples: 'out_channels,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for AudioChunk&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Unpin for InterlacedSampleIterator&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Unpin for MidiWriterWrapper&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'b, S&gt; Unpin for TestAudioReader&lt;'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'w, T, S&gt; Unpin for TestAudioWriter&lt;'w, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TestMidiReader","synthetic":true,"types":[]},{"text":"impl Unpin for TestMidiWriter","synthetic":true,"types":[]},{"text":"impl&lt;AudioInErr, AudioOutErr&gt; Unpin for CombinedError&lt;AudioInErr, AudioOutErr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioInErr: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioOutErr: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for AudioDummy&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for MidiDummy","synthetic":true,"types":[]},{"text":"impl&lt;'wr, S&gt; Unpin for HoundAudioReader&lt;'wr, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ww, S&gt; Unpin for HoundAudioWriter&lt;'ww, S&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for HoundAudioError","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Unpin for AudioChunkReader&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'b, S&gt; Unpin for AudioBufferWriter&lt;'b, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'v, 'a&gt; Unpin for MidlyMidiReader&lt;'v, 'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'a: 'v,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'mp, 'mw&gt; Unpin for JackHost&lt;'c, 'mp, 'mw&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'mw: 'mp,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Unpin for VstPluginWrapper&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for EnvelopeIteratorItem&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for StairCaseEnvelopeIterator&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for StairCaseEnvelope&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for SysExEvent&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for RawMidiEvent","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Unpin for Timed&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Unpin for Indexed&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Unpin for DeltaEvent&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for MidlyConversionError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for EventQueue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for AlwaysInsertNewBeforeOld","synthetic":true,"types":[]},{"text":"impl Unpin for AlwaysInsertNewAfterOld","synthetic":true,"types":[]},{"text":"impl Unpin for AlwaysIgnoreNew","synthetic":true,"types":[]},{"text":"impl Unpin for AlwaysRemoveOld","synthetic":true,"types":[]},{"text":"impl Unpin for EventCollisionHandling","synthetic":true,"types":[]},{"text":"impl Unpin for AudioPort","synthetic":true,"types":[]},{"text":"impl Unpin for MidiPort","synthetic":true,"types":[]},{"text":"impl&lt;G, AP, MP&gt; Unpin for MetaData&lt;G, AP, MP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AP: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;MP: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for InOut&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for DummyEventHandler","synthetic":true,"types":[]},{"text":"impl&lt;S, E, M&gt; Unpin for TestPlugin&lt;S, E, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ToneIdentifier","synthetic":true,"types":[]},{"text":"impl Unpin for RawMidiEventToneIdentifierDispatchClassifier","synthetic":true,"types":[]},{"text":"impl&lt;Identifier&gt; Unpin for EventDispatchClass&lt;Identifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Identifier: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for VoiceAssignment","synthetic":true,"types":[]},{"text":"impl&lt;Classifier, V&gt; Unpin for SimpleEventDispatcher&lt;Classifier, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Classifier: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VoiceIdentifier&gt; Unpin for SimpleVoiceState&lt;VoiceIdentifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VoiceIdentifier: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()