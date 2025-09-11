import React, { useState, useEffect } from 'react';
import { fetchLectures } from '../services/api';
import { generateTimetable } from '../services/scheduleGenerator';
import TimeSlotLocker from './TimeSlotLocker';
import LectureSelector from './LectureSelector';

const Timetable = () => {
    const [lectures, setLectures] = useState([]);
    const [selectedLectures, setSelectedLectures] = useState([]);
    const [lockedSlots, setLockedSlots] = useState([]);
    const [timetable, setTimetable] = useState([]);

    useEffect(() => {
        const fetchLecturesData = async () => {
            const data = await fetchLectures();
            setLectures(data);
        };
        fetchLecturesData();
    }, []);

    useEffect(() => {
        const newTimetable = generateTimetable(selectedLectures, lockedSlots);
        setTimetable(newTimetable);
    }, [selectedLectures, lockedSlots]);

    return (
        <div className="timetable-container">
            <h2>University Timetable</h2>
            <LectureSelector 
                lectures={lectures} 
                selectedLectures={selectedLectures} 
                setSelectedLectures={setSelectedLectures} 
            />
            <TimeSlotLocker 
                lockedSlots={lockedSlots} 
                setLockedSlots={setLockedSlots} 
            />
            <div className="timetable">
                {Object.keys(timetable).length > 0 ? (
                    <div className="timetable-grid">
                        {Object.entries(timetable).map(([day, slots]) => (
                            <div key={day} className="day-column">
                                <h3>{day}</h3>
                                {slots.map((slot, index) => (
                                    <div key={index} className="timetable-slot">
                                        {slot.time}: {slot.lecture || 'Free'}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-timetable">
                        <p>No timetable generated yet. Select some lectures to get started.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timetable;