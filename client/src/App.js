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
import Kanban from "./pages/Kanban";
import Calendar from "./components/Calendar";
import Chat from "./components/Chat";
import ChatRoom from "./pages/ChatRoom";

// 
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
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/schedule/:title" element={<Schedule/>} />
        <Route path="/travmates/:title" element={<TravMates />} />
        <Route path="/attraction/:Tourist_locations" element={<TouristAttraction />} />
        <Route path="/userinfo" element={<Info />} />
        {/* <Route path="/chatRoom" element={<PrivateRoute> <ChatRoom /> </PrivateRoute>} /> */}

        
      </Routes>
      <Footer />
    </Router>
    </Appstate.Provider>
  );
}
export {Appstate}
export default App;
