import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/travelinfo" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
