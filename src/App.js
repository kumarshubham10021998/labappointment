import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";

function App() {
  return (
    <Router>
      <Header />
      <Carousel/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Carousel />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
      </Routes>
    </Router>
  );
}

export default App;
