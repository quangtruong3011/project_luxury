import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="">
                <div className="footer-top">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-4 py-2">
                            <div className="col-span-3 flex items-center">
                                <h4 className="flex items-center text-3xl text-white mr-5">
                                    <span className="flex justify-center items-center border-2 border-[#e1bd85] rounded-full w-[52px] h-[52px] text-[#e1bd85] mr-5">
                                        <i class="fa-regular fa-envelope"></i>
                                    </span>
                                    News & Offers
                                </h4>
                                <div>
                                    <form>
                                        <input className="border-2 bg-transparent w-[240px] mr-2 py-1" type="text" name="email" placeholder="Your email address" />
                                        <button className="border-2 border-[#e1bd85] bg-[#e1bd85] text-white px-5 py-1">SIGN UP</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <div className="social">
                                    <div className="social-content flex">
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
                        <div className="grid grid-cols-12 pt-10">
                            <div className="col-span-5">
                                <div className="flex items-center">
                                    <div className="img mr-10">
                                        <a href="#">
                                            <img src="https://landing.engotheme.com/html/lotus/demo/images/logo-footer.png" alt="logo-footer" />
                                        </a>
                                    </div>
                                    <div className="text">
                                        <p className="flex items-center text-[#acacac] text-sm mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            225 Beach Street, Australian
                                        </p>
                                        <p className="flex items-center text-[#acacac] text-sm mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            1-548-854-8898
                                        </p>
                                        <p className="flex items-center text-[#acacac] text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            demo@thephohotel.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div>
                                    <h4>PAGE SITE</h4>
                                    <ul className="mt-2">
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Guest Book</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Gallery</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Restaurant</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Event</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="">
                                    <h4 className="">ABOUT</h4>
                                    <ul className="mt-2">
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">About</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Blog</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Contact Us</a></li>
                                        <li className="py-1 text-[#acacac] hover:text-white text-sm"><a href="#">Comming Soon</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <h4>TRIPADVISOR</h4>
                                <div>
                                    <p>Now with hotel reviews by</p>
                                    <img src="https://landing.engotheme.com/html/lotus/demo/images/tripadvisor.png" />
                                    <span>
                                        {/* Đánh giá sao */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container mx-auto">
                        <p><i class="fa-regular fa-copyright"></i> 2023 Pho Hotel All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;