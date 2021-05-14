initSidebarItems({"enum":[["ErrorKind","The type of error that occurred while parsing."],["Format","The order in which tracks should be laid out when playing back this SMF file."],["Fps","One of the four FPS values available for SMPTE times, as defined by the MIDI standard."],["MetaMessage","A “meta message”, as defined by the SMF spec. These events carry metadata about the track, such as tempo, time signature, copyright, etc…"],["MidiMessage","Represents a MIDI message, usually associated to a MIDI channel."],["Timing","The timing for an SMF file. This can be in ticks/beat or ticks/second."],["TrackEventKind","Represents the different kinds of SMF events and their associated data."]],"fn":[["parse","Parse a raw MIDI file lazily, yielding its header and a lazy track iterator. No allocations are made."],["write","Encode and write a generic MIDI file into the given generic writer. The MIDI file is represented by a header and a list of tracks."],["write_std","Similar to `write`, but writes to a `std::io::Write` writer instead of a `midly::io::Write` writer."]],"macro":[["stack_buffer","Define a stack buffer type, suitable for use with `MidiStream`."]],"mod":[["io","Provides abstractions over writers, even in `no_std` environments."],["live","Provides utilities to read and write “live” MIDI messages produced in real-time, in contrast with “dead” MIDI messages as stored in a `.mid` file."],["num","Exotically-sized integers used by the MIDI standard."],["stream","Provides support for the niche use case of reading MIDI events from a non-delimited stream."]],"struct":[["Arena","Helps overcome limitations of the lifetime system when constructing MIDI events and files."],["Error","Represents an error while parsing an SMF file or MIDI stream."],["EventBytemapIter","An iterator over the events of a single track that keeps track of the raw bytes that make up each event. Created by the `EventIter::bytemapped` method."],["EventIter","An iterator over the events of a single track. Yielded by the `TrackIter` iterator."],["Header","A MIDI file header, indicating metadata about the file."],["PitchBend","The value of a pitch bend, represented as 14 bits."],["Smf","Represents a single `.mid` Standard Midi File. If you’re casually looking to parse a `.mid` file, this is the type you’re looking for."],["SmfBytemap","A `.mid` Standard Midi File, but keeps a mapping to the raw bytes that make up each event."],["SmpteTime","Encodes an SMPTE time of the day."],["TrackEvent","Represents a parsed SMF track event."],["TrackIter","An iterator over all tracks in a Standard Midi File. Created by the `parse` function."]],"type":[["BytemappedTrack","A track, represented as a `Vec` of events along with their originating bytes."],["Result","The result type used by the MIDI parser."],["Track","A single track: simply a list of track events."]]});