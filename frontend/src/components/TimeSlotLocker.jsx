import React, { useState } from 'react';

const TimeSlotLocker = ({ timeSlots = [], onLockChange }) => {
    const [lockedSlots, setLockedSlots] = useState([]);

    // Generate default time slots if none provided
    const defaultTimeSlots = [
        'Monday 09:00-10:00', 'Monday 10:00-11:00', 'Monday 11:00-12:00',
        'Tuesday 09:00-10:00', 'Tuesday 10:00-11:00', 'Tuesday 11:00-12:00',
        'Wednesday 09:00-10:00', 'Wednesday 10:00-11:00', 'Wednesday 11:00-12:00',
        'Thursday 09:00-10:00', 'Thursday 10:00-11:00', 'Thursday 11:00-12:00',
        'Friday 09:00-10:00', 'Friday 10:00-11:00', 'Friday 11:00-12:00'
    ];
    
    const slotsToShow = timeSlots.length > 0 ? timeSlots : defaultTimeSlots;

    const toggleLock = (slot) => {
        const updatedLocks = lockedSlots.includes(slot)
            ? lockedSlots.filter(s => s !== slot)
            : [...lockedSlots, slot];

        setLockedSlots(updatedLocks);
        if (onLockChange) {
            onLockChange(updatedLocks);
        }
    };

    return (
        <div className="time-slot-locker">
            <h3>Lock Time Slots</h3>
            <ul>
                {slotsToShow.map((slot, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={lockedSlots.includes(slot)}
                                onChange={() => toggleLock(slot)}
                            />
                            {slot}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimeSlotLocker;