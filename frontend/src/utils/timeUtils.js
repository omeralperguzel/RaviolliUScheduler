export const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const generateTimeSlots = (startHour, endHour, interval) => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            const time = new Date();
            time.setHours(hour, minute, 0, 0);
            slots.push(formatTime(time));
        }
    }
    return slots;
};

export const isTimeSlotLocked = (lockedSlots, timeSlot) => {
    return lockedSlots.includes(timeSlot);
};