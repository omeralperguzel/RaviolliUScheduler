import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
//import Timetable from './Timetable';
import LectureSelector from './LectureSelector';
import TimeSlotLocker from './TimeSlotLocker';
import { fetchLectures } from '../services/api';

const App = () => {
    const [lectures, setLectures] = useState([]);
    const [selectedLectures, setSelectedLectures] = useState([]);
    const [lockedSlots, setLockedSlots] = useState([]);

    useEffect(() => {
        const loadLectures = async () => {
            const data = await fetchLectures();
            setLectures(data);
        };
        loadLectures();
    }, []);

    const handleLectureSelect = (lecture) => {
        setSelectedLectures((prev) => {
            if (prev.includes(lecture)) {
                return prev.filter((l) => l !== lecture);
            }
            return [...prev, lecture];
        });
    };

    const handleLockChange = (lockedSlots) => {
        setLockedSlots(lockedSlots);
    };

    return (
        <div>
            <Header />
            <LectureSelector lectures={lectures} onLectureSelect={handleLectureSelect} />
            <TimeSlotLocker onLockChange={handleLockChange} />
            <Timetable selectedLectures={selectedLectures} lockedSlots={lockedSlots} />
            <Footer />
        </div>
    );
};

export default App;