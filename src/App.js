import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store
import Home from "./pages/home/HomePage"; // Example component
import Login from "./pages/auth/login"; // Adjust path as needed
import Signup from "pages/auth/signup";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication state

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </Router>
  );
};

export default App;
