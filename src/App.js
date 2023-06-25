import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RoomDetail from "./components/room-detail/RoomDetail";
import PaymentDetailForm from "./components/payment/PaymentDetailForm";
import "./App.css";

function App({ isMobileDevice }) {
  return (
    <BrowserRouter>
      <Layout isMobileDevice={isMobileDevice}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/room-detail" element={<RoomDetail />} />
          <Route path="/checkout" element={<PaymentDetailForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
