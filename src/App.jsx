import React, {useMemo} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ImageDetail from "./pages/ProductDetail";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
// Placeholder for image detail page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/product-detail" element={<ImageDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default App;