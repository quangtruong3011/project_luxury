import React, { useEffect, useState } from 'react';

import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import RoomList from '../../component/roomList/RoomList';

import "./Home.css";


const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="section-slider"></section>
                <section className="section-check-availability">
                    <div className="container">
                        <div className="check-availability">
                            <div className="grid grid-cols-4">
                                <div className="col-span-1">
                                    <h2>CHECK AVAILABILITY</h2>
                                </div>
                                <div className="col-span-3">
                                    <form></form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-accomd">
                    <div className="container">
                        <div className="accomd-modations">
                            <div className="">
                                <div className="">
                                    <h2>ROOMS & RATE</h2>
                                    <img src="https://landing.engotheme.com/html/lotus/demo/images/icon-accmod.png" alt="" />
                                    <p>Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                                </div>
                                <div className="">
                                    <RoomList />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-home-about bg-white mt-[70px]">
                    <div className="container mx-auto">
                        <div className="home-about">
                            <div className="grid grid-cols-2">
                                <div className="col-span-1">
                                    <div className="img">
                                        <a href="#">
                                            <img src="https://landing.engotheme.com/html/lotus/demo/images/home/about/img-1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="text">
                                        <h2 className="mt-4 text-[#232323] text-4xl font-bold relative">ABOUT US</h2>
                                        <span className="inline-block h-[2px] bg-[#e1bd85]"></span>
                                        <p className="text-[#232323] mt-6 text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                                        <a className="mt-8 border-2 border-black hover:border-[#e1bd85] hover:bg-[#e1bd85] py-2 px-3 text-xs w-[110px]" href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-our-best mt-10 mb-[70px]">
                    <div className="container">
                        <div className="our-best">
                            <div className="grid grid-cols-2">
                                <div className="col-span-1">
                                    <div className="text">
                                        <h2>OUR BEST</h2>
                                        <p>One of Catalina Island's best-loved hotels, Hotel Vista Del Mar is recognized as one of Avalon's leading hotels with gracious island hospitality, thoughtful amenities and distinctive .</p>
                                        <ul>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-3.png" alt="icon" />
                                                250 Best Rooms 5 Star
                                            </li>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-2.png" alt="icon" />
                                                Wet Bar with Refrigerator
                                            </li>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-4.png" alt="icon" />
                                                Double Whirlpool Jacuzzi Tub
                                            </li>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-5.png" alt="icon" />
                                                Luxurious High Thread Coun
                                            </li>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-1.png" alt="icon" />
                                                Breakfast each morning
                                            </li>
                                            <li>
                                                <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-6.png" alt="icon" />
                                                Ocean Views to lotus Hotel
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="img">
                                        <img src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/img-1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-home-guestbook">
                    <div className="container">
                        <div className="home-guestbook">

                        </div>
                    </div>
                </section>
                <section className="section-event-news">
                    <div className="container">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                <div className="event">
                                    <h2>EVENT & DEAL</h2>
                                    <span></span>
                                    <div>
                                        <div className="grid grid-cols-1">
                                            <div className="event-item">
                                                <div className="img">
                                                    <img src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="col-span-1">
                                                <div className="event-item">
                                                    <div className="img">
                                                        <a href="#">
                                                            <img src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="text">
                                                        <h2>SAVE THE DATE</h2>
                                                        <span>BECCA & ROBERT</span>
                                                        <a href="#">VIEW MORE</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="event-item">
                                                    <div className="img">
                                                        <a href="#">
                                                            <img src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="text">
                                                        <h2>GO TO BEACH. LOTUS</h2>
                                                        <a href="#">VIEW MORE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="news">
                                    <h2>NEWS</h2>
                                    <span></span>
                                    <div className="grid grid-rows-3">
                                        <div className="row-span-1">
                                            <div className="news-item">
                                                <div className="img">
                                                    <a href="#">
                                                        <img src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-1.jpg" alt=""></img>
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <span>21 / March</span>
                                                    <h2>
                                                        <a href="#">
                                                            UPDATE MENU FOOD IN LOTUS
                                                        </a>
                                                    </h2>
                                                    <a href="#">[ Read More ]</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-span-1">
                                            <div className="news-item">
                                                <div className="img">
                                                    <a href="#">
                                                        <img src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-2.jpg" alt=""></img>
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <span>8 / March</span>
                                                    <h2>
                                                        <a href="#">
                                                            WEDDING DAY JONATHA & JESSICA
                                                        </a>
                                                    </h2>
                                                    <a href="#">[Read More]</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-span-1">
                                            <div className="news-item">
                                                <div className="img">
                                                    <a href="">
                                                        <img src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-3.jpg" alt=""></img>
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <span>16 / February</span>
                                                    <h2>
                                                        <a href="#">
                                                            THE BEST WEDDING GUIDE 2023
                                                        </a>
                                                    </h2>
                                                    <a href="#">[Read More]</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-gallery">
                    <div className="gallery">
                        <h2>GALLERY</h2>
                        <div className="gallery-cat">
                            <ul className="list-inline">
                                <li className="active">
                                    <a href="#">ALL</a>
                                </li>
                                <li>
                                    <a href="#">HOTEL & GROUND</a>
                                </li>
                                <li>
                                    <a href="#">ROOM/SUITE</a>
                                </li>
                                <li>
                                    <a href="">DINING</a>
                                </li>
                            </ul>
                        </div>
                        <div className="gallery-content">
                            <div className="grid grid-cols-6">
                                <div className="col-span-1">
                                    <a href="">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <a href="#">BROWSE OUR GALLERY</a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;