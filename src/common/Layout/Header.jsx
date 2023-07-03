import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import headerLogo from "../../common/Layout/img/header-logo.png";

const Header = () => {
  const navigateBackHome = useNavigate();
  const user = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigateBackHome("/");
  };

  return (
    <header>
      <div className="header-top bg-transparent">
        <div className="container mx-auto flex justify-between">
          <div className="header-left flex">
            <span className="mr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                />
              </svg>
              18 °C
            </span>
            <span className="mr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              225 Beach Street, Australian
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              1-548-854-8898
            </span>
          </div>
          <div className="header-right flex">
            <span className="login-register">
              <div className="inline-block">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="px-2 text-sm text-black"
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link to="/login" className="px-2 text-sm text-black">
                    LOGIN
                  </Link>
                )}
              </div>
              {user ? (
                ""
              ) : (
                <Link to="/register" className="px-2 text-sm text-black">
                  REGISTER
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="Header-content bg-white py-3">
        <div className="container mx-auto flex items-center">
          <div className="header-logo mr-10 w-[155px] py-2">
            <img src={headerLogo} alt="" />
          </div>
          <nav className="header-menu">
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  className="p-5 text-sm font-medium text-[#232323] hover:bg-[#e1bd85] hover:text-white"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="p-5 text-sm font-medium text-[#232323] hover:bg-[#e1bd85] hover:text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="p-5 text-sm font-medium text-[#232323] hover:bg-[#e1bd85] hover:text-white"
                >
                  ROOM
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-5 text-sm font-medium text-[#232323] hover:bg-[#e1bd85] hover:text-white"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="p-5 text-sm font-medium text-[#232323] hover:bg-[#e1bd85] hover:text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
