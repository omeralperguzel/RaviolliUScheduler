# University Schedule Creator

This project is a web application designed to help university students create and manage their lecture schedules. It allows users to select lectures, generate a timetable, and lock certain time slots to customize their schedules.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React and is responsible for the user interface. It includes the following components:

- **App.jsx**: The root component that manages the overall layout and state.
- **Header.jsx**: Renders the header of the application.
- **Footer.jsx**: Renders the footer of the application.
- **Timetable.jsx**: Displays the generated timetable for the selected lectures.
- **LectureSelector.jsx**: Allows users to select lectures from the available options.
- **TimeSlotLocker.jsx**: Enables users to lock certain time slots in the timetable.

The frontend also includes services for API calls and schedule generation, as well as utility functions for time-related operations.

### Backend

The backend is responsible for handling data and business logic. It includes:

- **scheduleController.js**: Handles requests related to schedule generation and retrieval.
- **excelService.js**: Reads and processes data from the `Courses.xls` file.
- **api.js**: Exports the API routes for the backend.

The backend serves the course data used for generating the timetable.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

## Usage

Once both the frontend and backend servers are running, you can access the application in your web browser. Use the lecture selector to choose your desired lectures, lock any time slots as needed, and generate your personalized timetable.

## License

This project is licensed under the MIT License.