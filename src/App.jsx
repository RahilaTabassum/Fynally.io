import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Resources from "./assets/pages/Resources";
import Internships from "./assets/pages/Internships";
import Employment from "./assets/pages/Employment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/employment" element={<Employment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
