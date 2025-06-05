import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers"; // Correct import name
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";
import LabDashboard from "./pages/LabDashboard";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const [userData, setUserData] = useState(null);

  const handleHeaderLogin = (user) => {
    setUserData(user);
    console.log("User logged in from Header:", user);
  };

  const handleLogout = () => {
    setUserData(null);
    console.log("User logged out.");
  };

  return (
    <Router>
      <Headers
        onUserUpdate={handleHeaderLogin} // Send callback to child
        userData={userData} // Pass userData to child
        onLogout={handleLogout} // Handle logout from child
      />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
        <Route
          path="/lab-register"
          element={<LabDashboard userData={userData} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
