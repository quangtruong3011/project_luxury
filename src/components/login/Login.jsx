import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  // const saveFormDataToJson = () => {
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   users.push(formData);
  //   localStorage.setItem("users", JSON.stringify(users));
  // };

  return (
    <div className="loginContainer relative pb-32 pt-28">
      <section className="bgOverlay absolute top-0 z-0 h-full w-full bg-[rgba(72,72,72,0.3)]"></section>
      <section className="formContainer">
        <form
          className="relative z-10 mx-auto flex w-96 flex-col items-center gap-4 font-[Montserrat] text-white"
          action="login"
        >
          <h2 className="mb-5 text-4xl font-semibold text-white">
            LOGIN ACCOUNT
          </h2>
          <input
            className="userInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
          <input
            className="passwordInputBox h-10 w-full border-2 border-solid border-white bg-transparent px-4 text-xs text-white placeholder:text-white"
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button
            className="loginBtn my-4 w-44 border-2 border-[#e1bd85] bg-[#e1bd85] py-2.5 text-base font-semibold text-white hover:bg-white hover:text-[#e1bd85]"
            onClick={handleClick}
            disabled={loading}
          >
            LOGIN
          </button>
          {error && <span>{error.message}</span>}
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
      </section>
    </div>
  );
}

export default Login;
