import React, { useEffect } from "react";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceList from "./pages/ServiceList";
import LabRegister from "./pages/LabDashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Carousel />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service-list" element={<ServiceList />} />
        <Route path="/lab-register" element={<LabRegister />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
