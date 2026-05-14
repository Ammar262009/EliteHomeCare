import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import { Link } from "react-router-dom";
import HeroSection from "../component/Home/HeroSection";
import PaintingServices from "../component/Home/PaintingServices";



const Home = () => {
    return (
        <div>
            <HeroSection />
            <PaintingServices />
        </div>
    )
}

export default Home