// src/services/apiService.ts
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/'; // Adjust the URL if needed

export const getMembers = async () => {
    const response = await axios.get(`${API_URL}members/`);
    return response.data;
};

export const createMember = async (memberData: any) => {
    const response = await axios.post(`${API_URL}members/`, memberData);
    return response.data;
};

export const getActivities = async () => {
    const response = await axios.get(`${API_URL}activities/`);
    return response.data;
};

export const createActivity = async (activityData: any) => {
    const response = await axios.post(`${API_URL}activities/`, activityData);
    return response.data;
};
