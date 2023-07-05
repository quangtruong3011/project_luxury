import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users"));

    if (savedUsers) {
      const matchedUser = savedUsers.find(
        (user) =>
          user.username === credentials.name && user.password === credentials.password
      );

      if (matchedUser) {
        setError("");
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/";
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("No users found. Please register first.");
    }
  };


  return (
    <section className="loginContainer relative pb-[100px] pt-[250px]">
      <section className="bgOverlay absolute top-0 z-0 h-full w-full bg-[rgba(72,72,72,0.3)]"></section>
      <div className="formContainer">
        <form
          className="relative z-10 mx-auto flex w-96 flex-col items-center gap-4 font-[Montserrat] text-white"
          action="login"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-5 text-4xl font-semibold text-white">
            LOGIN ACCOUNT
          </h2>
          <input
            className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="text"
            placeholder="Username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="password"
            placeholder="Password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button
            className="loginBtn my-4 w-44 border-2 border-[#e1bd85] bg-[#e1bd85] py-2.5 text-base font-semibold text-white hover:bg-white hover:text-[#e1bd85]"
            type="submit"
          >
            LOGIN
          </button>
          {error && <span>{error}</span>}
          <span className="accountDesc text-xs">
            <Link to="/register" className="hover:text-[#e1bd85]">
              I don't have an account
            </Link>{" "}
            -{" "}
            <Link to="#" className="hover:text-[#e1bd85]">
              Forgot password
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Login;
