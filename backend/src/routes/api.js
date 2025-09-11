const express = require('express');
const router = express.Router();
const excelService = require('../services/excelService');

// Route to get all lectures
router.get('/lectures', async (req, res) => {
    try {
        const lectures = excelService.getLectures();
        res.json(lectures);
    } catch (error) {
        console.error('Error fetching lectures:', error);
        res.status(500).json({ message: 'Error retrieving lectures', error: error.message });
    }
});

// Route to generate timetable
router.post('/timetable', (req, res) => {
    const { selectedLectures, lockedSlots } = req.body;
    // Placeholder for timetable generation logic
    res.json({ message: 'Timetable generation not implemented yet' });
});

// Route to lock time slots
router.post('/lock-slots', (req, res) => {
    const { timeSlot } = req.body;
    // Placeholder for time slot locking logic
    res.json({ message: 'Time slot locking not implemented yet' });
});

module.exports = router;