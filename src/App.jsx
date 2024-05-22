import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";

import Services from "./Component/Services";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
