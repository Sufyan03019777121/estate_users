import { AuthProvider } from "./Pages/context/authContext/AuthContext";
import ReactDOM from "react-dom/client";

import "antd/dist/reset.css"; 
import React from "react";
import App from "./App";
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);