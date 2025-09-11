import React, { useState } from 'react';

const LectureSelector = ({ lectures, onLectureSelect }) => {
    const [selectedLectures, setSelectedLectures] = useState([]);
    const [search, setSearch] = useState("");

    // Don't fetch lectures here since they're passed as props
    // useEffect is removed as lectures come from parent

    const handleSelectLecture = (lecture) => {
        if (selectedLectures.includes(lecture)) {
            const newSelected = selectedLectures.filter(item => item !== lecture);
            setSelectedLectures(newSelected);
        } else {
            const newSelected = [...selectedLectures, lecture];
            setSelectedLectures(newSelected);
        }
        
        // Call the parent's handler if provided
        if (onLectureSelect) {
            onLectureSelect(lecture);
        }
    };

    // Filter lectures by search
    const filteredLectures = lectures.filter(lecture => {
        if (typeof lecture === "string") {
            return lecture.toLowerCase().includes(search.toLowerCase());
        } else if (lecture && typeof lecture === "object") {
            // Try to match code, name, or lecturer fields
            return (
                (lecture.Code && lecture.Code.toLowerCase().includes(search.toLowerCase())) ||
                (lecture.Name && lecture.Name.toLowerCase().includes(search.toLowerCase())) ||
                (lecture.Lecturer && lecture.Lecturer.toLowerCase().includes(search.toLowerCase()))
            );
        }
        return false;
    });

    return (
        <div>
            <h2>Select Lectures</h2>
            <input
                type="text"
                placeholder="Search by code, name, or lecturer..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginBottom: '1em', width: '100%', padding: '0.5em' }}
            />
            <ul>
                {filteredLectures.map((lecture, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedLectures.includes(lecture)}
                                onChange={() => handleSelectLecture(lecture)}
                            />
                            {lecture.Code ? `${lecture.Code} - ${lecture.Name} (${lecture.Lecturer || ''})` : lecture}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LectureSelector;