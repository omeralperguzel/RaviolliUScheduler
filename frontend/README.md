# RaviolliUScheduler Frontend

## 🎯 Overview

The RaviolliUScheduler frontend is a sophisticated web application that provides both React-based and standalone HTML interfaces for university course scheduling. It offers intelligent timetable generation, conflict detection, and advanced filtering capabilities.

## 🚀 Key Features

### 📊 Smart Course Management

- **Dynamic Excel Import**: Upload and process course data files directly in the browser
- **Real-time Data Validation**: Instant feedback on file format and data integrity
- **Course Filtering**: Advanced search and filter by department, lecturer, or course code
- **Bulk Selection**: Select multiple courses with checkboxes and quick actions

### 🗓️ Advanced Timetable Generation

- **Multiple Combinations**: Generate and compare different schedule combinations
- **Conflict Detection**: Automatic identification of time conflicts between courses
- **Visual Conflict Highlighting**: Color-coded conflict indicators in the timetable
- **Empty Day Optimization**: Minimize or maximize free days based on preferences
- **Time Slot Constraints**: Lock specific time slots to customize scheduling

### 🎨 Interactive User Interface

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Drag & Drop**: Intuitive file upload with drag-and-drop support
- **Real-time Updates**: Live timetable updates as selections change
- **Export Functionality**: Save timetables as images or PDF documents
- **Session Management**: Save and load different scheduling sessions

### 📈 Advanced Analytics

- **Schedule Statistics**: View conflict counts, empty days, and course distribution
- **Optimization Metrics**: Score different combinations based on preferences
- **Time Analysis**: Visualize daily and weekly course load distribution
- **Lecturer Tracking**: Monitor course distribution across different instructors

## 🏗️ Architecture & Technologies

### Dual Frontend Architecture

#### **React Application** (`src/`)

- **React v18.2.0**: Modern component-based architecture
- **Create React App**: Pre-configured build system
- **Axios v1.6.0**: HTTP client for API communication
- **Component Architecture**: Modular, reusable UI components
- **State Management**: React hooks and context for state management
- **Hot Reloading**: Development server with instant updates

#### **Standalone HTML** (`public/index.html`)

- **Vanilla JavaScript**: No framework dependencies
- **ES6+ Features**: Modern JavaScript with async/await
- **Fetch API**: Native HTTP requests
- **Local Storage**: Browser-based data persistence
- **Progressive Enhancement**: Works without JavaScript enabled

### Core Technologies

- **HTML5**: Semantic markup with modern web standards
- **CSS3**: Advanced styling with flexbox and grid layouts
- **JavaScript ES6+**: Modern JavaScript features and syntax
- **Web APIs**: File API, Canvas API, Local Storage
- **HTML2Canvas**: Client-side screenshot generation
- **Responsive Design**: CSS media queries and flexible layouts

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html              # Standalone HTML application
│   ├── index_old.html          # Legacy version backup
│   ├── index_conflict1.html    # Development variant
│   ├── favicon.svg             # Application icon
│   └── manifest.json           # PWA configuration
├── src/
│   ├── index.js                # React application entry point
│   ├── components/
│   │   ├── App.jsx             # Main React application container
│   │   ├── Header.jsx          # Application header component
│   │   ├── Footer.jsx          # Application footer component
│   │   ├── LectureSelector.jsx # Course selection interface
│   │   └── TimeSlotLocker.jsx  # Time slot management
│   ├── services/
│   │   ├── api.js              # Backend API communication
│   │   └── scheduleGenerator.js # Timetable generation logic
│   ├── utils/
│   │   └── timeUtils.js        # Time parsing and formatting
│   └── styles/
│       └── main.css            # Application stylesheet
├── package.json                # Dependencies and build scripts
└── README.md                   # This documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Backend API running on `http://localhost:5000`

### React Application Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/omeralperguzel/RaviolliUScheduler.git
   cd RaviolliUScheduler/frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm start
   ```

4. **Access the application**:
   - React app: `http://localhost:3000`
   - Automatic browser opening
   - Hot reloading enabled

### Standalone HTML Setup

1. **Serve static files**:

   ```bash
   # Using Python
   python -m http.server 8080

   # Using Node.js http-server
   npx http-server -p 8080

   # Using PHP
   php -S localhost:8080
   ```

2. **Access the application**:
   - HTML app: `http://localhost:8080/public/index.html`
   - No build process required
   - Works offline (after initial load)

## 🎯 Core Functionalities

### File Upload System

```javascript
// Drag and drop file upload
const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append("coursesFile", file);

  const response = await fetch("/api/upload-courses", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return result;
};
```

### Timetable Generation Algorithm

```javascript
// Generate all possible schedule combinations
const generateCombinations = (selectedCourses) => {
  const combinations = [];
  const generateRecursive = (index, currentCombination) => {
    if (index === selectedCourses.length) {
      if (!hasConflicts(currentCombination)) {
        combinations.push([...currentCombination]);
      }
      return;
    }

    for (const section of selectedCourses[index].sections) {
      currentCombination.push(section);
      generateRecursive(index + 1, currentCombination);
      currentCombination.pop();
    }
  };

  generateRecursive(0, []);
  return combinations;
};
```

