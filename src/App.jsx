import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Component/Navbar";
import Education from "./Pages/Education";
import Immigration from "./Pages/Immigation";
import Investing from "./Pages/Investment";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      {/* Navbar stays on ALL pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/investment" element={<Investing />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;