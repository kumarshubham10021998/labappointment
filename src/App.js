import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Carousel />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
