use super::Timed;
use std::ops::{Index, IndexMut};

pub struct EventQueue<T> {
    queue: Vec<Timed<T>>,
}

impl<T> Index<usize> for EventQueue<T> {
    type Output = Timed<T>;

    fn index(&self, index: usize) -> &Self::Output {
        &self.queue[index]
    }
}

impl<T> IndexMut<usize> for EventQueue<T> {
    fn index_mut(&mut self, index: usize) -> &mut Self::Output {
        &mut self.queue[index]
    }
}

impl<T> EventQueue<T> {
    #[cfg(test)]
    pub fn from_vec(events: Vec<Timed<T>>) -> Self {
        Self { queue: events }
    }

    pub fn new(capacity: usize) -> Self {
        Self {
            queue: Vec::with_capacity(capacity),
        }
    }

    pub fn len(&self) -> usize {
        self.queue.len()
    }

    /// Queue a new event.
    /// When the buffer is full, an element may be removed from the queue to make some room.
    /// This element is returned.
    /// TODO: This should come in two modes:
    /// TODO: * one mode in which there are no two events at the same time
    /// TODO: * another mode in which there can be two events at the same time
    pub fn queue_event(&mut self, new_event: Timed<T>) -> Option<Timed<T>> {
        let result;
        if self.queue.len() >= self.queue.capacity() {
            // TODO: Log an error.
            // We remove the first event to come, in this way,
            // we are sure we are not skipping the "last" event,
            // because we assume that the state of the first event
            // is only temporarily, and the state of the last event
            // may remain forever. For this reason, it is safer to
            // remove the first event
            if new_event.time_in_frames > self.queue[0].time_in_frames {
                result = Some(self.queue.remove(0));
            } else {
                return Some(new_event);
            }
        } else {
            result = None;
        }
        // If we are at this point, we can assume that we can insert at least one more event.
        debug_assert!(self.queue.len() < self.queue.capacity());

        let mut insert_index = 0;
        for read_event in self.queue.iter() {
            if read_event.time_in_frames < new_event.time_in_frames {
                insert_index += 1;
            } else {
                if read_event.time_in_frames == new_event.time_in_frames {
                    // Two events at the same time.
                    // This should not happen, we are ignoring this event.
                    // TODO: Log a warning.
                    return Some(new_event);
                }
                break;
            }
        }
        self.queue.insert(insert_index, new_event);
        return result;
    }

    /// Remove all events before, but not on, this threshold.
    ///
    /// # Allocation
    /// If `T` implements drop, the elements that are removed are dropped.
    /// This may cause memory de-allocation, which you want to avoid in
    /// the real-time part of your library.
    pub fn forget_before(&mut self, threshold: u32)
    where
        T: Copy,
    {
        self.queue.retain(|x| x.time_in_frames >= threshold);
    }

    /// Remove all events from the queue.
    ///
    /// # Allocation
    /// If `T` implements drop, the elements that are removed are dropped.
    /// This may cause memory de-allocation, which you want to avoid in
    /// the real-time part of your library.
    pub fn clear(&mut self) {
        self.queue.clear()
    }

    /// Shift time forward by `new_zero_time` frames.
    ///
    /// # Panics
    /// Panics in debug mode when at least one event has a `time_in_frames`
    /// that is < `new_zero_time`.  
    pub fn shift_time(&mut self, new_zero_time: u32) {
        for event in self.queue.iter_mut() {
            event.time_in_frames -= new_zero_time;
        }
    }

    pub fn get_last_before(&self, time: u32) -> Option<&Timed<T>> {
        if let Some(index) = self.queue.iter().rposition(|e| e.time_in_frames < time) {
            self.queue.get(index)
        } else {
            None
        }
    }

    pub fn first(&self) -> Option<&Timed<T>> {
        self.queue.get(0)
    }
}

#[test]
fn eventqueue_queue_event_new_event_ignored_when_already_full_and_new_event_comes_first() {
    let initial_buffer = vec![
        Timed::new(4, 16),
        Timed::new(6, 36),
        Timed::new(7, 49),
        Timed::new(8, 64),
    ];
    let mut queue = EventQueue {
        queue: initial_buffer.clone(),
    };
    // Check our assumption:
    assert_eq!(queue.queue.capacity(), queue.queue.len());

    // Act
    queue.queue_event(Timed::new(3, 9));

    // Assert:
    assert_eq!(queue.queue, initial_buffer);
}

#[test]
fn event_queue_queue_event_first_event_removed_when_already_full_and_new_event_after_first() {
    let initial_buffer = vec![
        Timed::new(4, 16),
        Timed::new(6, 36),
        Timed::new(7, 49),
        Timed::new(8, 64),
    ];
    let mut queue = EventQueue {
        queue: initial_buffer.clone(),
    };
    // Check our assumption:
    assert_eq!(queue.queue.capacity(), queue.queue.len());

    // Act
    queue.queue_event(Timed::new(5, 25));

    // Assert:
    assert_eq!(
        queue.queue,
        vec![
            Timed::new(5, 25),
            Timed::new(6, 36),
            Timed::new(7, 49),
            Timed::new(8, 64),
        ]
    );
}

#[test]
fn eventqueue_queue_event_new_event_inserted_at_correct_location() {
    let initial_buffer = vec![Timed::new(4, 16), Timed::new(6, 36), Timed::new(7, 49)];
    let mut queue = EventQueue {
        queue: initial_buffer.clone(),
    };
    queue.queue.reserve(1);

    // Act
    queue.queue_event(Timed::new(5, 25));

    // Assert:
    assert_eq!(
        queue.queue,
        vec![
            Timed::new(4, 16),
            Timed::new(5, 25),
            Timed::new(6, 36),
            Timed::new(7, 49),
        ]
    );
}

#[test]
fn eventqueue_queue_event_new_event_ignored_when_already_event_at_that_location() {
    let initial_buffer = vec![Timed::new(4, 16), Timed::new(6, 36), Timed::new(7, 49)];
    let mut queue = EventQueue {
        queue: initial_buffer.clone(),
    };
    queue.queue.reserve(1);

    // Act
    queue.queue_event(Timed::new(6, 25));

    // Assert:
    assert_eq!(queue.queue, initial_buffer);
}

#[test]
fn eventqueue_forget_before() {
    let mut queue = EventQueue {
        queue: vec![
            Timed::new(4, 16),
            Timed::new(6, 36),
            Timed::new(7, 49),
            Timed::new(8, 64),
        ],
    };
    queue.forget_before(7);
    assert_eq!(queue.queue, vec![Timed::new(7, 49), Timed::new(8, 64),]);
}

#[test]
fn eventqueue_forget_everything() {
    let mut queue = EventQueue {
        queue: vec![
            Timed::new(4, 16),
            Timed::new(6, 36),
            Timed::new(7, 49),
            Timed::new(8, 64),
        ],
    };
    queue.forget_before(9);
    assert_eq!(queue.queue, Vec::new());
}