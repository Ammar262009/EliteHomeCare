import React, { useState } from "react";
import BeforeAfter from "./Before&After";

const portfolioData = {
    interior: [
        {
            title: "2BHK Painting - Pune",
            image: "/Images/wall Textur.png ",
        },
        {
            title: "Bedroom Painting - Bangalore",
            image: "/Images/interior2.jpg",
        },
        {
            title: "Living Room Painting - Mumbai",
            image: "/Images/Interior Walls.png",
        },
        {
            title: "Hall Painting - Chennai",
            image: "/Images/Interior wall Image 2.png",
        },
    ],

    exterior: [
        {
            title: "Building Painting - Delhi",
            image: "/Images/Exterior Painting 3.png",
        },
        {
            title: "Villa Exterior - Hyderabad",
            image: "/Images/exterior2.jpg",
        },
        {
            title: "Bungalow Painting - Surat",
            image: "/Images/bunglo exterior.png",
        },
        {
            title: "Apartment Exterior - Jaipur",
            image: "/Images/Exterior Paint 2.png",
        },
    ],

};

const tabs = [
    { id: "interior", label: "Interior Work" },
    { id: "exterior", label: "Exterior Work" },
    { id: "beforeAfter", label: "Before & After" },
];

const PaintingServices = () => {
    const [activeTab, setActiveTab] = useState("interior");

    return (
        <div className="h-auto bg-gradient-to-b from-[#E7A06E] to-[#FF7A00]  px-10 py-12">

            <div className="text-center mb-10">
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold">
                    Our Painting Portfolio
                </h1>
                <p className="text-white text-lg md:text-xl mt-2">
                    Explore our recent painting projects
                </p>
            </div>

            

            <div className="flex justify-center mb-12">
                <div className="bg-[#B7855D] p-2 rounded-full flex gap-2 shadow-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-1.5 md:px-8 md:py-3 rounded-full md:font-medium transition-all duration-300 ${activeTab === tab.id
                                ? "bg-white text-orange-500 scale-105"
                                : "text-white hover:bg-white/20"
                                }`}>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>


            {
                activeTab === "beforeAfter" ? (
                    <div className="w-full">
                        <div className="h-[400px] md:h-[550px] sm:h-[500px] md:w-[80%] lg:w-[98%] lg:h-[80vh] select-none flex items-center justify-center mt-5 md:mt-10">
                            <BeforeAfter before="/Images/HeroImgBefore1.png" after="/Images/HeroImgAfter1.png" title="Living Room Transformation" />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {portfolioData[activeTab].map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[320px] rounded-3xl overflow-hidden group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />

                                <div className="absolute bottom-5 left-5">
                                    <h2 className="text-white text-xl md:text-2xl font-normal md:font-semibold">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default PaintingServices;