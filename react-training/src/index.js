import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* These child inherit the content from their parent */}
        <Route path="users" element={<User />} />
        <Route path="admins" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
  /* </React.StrictMode> */
);

reportWebVitals();
