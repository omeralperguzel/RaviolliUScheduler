const XLSX = require('xlsx');
const path = require('path');

const excelService = {
    readCourses: (filePath) => {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const courses = XLSX.utils.sheet_to_json(worksheet);
        return courses;
    },
    
    getLectures: () => {
        const filePath = path.join(__dirname, '../../data/Courses.xls');
        const courses = excelService.readCourses(filePath);
        
        // Filter out courses without proper data and format for frontend
        return courses
            .filter(course => course.Code && course.Name && course.Schedule)
            .map(course => ({
                Code: course.Code,
                Name: course.Name,
                Section: course.Section || '01',
                Hours: course.Cr || course.T || '3', // Use Credits or Theory hours
                Lecturer: course.Lecturer || 'TBA',
                Room: course.Room || '',
                ExcelTime: course.Schedule || '', // This is the time format we need to parse
                Department: course['Dept.'] || course.Dept || '',
                Category: course.Category || 'Course',
                ECTS: course.ECTS || ''
            }));
    }
};

module.exports = excelService;