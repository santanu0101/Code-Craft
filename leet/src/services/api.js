import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProblems = async () => {
  try {
    const response = await api.get('/questions/');
    return response.data;
  } catch (error) {
    console.error('Error fetching problems:', error);
    throw error;
  }
};

export const fetchProblemById = async (id) => {
  try {
    const response = await api.get(`/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching problem ${id}:`, error);
    throw error;
  }
};

export const runCode = async (problemId, code, language, testcase) => {
  try {
    const response = await api.post('/run', {
      problemId,
      code,
      language,
      testcase,
    });
    return response.data;
  } catch (error) {
    console.error('Error running code:', error);
    throw error;
  }
};

export const submitSolution = async (problemId, code, language) => {
  try {
    const response = await api.post('/submit', {
      problemId,
      code,
      language,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting solution:', error);
    throw error;
  }
};

export default api;