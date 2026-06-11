import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import HeroSection from "../component/Home/HeroSection";
import PaintingServices from "../component/Home/PaintingServices";
import Services from "../component/Home/Services";
import Reviews from "../component/Home/Reviews";
import AboutUs from "../component/Home/AboutUs";
import FAQSection from "../component/Home/FAQSection";
import Footer from "../component/common/Footer";



const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
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