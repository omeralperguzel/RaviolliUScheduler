# TEDU Scheduler - University Course Schedule Generator

A comprehensive web application that helps TEDU (TED University) students create optimal course schedules by importing real course data from Excel files and generating conflict-free timetable combinations.

## 🚀 Features

- **Excel Import**: Automatically imports course data from `Courses.xls` with real university schedule information
- **Smart Parsing**: Handles complex Excel time formats (e.g., "Tu/Fr 09 - 12 Tu/Fr 13 - 15", "Mo 12 - 14 We 13 - 14")
- **Course Management**: Merges multiple sections of the same course for easy selection
- **Interactive Timetable**: Visual weekly schedule display with time slots from 09:00 to 20:00
- **Time Slot Locking**: Lock specific time slots to avoid scheduling conflicts
- **Schedule Generation**: Creates valid timetable combinations that respect time constraints
- **Search & Filter**: Find courses by code, name, or lecturer
- **Dual Interface**: Both vanilla HTML and React implementations available

## 🏗️ Project Architecture

### Frontend Options

**1. HTML Version** (`frontend/public/index.html`)

- Standalone HTML file with vanilla JavaScript
- Complete Excel parsing and timetable generation
- Direct API integration
- Accessible at `http://localhost:8080`

**2. React Version** (`frontend/src/`)

- Modern React application with component-based architecture
- **Components**:
  - `App.jsx`: Main application container
  - `Timetable.jsx`: Weekly schedule visualization
  - `LectureSelector.jsx`: Course selection interface
  - `TimeSlotLocker.jsx`: Time slot management
  - `Header.jsx` & `Footer.jsx`: Layout components
- **Services**: API communication and schedule generation logic
- Accessible at `http://localhost:3000`

### Backend (`backend/`)

- **Node.js + Express** server providing RESTful API
- **Excel Processing**: Reads and parses `Courses.xls` using XLSX library
- **Data Structure**: Extracts course code, name, section, hours, lecturer, room, schedule, department, and ECTS
- **API Endpoints**:
  - `GET /api/lectures` - Returns all course data from Excel file
- Serves at `http://localhost:5000`

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Excel file: `Courses.xls` in the project root and `backend/data/` directory

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd TEDUSchedulerOA
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

The backend will start at `http://localhost:5000`

### 3. Frontend Setup

#### Option A: React Version (Recommended)

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Access React app at `http://localhost:3000`

#### Option B: HTML Version

```bash
# Serve static HTML file (from project root)
# Using Python
python -m http.server 8080

# Or using Node.js http-server
npx http-server -p 8080
```

Access HTML app at `http://localhost:8080`

## 📊 Excel Data Format

The application expects `Courses.xls` with the following columns:

- **Code**: Course code (e.g., "MATH 101")
- **Name**: Course name
- **Section**: Section identifier
- **Hours**: Credit hours
- **Lecturer**: Instructor name
- **Room**: Classroom location
- **ExcelTime**: Schedule in format like:
  - `"Mo 09 - 12"` (Single day)
  - `"Tu/Fr 09 - 12 Tu/Fr 13 - 15"` (Multiple sessions)
  - `"We 16 - 19"` (Afternoon session)
- **Department**: Academic department
- **ECTS**: European Credit Transfer System points

## 🎯 How to Use

1. **Start Services**: Run both backend and your chosen frontend
2. **Course Selection**: Browse available courses using search functionality
3. **Time Management**: Lock unavailable time slots using the time slot locker
4. **Schedule Generation**: Select desired courses and generate optimal timetable combinations
5. **Validation**: System automatically prevents scheduling conflicts
6. **Export**: View and use your optimized weekly schedule

## 🔧 Technical Details

### Time Format Parsing

- Supports abbreviated day names: Mo, Tu, We, Th, Fr
- Handles multi-session courses across different days
- Converts Excel time format to standard timetable slots

### Course Merging Logic

- Groups multiple sections of the same course by code and name
- Allows selection of preferred sections
- Maintains original scheduling information per section

### Conflict Resolution

- Prevents overlapping time slots
- Respects locked time periods
- Generates only valid schedule combinations

## 🚨 Troubleshooting

### Backend Issues

- Ensure `Courses.xls` exists in `backend/data/` directory
- Check Node.js version compatibility
- Verify port 5000 is available

### Frontend Issues

- Clear browser cache if using HTML version
- Ensure backend API is running before starting frontend
- Check browser console for JavaScript errors

### Excel Import Issues

- Verify Excel file format matches expected structure
- Check for proper time format in ExcelTime column
- Ensure no empty required fields

## 📁 File Structure

```
TEDUSchedulerOA/
├── Courses.xls              # Main course data file
├── README.md
├── .gitignore
├── backend/
│   ├── package.json
│   ├── data/
│   │   └── Courses.xls      # Backend copy of course data
│   └── src/
│       ├── index.js         # Express server
│       ├── controllers/
│       │   └── scheduleController.js
│       ├── routes/
│       │   └── api.js
│       └── services/
│           └── excelService.js
└── frontend/
    ├── package.json
    ├── public/
    │   ├── index.html       # Standalone HTML version
    │   └── favicon.svg
    └── src/
        ├── index.js         # React entry point
        ├── components/      # React components
        ├── services/        # API and business logic
        ├── styles/          # CSS files
        └── utils/           # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
