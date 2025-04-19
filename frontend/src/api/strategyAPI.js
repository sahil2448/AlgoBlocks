// src/api/strategyAPI.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com/api'; // Change this to your actual backend

// Save a new strategy
export const saveStrategy = async (strategyData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/strategies`, strategyData);
    return response.data;
  } catch (error) {
    console.error('Error saving strategy:', error);
    throw error;
  }
};

// Get all saved strategies
export const getStrategies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/strategies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching strategies:', error);
    throw error;
  }
};
