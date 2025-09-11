import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>University Schedule Creator</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/timetable">Timetable</a></li>
                    <li><a href="/lectures">Select Lectures</a></li>
                    <li><a href="/lock-slots">Lock Time Slots</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;