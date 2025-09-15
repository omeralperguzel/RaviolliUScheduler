# RaviolliUScheduler Backend API

## 🎯 Overview

The RaviolliUScheduler backend is a robust Node.js Express API that powers the university course scheduling system. It handles Excel file processing, course data management, and serves RESTful endpoints for the frontend applications.

## 🚀 Key Features

### 📊 Excel Data Processing

- **Dynamic Excel Import**: Upload and process `Courses.xls` files containing course information
- **Real-time File Validation**: Validates Excel file format and structure during upload
- **Automatic Data Parsing**: Extracts course codes, names, sections, schedules, lecturers, rooms, and ECTS credits
- **Data Sanitization**: Filters incomplete courses and normalizes data formats

### 🔄 File Management System

- **Secure File Upload**: Uses Multer middleware for handling multipart file uploads
- **File Type Validation**: Accepts only `.xls` and `.xlsx` files
- **Automatic File Replacement**: Updates course data by replacing existing files
- **Backup and Recovery**: Maintains data integrity during file operations

### 🌐 RESTful API

- **CORS Enabled**: Cross-origin resource sharing for frontend integration
- **JSON Response Format**: Standardized API responses with error handling
- **Comprehensive Logging**: Detailed request/response logging for debugging
- **Error Handling**: Graceful error responses with descriptive messages

## 🏗️ Architecture & Technologies

### Core Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js v4.19.2**: Web application framework
- **CORS v2.8.5**: Cross-origin resource sharing middleware
- **Body-parser v1.20.2**: Request body parsing middleware
- **Multer v1.4.4**: Multipart form data handling for file uploads
- **XLSX v0.18.5**: Excel file reading and parsing library

### Development Tools

- **Nodemon v2.0.7**: Development server with auto-restart
- **File System (fs)**: Native Node.js file operations
- **Path**: Native Node.js path manipulation utilities

## 📁 Project Structure

```
backend/
├── src/
│   ├── index.js                 # Express server configuration
│   ├── controllers/
│   │   └── scheduleController.js # Schedule generation logic
│   ├── services/
│   │   └── excelService.js      # Excel file processing service
│   └── routes/
│       └── api.js               # API route definitions
├── data/
│   └── Courses.xls              # Course data storage (gitignored)
├── uploads/                     # Temporary file upload directory
├── package.json                 # Dependencies and scripts
└── README.md                    # This documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm package manager
- Excel file with course data

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/omeralperguzel/RaviolliUScheduler.git
   cd RaviolliUScheduler/backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create data directory** (if not exists):

   ```bash
   mkdir data
   ```

4. **Start the server**:

   ```bash
   # Production mode
   npm start

   # Development mode with auto-restart
   npm run dev
   ```

5. **Verify installation**:
   - Server runs on `http://localhost:5000`
   - Check console for "Server is running on port 5000" message

## 📡 API Endpoints

### Course Data Management

#### `GET /api/check-courses-file`

**Description**: Checks if the Courses.xls file exists in the data directory

**Response**:

```json
{
  "exists": true,
  "filePath": "/path/to/data/Courses.xls"
}
```

#### `POST /api/upload-courses`

**Description**: Uploads and processes a new Courses.xls file

**Request**: Multipart form data with `coursesFile` field

**Response**:

```json
{
  "success": true,
  "message": "Courses.xls uploaded successfully",
  "lectureCount": 245
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "Invalid Excel file format",
  "error": "Detailed error message"
}
```

#### `GET /api/lectures`

**Description**: Retrieves all processed course data

**Response**:

```json
[
  {
    "Code": "CS101",
    "Name": "Introduction to Computer Science",
    "Section": "01",
    "Hours": "3",
    "Lecturer": "Dr. Smith",
    "Room": "A101",
    "ExcelTime": "Mo 09-12",
    "Department": "Computer Science",
    "Category": "Core",
    "ECTS": "6"
  }
]
```

## 🗃️ Data Processing

### Excel File Structure

The system expects Excel files with the following columns:

- **Code**: Course code (e.g., "CS101")
- **Name**: Course name
- **Section**: Section number (defaults to "01")
- **Cr/T**: Credit hours or theory hours
- **Lecturer**: Instructor name
- **Room**: Classroom assignment
- **Schedule**: Time schedule in Excel format
- **Dept.**: Department name
- **Category**: Course category
- **ECTS**: European Credit Transfer System credits

### Data Transformation

The backend automatically:

1. **Filters** incomplete or invalid course entries
2. **Normalizes** field names and formats
3. **Validates** required fields (Code, Name, Schedule)
4. **Maps** Excel columns to standardized JSON structure
5. **Handles** missing data with default values

## 🔧 Configuration

### Environment Variables

```bash
PORT=5000                    # Server port (default: 5000)
NODE_ENV=development         # Environment mode
```

### File Upload Configuration

```javascript
// multer configuration in api.js
const upload = multer({
  dest: "uploads/", // Temporary upload directory
  fileFilter: (req, file, cb) => {
    // Only accept Excel files
    if (file.originalname.match(/\.(xls|xlsx)$/i)) {
      cb(null, true);
    } else {
      cb(new Error("Only Excel files allowed!"), false);
    }
  },
});
```

## 🐛 Error Handling

### Common Error Responses

**File Not Found (404)**:

```json
{
  "exists": false,
  "error": "Courses.xls file not found"
}
```

**Invalid File Format (400)**:

```json
{
  "success": false,
  "message": "Only Excel files (.xls, .xlsx) are allowed!"
}
```

**Server Error (500)**:

```json
{
  "success": false,
  "message": "Error processing file",
  "error": "Detailed error message"
}
```

## 🚀 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure reverse proxy (nginx)
- [ ] Set up SSL certificates
- [ ] Configure file upload limits
- [ ] Set up monitoring and logging
- [ ] Configure database backup (if applicable)

### Docker Support

```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY src/ src/
EXPOSE 5000
CMD ["npm", "start"]
```

## 🔍 Troubleshooting

### Common Issues

**Port Already in Use**:

```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9
# Or change port in package.json
```

**File Upload Fails**:

- Check file permissions in uploads/ directory
- Verify Excel file is not corrupted
- Ensure file size is within limits

**Excel Parsing Errors**:

- Verify Excel file has standard column headers
- Check for special characters in course names
- Ensure Schedule column has proper time format

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For issues and questions:

- Create an issue on GitHub
- Check existing documentation
- Review error logs in console output
