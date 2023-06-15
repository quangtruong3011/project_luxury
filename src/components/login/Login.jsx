import React, { useState, useEffect } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    //prevent reload
    event.preventDefault();
    //save form data to JSON file
    saveFormDataToJson(formData);
    //clear form inputs after submit
    setFormData({
      name: "",
      password: "",
    });
  };

  const saveFormDataToJson = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <section className="pb-32 pt-56">
      <div className="bgOverlay h-full w-full"></div>
      <form
        className="mx-auto flex w-96 flex-col items-center bg-blue-500"
        style={{ fontFamily: "Montserrat" }}
        action="login"
      >
        <h2 className="text-5xl font-semibold text-white">LOGIN ACCOUNT</h2>
        <input
          className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-white"
          type="text"
          placeholder="User name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-white"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="text-lg text-white" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </section>
  );
}

export default Login;
