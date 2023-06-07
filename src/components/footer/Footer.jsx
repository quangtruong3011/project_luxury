import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="">
                <div className="footer-top">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-4">
                            <div className="col-span-3">
                                <h4><i class="fa-regular fa-envelope"></i> News & Offers</h4>
                                <div>
                                    <form>
                                        <input type="text" name="email" placeholder="Your email address" />
                                        <button>Sign Up</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="social">
                                    <div className="social-content">
                                        <a className="social-content__items" href="#"><i class="fa-brands fa-pinterest"></i></a>
                                        <a className="social-content__items" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a className="social-content__items" href="#"><i class="fa-brands fa-twitter"></i></a>
                                        <a className="social-content__items" href="#"><i class="fa-brands fa-google"></i></a>
                                        <a className="social-content__items" href="#"><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">
                                <div className="img-logo">
                                    <a href="#">
                                        <img src="./img/footer/logo-footer.png" alt="logo-footer" />
                                    </a>
                                </div>
                                <div className="text">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        225 Beach Street, Australian
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        1-548-854-8898
                                    </p>
                                    <p><i class="fa-regular fa-envelope"></i> demo@thephohotel.com</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div>
                                    <h4>PAGE SITE</h4>
                                    <ul>
                                        <li><a href="#">Guest Book</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Restaurant</a></li>
                                        <li><a href="#">Event</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="">
                                    <h4>ABOUT</h4>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Comming Soon</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h4>TRIPADVISOR</h4>
                                <div>
                                    <p>Now with hotel reviews by</p>
                                    <img src="./img/footer/tripadvisor.png" />
                                    <span>
                                        {/* Đánh giá sao */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container mx-auto text-center">
                        <p><i class="fa-regular fa-copyright"></i> 2023 Pho Hotel All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;