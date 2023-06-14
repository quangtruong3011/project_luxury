import "./Header.css";
import CurrencyDropdown from "./CurrencyDropdown";
import LanguageDropdown from "./LanguageDropdown";
import Nav from "../nav/Nav";


const Header = () => {
    return (
        <header>
            <div className="header-top bg-blue-500">
                <div className="container mx-auto flex justify-between">
                    <div className="header-left flex">
                        <span className="flex items-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                            </svg>
                            18 °C
                        </span>
                        <span className="flex items-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            225 Beach Street, Australian
                        </span>
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            1-548-854-8898
                        </span>
                    </div>
                    <div className="header-right flex">
                        <span className="login-register">
                            <a className="text-sm text-white px-2" href="#">LOGIN</a>
                            <a className="text-sm text-white px-2" href="#">REGISTER</a>
                        </span>
                        <CurrencyDropdown />
                        <LanguageDropdown />
                        {/* <div className="dropdown currency">
                            <span>USD</span>
                            <ul>
                                <li className="active">USD</li>
                                <li>VND</li>
                            </ul>
                        </div>
                        <div className="dropdown laguage">
                            <span>ENG</span>
                            <ul>
                                <li className="active">ENG</li>
                                <li>VN</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="Header-content">
                <div className="container mx-auto">
                    <div className="header-logo">
                        <img src="https://landing.engotheme.com/html/lotus/demo/images/logo-header.png" alt="" />
                    </div>
                    <nav className="header-menu">
                        <Nav />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;