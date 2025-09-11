const generateTimetable = (lectures, lockedSlots) => {
    const timetable = {};
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const startHour = 9;
    const endHour = 20;

    days.forEach(day => {
        timetable[day] = [];
        for (let hour = startHour; hour < endHour; hour++) {
            const timeSlot = `${hour}:00`;
            if (!lockedSlots.includes(timeSlot)) {
                timetable[day].push({
                    time: timeSlot,
                    lecture: null
                });
            } else {
                timetable[day].push({
                    time: timeSlot,
                    lecture: 'Locked'
                });
            }
        }
    });

    lectures.forEach(lecture => {
        const { day, time } = lecture;
        const slotIndex = timetable[day].findIndex(slot => slot.time === time);
        if (slotIndex !== -1 && timetable[day][slotIndex].lecture === null) {
            timetable[day][slotIndex].lecture = lecture.name;
        }
    });

    return timetable;
};

const validateTimetable = (timetable) => {
    const errors = [];
    for (const day in timetable) {
        const slots = timetable[day];
        const occupiedSlots = slots.filter(slot => slot.lecture !== null);
        if (occupiedSlots.length > 5) {
            errors.push(`Too many lectures on ${day}.`);
        }
    }
    return errors;
};

export { generateTimetable, validateTimetable };