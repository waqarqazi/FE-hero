// src/services/authService.js
import client from "./client";

const authService = {
  login: async (userCredentials) => {
    const response = await client.post("/auth/login", userCredentials);
    return response; // Return response data
  },
};

export default authService;
