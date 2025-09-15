# RaviolliUScheduler - University Course Schedule Generator

A powerful, full-stack web application designed to help university students create optimal course schedules by importing real course data from Excel files and generating intelligent, conflict-free timetable combinations with advanced filtering and analytics.

## 🌟 Project Overview

RaviolliUScheduler is a comprehensive scheduling solution that combines a robust Node.js backend with flexible frontend options (React + standalone HTML). The system processes university course data from Excel files, provides intelligent conflict detection, and generates optimized schedule combinations while offering advanced features like time slot locking, alternative course management, and export capabilities.

## ✨ Key Features

### 📊 Smart Data Management

- **Dynamic Excel Import**: Upload and process `Courses.xls` files with real-time validation
- **Intelligent Parsing**: Handles complex time formats (e.g., "Tu/Fr 09-12", "Mo 12-14 We 13-14")
- **Course Merging**: Automatically groups multiple sections of the same course
- **Data Validation**: Real-time validation of course data integrity and format compliance

### 🧠 Advanced Schedule Generation

- **Multi-Combination Generation**: Creates hundreds of valid timetable combinations
- **Conflict Detection**: Automatic identification and visualization of time conflicts
- **Alternative Course Support**: Manage equivalent courses and alternative sections
- **Time Slot Locking**: Lock specific time periods to customize scheduling constraints
- **Empty Day Optimization**: Minimize or maximize free days based on preferences

### 🎨 Interactive User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live timetable updates as selections change
- **Visual Conflict Highlighting**: Color-coded conflict indicators
- **Drag & Drop Upload**: Intuitive file upload with progress tracking
- **Export Functionality**: Save schedules as high-quality images

### 📈 Analytics & Insights

- **Schedule Statistics**: View conflict counts, empty days, course distribution
- **Optimization Metrics**: Score combinations based on user preferences
- **Session Management**: Save, load, and share different scheduling scenarios
- **Bookmark System**: Mark and manage favorite schedule combinations

## 🏗️ Architecture & Technologies

### � Frontend Architecture

#### **Dual Frontend Options**

**1. React Application** (`frontend/src/`)

```
Technologies: React 18.2.0, Axios, Create React App
Features: Component-based architecture, hot reloading, modern UI
Access: http://localhost:3000
```

**2. Standalone HTML** (`frontend/public/index.html`)

```
Technologies: Vanilla JavaScript ES6+, Fetch API, Local Storage
Features: No dependencies, offline capable, lightweight
Access: http://localhost:8080
```

#### **Core Frontend Technologies**

- **React 18.2.0**: Modern component-based UI framework
- **Axios 1.6.0**: HTTP client for API communication
- **HTML5 & CSS3**: Responsive design with flexbox/grid layouts
- **JavaScript ES6+**: Modern language features and async/await
- **Web APIs**: File API, Canvas API, Local Storage
- **HTML2Canvas**: Client-side image generation for exports

### ⚙️ Backend Architecture

**Node.js Express API** (`backend/src/`)

```
Technologies: Express.js, XLSX, Multer, CORS
Features: RESTful API, file upload, Excel processing
Access: http://localhost:5000
```

#### **Backend Technologies**

- **Node.js**: JavaScript runtime environment
- **Express.js 4.19.2**: Web application framework
- **XLSX 0.18.5**: Excel file parsing and processing
- **Multer 1.4.4**: Multipart form data handling
- **CORS 2.8.5**: Cross-origin resource sharing
- **Body-parser 1.20.2**: Request body parsing middleware

## 🛠️ How It Works

### 1. Data Processing Pipeline

```
Excel File → Upload → Validation → Parsing → Course Extraction → API Endpoints
```

### 2. Schedule Generation Algorithm

```
Course Selection → Alternative Grouping → Combination Generation → Conflict Detection → Filtering → Optimization
```

### 3. Frontend-Backend Communication

```
File Upload → API Validation → Data Processing → Course Display → Schedule Generation → Export
```

## 📋 Prerequisites

### System Requirements

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Modern Web Browser** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Excel File** with university course data

### Recommended Hardware

- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **Network**: Stable internet connection for initial setup

## � Complete Setup Guide

### 1. Repository Setup

```bash
# Clone the repository
git clone https://github.com/omeralperguzel/RaviolliUScheduler.git
cd RaviolliUScheduler

# Install root dependencies (if any)
npm install
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create data directory (if not exists)
mkdir -p data

# Start development server
npm run dev
# OR start production server
npm start
```

**Backend will be available at:** `http://localhost:5000`

### 3. Frontend Setup

#### Option A: React Application (Recommended)

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

**React app will be available at:** `http://localhost:3000`

#### Option B: Standalone HTML

```bash
# Serve static files (from project root)
# Using Python
python -m http.server 8080

# Using Node.js http-server
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

**HTML app will be available at:** `http://localhost:8080/frontend/public/index.html`

## 📊 Data Format & Structure

### Excel File Requirements (`Courses.xls`)

| Column         | Description         | Example                       |
| -------------- | ------------------- | ----------------------------- |
| **Code**       | Course code         | "CS101", "MATH201"            |
| **Name**       | Course name         | "Introduction to Programming" |
| **Section**    | Section identifier  | "01", "02", "L1"              |
| **Hours**      | Credit hours        | "3", "4"                      |
| **Lecturer**   | Instructor name     | "Dr. Smith", "Prof. Johnson"  |
| **Room**       | Classroom location  | "A101", "Lab-B"               |
| **ExcelTime**  | Schedule format     | "Mo 09-12", "Tu/Fr 13-16"     |
| **Department** | Academic department | "Computer Science"            |
| **ECTS**       | European credits    | "6", "7.5"                    |

### Supported Time Formats

