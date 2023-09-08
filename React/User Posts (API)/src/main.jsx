import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import Post from "./components/Post/Post.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:userId" element={<Detail />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
);
