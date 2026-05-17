import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import { Link } from "react-router-dom";
import HeroSection from "../component/Home/HeroSection";
import PaintingServices from "../component/Home/PaintingServices";
import Services from "../component/Home/Services";
import Reviews from "../component/Home/Reviews";



const Home = () => {
    return (
        <div>
            <HeroSection />
            <PaintingServices />
            <Services />
            <Reviews />
        </div>
    )
}

export default Home