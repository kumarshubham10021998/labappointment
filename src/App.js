import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";
import Login from "./components/Login"; // assume moved to pages/Login.js
import { MainModal } from "./components/Modal"; // assume moved to components

function App() {
  const [userData, setUserData] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleLogin = (user) => {
    setUserData(user);
    setModalShow(true); // show booking modal after login
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />

      {/* Booking modal is not route-based, shown after login */}
      {userData && (
        <MainModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          heading="Book Appointment"
          registrationId={userData.registrationId}
        />
      )}
    </Router>
  );
}

export default App;
