// src/components/MockService.js
import axios from 'axios';

const mockService = {
  getData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Simulated data from the backend' });
      }, 1000);
    });
  }
};

export default mockService;