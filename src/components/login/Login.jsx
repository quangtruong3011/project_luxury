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
    <div className="relative pb-32 pt-28">
      <section className="bgOverlay absolute top-0 z-0 h-full w-full bg-[rgba(72,72,72,0.3)]"></section>
      <section className="formContainer">
        <form
          className="relative z-10 mx-auto flex w-96 flex-col items-center gap-4 text-white font-[Montserrat]"
          action="login"
        >
          <h2 className="mb-5 text-4xl font-semibold text-white">
            LOGIN ACCOUNT
          </h2>
          <input
            className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="text"
            placeholder="Username"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="loginBtn font-semibold my-4 w-44 bg-[#e1bd85] py-2.5 text-base text-white border-2 border-[#e1bd85] hover:bg-white hover:text-[#e1bd85]"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <span className="accountDesc text-xs">
            <a href="#" className="hover:text-[#e1bd85]">I don't have an account</a> - <a href="#" className="hover:text-[#e1bd85]">Forgot password</a>
          </span>
        </form>
      </section>
    </div>
  );
}

export default Login;
