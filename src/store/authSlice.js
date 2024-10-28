import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../services/client"; // Adjust the path according to your structure

// Function to get token from local storage
const getTokenFromLocalStorage = () => {
  return localStorage.getItem("userToken");
};

// Function to set token in local storage
const setTokenToLocalStorage = (token) => {
  localStorage.setItem("userToken", token);
};

// Function to remove token from local storage
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("userToken");
};

// Define an async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await client.post("/auth/login", { email, password });
    return response; 
  }
);

// Define an async thunk for signup
export const signup = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password }) => {
    const response = await client.post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data; 
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: getTokenFromLocalStorage() || null, // Initialize token from local storage
    isAuthenticated: !!getTokenFromLocalStorage(), // Check if user is authenticated
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userToken = null;
      state.isAuthenticated = false;
      removeTokenFromLocalStorage(); // Remove token from local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token; // Assuming token is in the response
        state.isAuthenticated = true; // Set authenticated to true
        setTokenToLocalStorage(action.payload.token); // Store token in local storage
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle errors
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token; // Assuming token is in the response
        state.isAuthenticated = true; // Set authenticated to true
        setTokenToLocalStorage(action.payload.token); // Store token in local storage
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle errors
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
