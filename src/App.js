import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import LoginContainer from "./components/login/LoginContainer";
import RegisterContainer from "./components/register/RegisterContainer";
import "./App.css";

function App({ isMobileDevice }) {
  return (
    <BrowserRouter>
      <Layout isMobileDevice={isMobileDevice}>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
