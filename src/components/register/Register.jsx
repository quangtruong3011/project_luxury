import React, { useState, useEffect } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [isValidEmail, setIsValidEmail] = useState(true);
  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = emailRegex.test(formData.email);
    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    //prevent reload
    event.preventDefault();
    //save form data to JSON file
    saveFormDataToJson(formData);
    //clear form inputs after submit
    setFormData({
      name: "",
      email: "",
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
        action="register"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl font-semibold text-white">REGISTER FORM</h1>
        <input
          className="userNameInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-white"
          type="text"
          placeholder="User name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="emailInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-white"
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {!isValidEmail && <p className="text-red-500">Invalid email</p>}
        <input
          className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-white"
          type="password"
          placeholder="Password*"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="text-lg text-white" onClick={validateEmail}>
          LOGIN
        </button>
      </form>
    </section>
  );
}

export default Register;
