import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import SideBar from "./components/sidebar/Sidebar.jsx";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      <Footer />
    </React.Fragment>
  );
};

export default App;
