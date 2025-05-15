import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";
import LabRegister from "./pages/LabRegister";
import MainModal from "./components/MainModal";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const [userData, setUserData] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleLogin = (user) => {
    setUserData(user);
    setShowBookingModal(true);
  };

  return (
    <Router>
      <Header />
      <ScrollToTop />

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
        <Route
          path="/lab-register"
          element={<LabRegister onLogin={handleLogin} />}
        />
      </Routes>

      {userData && (
        <MainModal
          show={showBookingModal}
          onHide={() => setShowBookingModal(false)}
          heading="Book Appointment"
          registrationId={userData.registrationId}
          userData={userData}
        />
      )}

      <Footer />
    </Router>
  );
}

export default App;
