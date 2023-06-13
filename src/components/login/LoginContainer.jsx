import React, { useState, useEffect } from "react";

function LoginContainer() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleUserInput = (event) => {
    const enteredUser = event.target.value;
    setUserInput(enteredUser);
  };

  const handlePasswordInput = (event) => {
    const enteredPassword = event.target.value;
    setPasswordInput(enteredPassword);
  };

  let userDetails = {
    username: userInput,
    password: passwordInput,
  };
  const handleSubmit = () => {
    localStorage.setItem(userDetails, JSON.stringify(userDetails));
  };

  return (
    <div>
      <form
        className="mx-auto flex w-96 flex-col items-center bg-blue-500"
        style={{ fontFamily: "Hind" }}
        action="login"
      >
        <h1 className="text-5xl font-semibold">LOGIN</h1>
        <input
          className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="text"
          placeholder="User name"
          value={userInput}
          onChange={handleUserInput}
        />
        <input
          className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4"
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordInput}
        />
        <button className="text-lg" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginContainer;
