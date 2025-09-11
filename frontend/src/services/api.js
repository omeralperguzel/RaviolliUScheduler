import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchLectures = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/lectures`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lectures:', error);
        throw error;
    }
};

export const fetchTimetable = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/timetable`);
        return response.data;
    } catch (error) {
        console.error('Error fetching timetable:', error);
        throw error;
    }
};

export const lockTimeSlot = async (timeSlot) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/lock-time-slot`, { timeSlot });
        return response.data;
    } catch (error) {
        console.error('Error locking time slot:', error);
        throw error;
    }
};