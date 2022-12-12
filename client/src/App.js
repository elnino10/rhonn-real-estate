import React from "react";
import { Routes, Route } from "react-router-dom";

import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./pages/Services";
import PropDetailsPage from "./pages/PropDetailsPage";
import PropertiesPage from "./pages/PropertiesPage";

function App () {

  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props/:itemId" element={<PropDetailsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties_on-listing" element={<PropertiesPage />} />
      </Routes>
      <ContactUs />
    </>
  );
}

export default App;
