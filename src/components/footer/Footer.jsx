import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="container">
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
                                        <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i class="fa-brands fa-google"></i></a>
                                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">
                                <div className="img-logo">
                                    <a href="#">
                                        <img src="./img/footer/logo-footer.png" />
                                    </a>
                                </div>
                                <div className="text">
                                    <p><i class="fa-regular fa-location-dot"></i> 225 Beach Street, Australian</p>
                                    <p><i class="fa-sharp fa-regular fa-phone"></i> 1-548-854-8898</p>
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
                    <div className="container">
                        <p><i class="fa-regular fa-copyright"></i> Copyright 2023 Pho Hotel All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;