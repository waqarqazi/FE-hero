import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { CssBaseline } from "@mui/material";
import App from "./App";

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App inside the root
root.render(
  <Provider store={store}>
    {<NotificationContainer />}
    <CssBaseline />
    <App />
  </Provider>
);
