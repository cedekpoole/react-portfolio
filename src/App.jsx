import "./App.css";

// Import header and footer component (so they can be displayed on each page)
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import routes that can link to each page
import { Routes, Route } from "react-router-dom";

// Import each individual page
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
