# University Schedule Creator

This project is a web application designed to help university students create and manage their lecture schedules. It retrieves course data from an Excel file and allows users to generate a timetable based on their selected lectures and locked time slots.

## Features

- Retrieve lectures and timetables from `Courses.xls`.
- Generate a timetable from Monday to Friday with 1-hour intervals from 9:00 to 20:00.
- Select lectures from available options.
- Lock certain time slots to limit timetable combinations.

## Project Structure

```
university-schedule-creator
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.svg
│   ├── src
│   │   ├── components
│   │   │   ├── App.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Timetable.jsx
│   │   │   ├── LectureSelector.jsx
│   │   │   └── TimeSlotLocker.jsx
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── scheduleGenerator.js
│   │   ├── utils
│   │   │   └── timeUtils.js
│   │   ├── styles
│   │   │   └── main.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── scheduleController.js
│   │   ├── services
│   │   │   └── excelService.js
│   │   ├── routes
│   │   │   └── api.js
│   │   └── index.js
│   ├── data
│   │   └── Courses.xls
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd university-schedule-creator/frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the frontend application:
   ```
   npm start
   ```

5. Navigate to the backend directory:
   ```
   cd ../backend
   ```

6. Install dependencies:
   ```
   npm install
   ```

7. Start the backend application:
   ```
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000` to access the frontend application.
- Use the lecture selector to choose your desired lectures.
- Lock any time slots as needed to customize your timetable.
- View the generated timetable based on your selections.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.