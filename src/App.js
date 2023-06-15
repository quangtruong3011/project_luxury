import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";

function App({ isMobileDevice }) {
  return (
    <BrowserRouter>
      <Layout isMobileDevice={isMobileDevice}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
