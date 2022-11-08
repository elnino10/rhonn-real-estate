import React from "react";
import { Routes, Route } from "react-router-dom";

import Content from "./layout/Content";
import AboutUs from "./layout/AboutUs";
import ContactUs from "./layout/ContactUs";
import Events from "./pages/Events";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
