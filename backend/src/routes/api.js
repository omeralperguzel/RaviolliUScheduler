const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const excelService = require('../services/excelService');

// Configure multer for file uploads
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        // Accept .xls and .xlsx files
        if (file.originalname.match(/\.(xls|xlsx)$/i)) {
            cb(null, true);
        } else {
            cb(new Error('Only Excel files (.xls, .xlsx) are allowed!'), false);
        }
    }
});

// Route to check if Courses.xls exists
router.get('/check-courses-file', (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../data/Courses.xls');
        const exists = fs.existsSync(filePath);
        res.json({ exists, filePath });
    } catch (error) {
        console.error('Error checking file:', error);
        res.status(500).json({ exists: false, error: error.message });
    }
});

// Route to upload Courses.xls file
router.post('/upload-courses', upload.single('coursesFile'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const dataDir = path.join(__dirname, '../../data');
        const targetPath = path.join(dataDir, 'Courses.xls');
        
        // Create data directory if it doesn't exist
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Move the uploaded file to the data directory
        fs.copyFileSync(req.file.path, targetPath);
        
        // Clean up the temporary file
        fs.unlinkSync(req.file.path);
        
        // Test if the file can be read
        try {
            const testLectures = excelService.getLectures();
            res.json({ 
                success: true, 
                message: 'Courses.xls uploaded successfully',
                lectureCount: testLectures.length
            });
        } catch (parseError) {
            // Remove the invalid file
            if (fs.existsSync(targetPath)) {
                fs.unlinkSync(targetPath);
            }
            res.status(400).json({ 
                success: false, 
                message: 'Invalid Excel file format. Please ensure the file contains proper course data.',
                error: parseError.message 
            });
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error uploading file', 
            error: error.message 
        });
    }
});

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