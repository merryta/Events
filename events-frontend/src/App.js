import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Service from "./components/Service";
import Button from "./components/Button";
import CompanyRegForm from './components/CompanyRegForm';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="App__header">Header</div>
      <div className="App__body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/company" element={<CompanyRegForm />} />
            <Route path="/button" element={<Button />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="App__footer">Footer</div>
    </div>
  );
}

export default App;
