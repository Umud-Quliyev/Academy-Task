import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:userId" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
