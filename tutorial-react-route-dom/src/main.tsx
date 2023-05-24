import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
