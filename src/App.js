import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Rooms from "./components/rooms/Rooms";
<<<<<<< HEAD
import About from "./components/about/About";
=======
import RoomDetail from "./components/room-detail/RoomDetail";
>>>>>>> 847ca4b1b12c40bd8dc5a63ed66ec40d6bd57335
import "./App.css";

function App({ isMobileDevice }) {
  return (
    <BrowserRouter>
      <Layout isMobileDevice={isMobileDevice}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element={<Rooms />} />
<<<<<<< HEAD
          <Route path="/about" element={<About />} />
=======
          <Route path="/room-detail" element={<RoomDetail />} />
>>>>>>> 847ca4b1b12c40bd8dc5a63ed66ec40d6bd57335
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
