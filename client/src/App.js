import React from "react";
import SideBar from "./components/sidebar/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScheduleInterview from "./components/scheduleInterview/ScheduleInterview.jsx";
import { ViewScheduledInterview } from "./components/viewScheduledInterview/ViewScheduledInterview.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/schedule" element={<ScheduleInterview />} />
        <Route path="/view" element={<ViewScheduledInterview />} />
      </Routes>
    </Router>
  );
};

export default App;
