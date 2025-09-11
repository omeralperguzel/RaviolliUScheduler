# University Schedule Creator Backend

## Overview
The University Schedule Creator is a web application designed to help students create and manage their university schedules. The backend of the application is responsible for handling data retrieval, processing, and serving API requests to the frontend.

## Features
- Retrieve course data from an Excel file (`Courses.xls`).
- Generate timetables based on selected lectures.
- Lock specific time slots to limit timetable combinations.

## Project Structure
- **src/controllers**: Contains the schedule controller that manages requests related to schedule generation and retrieval.
- **src/services**: Includes services for reading and processing data from the Excel file.
- **src/routes**: Defines the API routes for the backend.
- **data**: Contains the `Courses.xls` file with course data.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd university-schedule-creator/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/schedule**: Retrieve the generated timetable.
- **POST /api/schedule**: Generate a new timetable based on selected lectures and locked time slots.

## License
This project is licensed under the MIT License.