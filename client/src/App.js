import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs";
import Services from "./pages/Services";
import PropDetailsPage from "./pages/PropDetailsPage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");

  console.log(state, category);
  const submitFilterHandler = (state, category) => {
    setState(state);
    setCategory(category);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Content onSubmitFilter={submitFilterHandler} />}
        />
        <Route path="/props/:itemId" element={<PropDetailsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/properties_on-listing"
          element={<PropertiesPage state={state} category={category} />}
        />
      </Routes>
      <ContactUs />
    </>
  );
}

export default App;
