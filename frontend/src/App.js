import React from "react";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Client from "./pages/Client.jsx"
import TechStack from "./pages/TechStack.jsx"



import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/client" element={<Client />} />
        <Route path="/tech-stack" element={<TechStack />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