### Conflict Detection

```javascript
// Check for time conflicts between courses
const detectConflicts = (schedule) => {
  const conflicts = [];

  for (let i = 0; i < schedule.length; i++) {
    for (let j = i + 1; j < schedule.length; j++) {
      if (hasTimeOverlap(schedule[i], schedule[j])) {
        conflicts.push({
          course1: schedule[i],
          course2: schedule[j],
          type: "time_conflict",
        });
      }
    }
  }

  return conflicts;
};
```

## 🎨 User Interface Components

### Course Selector Interface

- **Search Bar**: Real-time course filtering
- **Department Filter**: Filter by academic department
- **Lecturer Filter**: Filter by instructor name
- **Credit Hours Filter**: Filter by course credit hours
- **Bulk Actions**: Select/deselect multiple courses
- **Course Details**: Expandable course information panels

### Timetable Visualization

- **Weekly Grid**: Monday-Friday, 9:00 AM - 8:00 PM
- **Color Coding**: Different colors for each course
- **Conflict Highlighting**: Red borders for conflicting courses
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Cells**: Click to view detailed course information
- **Export Options**: Save as image or print-friendly format

### Advanced Controls

- **Time Slot Locking**: Prevent scheduling during specific hours
- **Empty Day Preferences**: Minimize or maximize free days
- **Conflict Resolution**: Suggestions for resolving schedule conflicts
- **Alternative Sections**: Quick switching between course sections
- **Combination Navigator**: Browse through different schedule options

## 📊 Features Deep Dive

### Smart Filtering System

```javascript
// Multi-criteria course filtering
const filterCourses = (courses, filters) => {
  return courses.filter((course) => {
    const matchesDepartment =
      !filters.department || course.department.includes(filters.department);
    const matchesLecturer =
      !filters.lecturer ||
      course.lecturer.toLowerCase().includes(filters.lecturer.toLowerCase());
    const matchesCode =
      !filters.code ||
      course.code.toLowerCase().includes(filters.code.toLowerCase());
    const matchesCredits =
      !filters.credits || course.credits === filters.credits;

    return (
      matchesDepartment && matchesLecturer && matchesCode && matchesCredits
    );
  });
};
```

### Session Management

```javascript
// Save and load user sessions
const saveSession = (sessionData) => {
  const session = {
    selectedCourses: sessionData.courses,
    lockedSlots: sessionData.lockedSlots,
    preferences: sessionData.preferences,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem("scheduleSession", JSON.stringify(session));
};

const loadSession = () => {
  const saved = localStorage.getItem("scheduleSession");
  return saved ? JSON.parse(saved) : null;
};
```

### Export Functionality

```javascript
// Export timetable as image
const exportTimetable = async (format = "png") => {
  const timetableElement = document.querySelector(".timetable");

  if (format === "png") {
    const canvas = await html2canvas(timetableElement, {
      backgroundColor: "#ffffff",
      scale: 2,
      logging: false,
    });

    const link = document.createElement("a");
    link.download = `timetable_${new Date().toISOString().split("T")[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }
};
```

## 🔧 Configuration Options

### Environment Configuration

```bash
# .env file
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_MAX_COMBINATIONS=1000
REACT_APP_DEFAULT_TIME_SLOT_DURATION=60
```

### Build Configuration

```json
// package.json scripts
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:html": "cp public/index.html build/",
    "serve": "npx http-server build -p 8080"
  }
}
```

## 🧪 Testing & Development

### Development Mode

```bash
# Start with hot reloading
npm start

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Production Build

```bash
# Create optimized build
npm run build

# Serve production build
npx serve -s build -p 3000
```

### Browser Compatibility

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

```bash
# Build for production
npm run build

# Deploy build folder
# The build folder contains all static assets
```

### Docker Deployment

```dockerfile
FROM nginx:alpine
COPY build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🐛 Troubleshooting

### Common Issues

**API Connection Failed**:

- Verify backend is running on port 5000
- Check CORS configuration
- Verify network connectivity

**File Upload Not Working**:

- Check file size limits
- Verify file format (Excel only)
- Clear browser cache

**Timetable Not Generating**:

- Ensure courses are selected
- Check for data validation errors
- Verify Excel file structure

**Performance Issues**:

- Limit number of selected courses
- Use course filtering
- Clear browser storage

### Debug Mode

```javascript
// Enable debug logging
const DEBUG_MODE = process.env.NODE_ENV === "development";

const debugLog = (message, data) => {
  if (DEBUG_MODE) {
    console.log(`[DEBUG] ${message}:`, data);
  }
};
```

## 📱 Progressive Web App Features

- **Offline Support**: Cache courses and work without internet
- **Install Prompt**: Add to home screen capability
- **Push Notifications**: Schedule reminders and updates
- **Background Sync**: Sync data when connection is restored

## 🎯 Performance Optimization

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: Service worker for asset caching
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Memory Management**: Proper component cleanup

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Issues**: Report bugs and feature requests on GitHub
- **Documentation**: Check the wiki for detailed guides
- **Community**: Join discussions in GitHub Discussions
- **Email**: Contact maintainers for enterprise support
