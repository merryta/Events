import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import ServicePage from "./components/ServicePage";
import Login from "./components/Login";
// import Button from "./components/Button";
// import CompanyRegForm from './components/CompanyRegForm';
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
