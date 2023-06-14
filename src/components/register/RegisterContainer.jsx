import React, { useState, useEffect } from "react";

function RegisterContainer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  };

  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  return (
    <div>
      <form
        className="mx-auto flex w-96 flex-col items-center bg-blue-500"
        style={{ fontFamily: "Hind" }}
        action="register"
      >
        <h1 className="text-5xl font-semibold">REGISTER FORM</h1>
        <input
          className="userNameInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="text"
          placeholder="User name*"
        />
        <input
          className="emailInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email*"
        />
        {!isValidEmail && <p className="text-red-500">Invalid email</p>}
        <input
          className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="password"
          placeholder="Password*"
        />
        <button className="text-lg" onClick={validateEmail}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default RegisterContainer;
