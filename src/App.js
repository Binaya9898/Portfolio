import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import pData from "./api/projectData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects data={pData} />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}
