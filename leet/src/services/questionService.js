// src/services/questionService.js
import axios from 'axios';

// Create an Axios instance with default config
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'localhost:8000/api/questions/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for authentication if needed
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle different error statuses globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          localStorage.removeItem('token');
          // window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          console.error('You do not have permission to access this resource');
          break;
        case 404:
          // Not found
          console.error('Resource not found');
          break;
        case 500:
          // Server error
          console.error('Server error occurred');
          break;
        default:
          console.error('An error occurred:', error.response.data);
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

// Question-related API functions
const questionService = {
  // Get all questions with optional filtering
  getAllQuestions: async (filters = {}) => {
    try {
      const response = await apiClient.get('/questions', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  },

  // Get a single question by ID
  getQuestionById: async (id) => {
    try {
      const response = await apiClient.get(`/questions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching question ${id}:`, error);
      throw error;
    }
  },

  // Get problem of the day
  getProblemOfDay: async () => {
    try {
      const response = await apiClient.get('/questions/problem-of-day');
      return response.data;
    } catch (error) {
      console.error('Error fetching problem of the day:', error);
      throw error;
    }
  },

  // Submit a solution for a question
  submitSolution: async (questionId, solution) => {
    try {
      const response = await apiClient.post(`/questions/${questionId}/submit`, { solution });
      return response.data;
    } catch (error) {
      console.error(`Error submitting solution for question ${questionId}:`, error);
      throw error;
    }
  },

  // Get all companies
  getCompanies: async () => {
    try {
      const response = await apiClient.get('/companies');
      return response.data;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw error;
    }
  },

  // Get all topics
  getTopics: async () => {
    try {
      const response = await apiClient.get('/topics');
      return response.data;
    } catch (error) {
      console.error('Error fetching topics:', error);
      throw error;
    }
  }
};

export default questionService;