const express = require('express');
const cors = require('cors');
const path = require('path');
const XLSX = require('xlsx');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simple test endpoint to read Excel file
app.get('/api/lectures', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'Courses.xls');
        console.log('Reading file from:', filePath);
        
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const courses = XLSX.utils.sheet_to_json(worksheet);
        
        console.log('Found courses:', courses.length);
        
        // Filter and format the data
        const lectures = courses
            .filter(course => course.Code && course.Name && course.Schedule)
            .map(course => ({
                Code: course.Code,
                Name: course.Name,
                Section: course.Section || '01',
                Hours: course.Cr || course.T || '3',
                Lecturer: course.Lecturer || 'TBA',
                Room: course.Room || '',
                ExcelTime: course.Schedule || '',
                Department: course['Dept.'] || course.Dept || '',
                Category: course.Category || 'Course',
                ECTS: course.ECTS || ''
            }));
        
        console.log('Processed lectures:', lectures.length);
        res.json(lectures);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        res.status(500).json({ error: 'Failed to read Excel file', message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});