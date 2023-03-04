import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Tours from "./pages/Tours";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
