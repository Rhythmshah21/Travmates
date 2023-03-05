import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { createContext, useState } from "react";
import Schedule from "./components/Schedule";
import TravMates from "./components/TravMates";
import TouristAttraction from "./components/TouristAttraction";
import Login from "./components/Login";
import Register from "./components/Register";
import ChatRoom from "./pages/ChatRoom";
import { PrivateRoute } from "./Routes/PrivateRoute";
// import Chatbot from "./pages/Chatbot";

const Appstate = createContext();

function App() {
  const [login,setLogin] = useState(false);
  const {id} = useParams();
  
  return (
    <Appstate.Provider value={{login,setLogin}}>

    <Router>
      <Navbar />

      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/schedule/:id" element={<Schedule/>} />
        <Route path="/travmates/:id" element={<TravMates />} />
        <Route path="/attraction/:id" element={<TouristAttraction />} />
        <Route path="/userinfo" element={<Info />} />
        <Route path="/chatRoom" element={<PrivateRoute> <ChatRoom /> </PrivateRoute>} />

        
      </Routes>
      <Footer />
    </Router>
    </Appstate.Provider>
  );
}
export {Appstate}
export default App;
