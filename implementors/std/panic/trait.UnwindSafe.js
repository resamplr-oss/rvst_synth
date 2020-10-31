(function() {var implementors = {};
implementors["rsynth"] = [{"text":"impl&lt;'channels, 'samples, S&gt; UnwindSafe for AudioBufferIn&lt;'channels, 'samples, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'channels, 'out_samples, S&gt; !UnwindSafe for AudioBufferOut&lt;'channels, 'out_samples, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'channels, 'samples, S&gt; !UnwindSafe for AudioBufferOutChannelIteratorMut&lt;'channels, 'samples, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt; !UnwindSafe for AudioBufferInOut&lt;'in_channels, 'in_samples, 'out_channels, 'out_samples, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for AudioChunk&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; UnwindSafe for InterlacedSampleIterator&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for MidiWriterWrapper&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'b, S&gt; UnwindSafe for TestAudioReader&lt;'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'w, T, S&gt; !UnwindSafe for TestAudioWriter&lt;'w, T, S&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TestMidiReader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TestMidiWriter","synthetic":true,"types":[]},{"text":"impl&lt;AudioInErr, AudioOutErr&gt; UnwindSafe for CombinedError&lt;AudioInErr, AudioOutErr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioInErr: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;AudioOutErr: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for AudioDummy&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MidiDummy","synthetic":true,"types":[]},{"text":"impl&lt;'wr, S&gt; !UnwindSafe for HoundAudioReader&lt;'wr, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ww, S&gt; !UnwindSafe for HoundAudioWriter&lt;'ww, S&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HoundAudioError","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; UnwindSafe for AudioChunkReader&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'b, S&gt; !UnwindSafe for AudioBufferWriter&lt;'b, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'v, 'a&gt; UnwindSafe for MidlyMidiReader&lt;'v, 'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'mp, 'mw&gt; !UnwindSafe for JackHost&lt;'c, 'mp, 'mw&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; UnwindSafe for VstPluginWrapper&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for EnvelopeIteratorItem&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for StairCaseEnvelopeIterator&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for StairCaseEnvelope&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SysExEvent&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawMidiEvent","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for Timed&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for Indexed&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for DeltaEvent&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MidlyConversionError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for EventQueue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlwaysInsertNewBeforeOld","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlwaysInsertNewAfterOld","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlwaysIgnoreNew","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AlwaysRemoveOld","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EventCollisionHandling","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AudioPort","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MidiPort","synthetic":true,"types":[]},{"text":"impl&lt;G, AP, MP&gt; UnwindSafe for MetaData&lt;G, AP, MP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AP: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;MP: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for InOut&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DummyEventHandler","synthetic":true,"types":[]},{"text":"impl&lt;S, E, M&gt; UnwindSafe for TestPlugin&lt;S, E, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ToneIdentifier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawMidiEventToneIdentifierDispatchClassifier","synthetic":true,"types":[]},{"text":"impl&lt;Identifier&gt; UnwindSafe for EventDispatchClass&lt;Identifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Identifier: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VoiceAssignment","synthetic":true,"types":[]},{"text":"impl&lt;Classifier, V&gt; UnwindSafe for SimpleEventDispatcher&lt;Classifier, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Classifier: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VoiceIdentifier&gt; UnwindSafe for SimpleVoiceState&lt;VoiceIdentifier&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VoiceIdentifier: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()