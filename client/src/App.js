import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs";
import Blog from "./pages/Blog";
import PropDetailsPage from "./pages/PropDetailsPage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  const [stateVal, setStateVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");

  const submitFilterHandler = ({state, category}) => {
    setStateVal(state);
    setCategoryVal(category);
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
        <Route path="/services" element={<Blog />} />
        <Route
          path="/properties_on-listing"
          element={<PropertiesPage state={stateVal} category={categoryVal} />}
        />
      </Routes>
      <ContactUs />
    </>
  );
}

export default App;