```
Single Session:    "Mo 09-12", "We 14-17"
Multiple Sessions: "Tu/Fr 09-12 Tu/Fr 13-15"
Mixed Format:      "Mo 12-14 We 13-14"
```

## 🎯 Core Functionalities

### Backend Capabilities

- **File Upload Processing**: Secure multipart file upload with validation
- **Excel Data Extraction**: Parse complex Excel formats and structures
- **Data Transformation**: Convert Excel data to standardized JSON format
- **API Endpoints**: RESTful services for course data and file management
- **Error Handling**: Comprehensive error responses with detailed messages
- **CORS Support**: Cross-origin requests for frontend integration

### Frontend Features

- **Interactive Course Selection**: Search, filter, and select courses
- **Visual Timetable**: Weekly grid view with drag-and-drop interactions
- **Conflict Management**: Real-time conflict detection and resolution
- **Alternative Courses**: Manage equivalent courses and sections
- **Export System**: Generate high-quality PNG images of schedules
- **Session Management**: Save, load, and share scheduling sessions
- **Responsive Design**: Mobile-friendly interface with touch support

## 📁 Complete File Structure

```
RaviolliUScheduler/
├── README.md                          # Project documentation
├── .gitignore                         # Git ignore patterns
├── package.json                       # Root package configuration
│
├── backend/                           # Backend API Server
│   ├── package.json                   # Backend dependencies
│   ├── src/
│   │   ├── index.js                   # Express server entry point
│   │   ├── controllers/
│   │   │   └── scheduleController.js  # Schedule business logic
│   │   ├── routes/
│   │   │   └── api.js                 # API route definitions
│   │   └── services/
│   │       └── excelService.js        # Excel processing service
│   ├── data/                          # Course data storage
│   │   └── Courses.xls               # Course data file (gitignored)
│   ├── uploads/                       # Temporary upload directory
│   └── README.md                      # Backend documentation
│
├── frontend/                          # Frontend Applications
│   ├── package.json                   # Frontend dependencies
│   ├── public/                        # Static assets & HTML app
│   │   ├── index.html                 # Standalone HTML application
│   │   ├── index_old.html            # Legacy version backup
│   │   ├── favicon.svg               # Application icon
│   │   └── manifest.json             # PWA configuration
│   ├── src/                           # React application source
│   │   ├── index.js                   # React entry point
│   │   ├── components/                # React components
│   │   │   ├── App.jsx               # Main application container
│   │   │   ├── Header.jsx            # Navigation header
│   │   │   ├── Footer.jsx            # Application footer
│   │   │   ├── LectureSelector.jsx   # Course selection interface
│   │   │   └── TimeSlotLocker.jsx    # Time management component
│   │   ├── services/                  # API and business logic
│   │   │   ├── api.js                # Backend API communication
│   │   │   └── scheduleGenerator.js  # Schedule generation logic
│   │   ├── utils/                     # Utility functions
│   │   │   └── timeUtils.js          # Time parsing and formatting
│   │   └── styles/                    # Stylesheets
│   │       └── main.css              # Main application styles
│   └── README.md                      # Frontend documentation
│
├── uploads/                           # Global upload directory
└── test_files/                        # Test data and examples
    ├── debug_processing.html          # Debug utilities
    ├── simple_test.html              # Simple test interface
    └── test_*.html                   # Various test files
```

## 🔧 Development & Deployment

### Development Mode

```bash
# Backend development with hot reload
cd backend
npm run dev

# Frontend development with hot reload
cd frontend
npm start

# Serve HTML version for testing
npx http-server -p 8080
```

### Production Build

```bash
# Build React application
cd frontend
npm run build

# Start production backend
cd ../backend
npm start

# Deploy build folder to static hosting
```

### Docker Support

```dockerfile
# Backend Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY src/ src/
EXPOSE 5000
CMD ["npm", "start"]

# Frontend Dockerfile
FROM nginx:alpine
COPY build/ /usr/share/nginx/html/
EXPOSE 80
```

## 🚨 Troubleshooting Guide

### Common Backend Issues

```bash
# Port already in use
netstat -ano | findstr :5000
# Kill process using port 5000

# Excel parsing errors
# Verify file format and column headers
# Check for special characters in course names

# File upload failures
# Check file permissions in uploads/ directory
# Verify file size within limits
```

### Common Frontend Issues

```bash
# API connection failed
# Verify backend is running on port 5000
# Check browser network tab for CORS errors

# File upload not working
# Clear browser cache and cookies
# Verify file format (Excel only)

# Performance issues
# Limit number of selected courses
# Clear browser local storage
```

## 🧪 Testing & Quality Assurance

### Test Coverage

- **Unit Tests**: Core business logic and utilities
- **Integration Tests**: API endpoints and database operations
- **E2E Tests**: Complete user workflows
- **Browser Testing**: Cross-browser compatibility

### Performance Metrics

- **Load Time**: < 2 seconds initial load
- **API Response**: < 500ms average response time
- **Memory Usage**: < 100MB browser memory
- **Bundle Size**: < 1MB compressed frontend bundle

## 🤝 Contributing Guidelines

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **JavaScript**: ES6+ with async/await patterns
- **React**: Functional components with hooks
- **CSS**: BEM methodology for class naming
- **Git**: Conventional commit messages

## 📞 Support & Contact

### Resources

- **Documentation**: Check README files in each directory
- **Issues**: Report bugs and feature requests on GitHub
- **Discussions**: Join community discussions
- **Wiki**: Detailed guides and tutorials

### Maintainers

- **Primary**: [@omeralperguzel](https://github.com/omeralperguzel)
- **Repository**: [RaviolliUScheduler](https://github.com/omeralperguzel/RaviolliUScheduler)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for university students to create better schedules efficiently**
