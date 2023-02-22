import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
