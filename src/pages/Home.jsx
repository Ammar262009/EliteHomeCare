import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import { Link } from "react-router-dom";
import HeroSection from "../component/Home/HeroSection";
import PaintingServices from "../component/Home/PaintingServices";
import Services from "../component/Home/Services";
import Reviews from "../component/Home/Reviews";
import AboutUs from "../component/Home/AboutUs";
import FAQSection from "../component/Home/FAQSection";
import Footer from "../component/common/Footer";



const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <PaintingServices />
            <Services />
            <Reviews />
            <AboutUs />
            <FAQSection />
            <Footer />
        </div>
    )
}

export default Home