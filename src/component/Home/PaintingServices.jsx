import React, { useState } from "react";
import BeforeAfter from "./Before&After";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const portfolioData = {
    interior: [
        {
            title: "2BHK Painting - Pune",
            image: "/Images/wall Textur.png",
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
    const [pathNumber, setPathNumber] = useState(1)

    const PrevHandler = () => {
        setPathNumber((prev) => (prev > 0 ? prev - 1 : prev));
    }
    const NextHandler = () => {
        setPathNumber((prev) => (prev <= 0 ? prev + 1 : prev));
    }
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };
    const [activeTab, setActiveTab] = useState("interior");

    return (
        <div className="h-auto bg-gradient-to-b overflow-x-hidden relative overflow-hidden from-[#E7A06E] to-[#FF7A00]  px-10 py-12">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.9,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    amount: 0.2
                }}
                className="text-center mb-10" >
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold">
                    Our Painting Portfolio
                </h1>
                <p className="text-white text-lg md:text-xl mt-2">
                    Explore our recent painting projects
                </p>
            </motion.div>



            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex justify-center mb-12" >
                <div className="bg-[#B7855D] p-2 rounded-full flex gap-2 shadow-lg">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}

                            whileHover={{
                                y: -2
                            }}

                            whileTap={{
                                scale: 0.95
                            }}

                            layout

                            className={`px-6 py-1.5 md:px-8 md:py-3 rounded-full md:font-medium transition-all duration-300 ${activeTab === tab.id
                                ? "bg-white text-orange-500 shadow-lg"
                                : "text-white hover:bg-white/20"
                                }`}>
                            {tab.label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {
                    activeTab === "beforeAfter" ? (
                        <motion.div
                            key="beforeAfter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="w-full" >
                            <div className="w-full">
                                <div className="h-[400px] md:h-[550px] sm:h-[500px] md:w-[80%] m-auto lg:w-[90%] lg:h-[80vh] select-none flex items-center justify-center mt-5 md:mt-10">
                                    <BeforeAfter pathNumber={pathNumber} setPathNumber={setPathNumber} />
                                </div>
                                <div className="relative py-5 mt-2 ">
                                    <button
                                        disabled={pathNumber <= 0}
                                        onClick={PrevHandler}
                                        className={`absolute flex items-center justify-center top-0 left-0 w-25 h-20 rounded-4xl bg-gray-500  ${pathNumber <= 0
                                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                                            : "bg-gray-400 hover:bg-gray-500"
                                            }`}><ArrowLeft size={30}/></button>

                                    <button
                                        disabled={pathNumber == 1}
                                        onClick={NextHandler}
                                        className={`absolute flex items-center justify-center top-0 right-0 w-25 h-20 rounded-4xl bg-gray-500  ${pathNumber == 1
                                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                                            : "bg-gray-400 hover:bg-gray-500"
                                            }`}><ArrowRight size={30}/></button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={activeTab}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                            {portfolioData[activeTab].map((item, index) => (
                                <motion.div
                                    key={index}

                                    variants={cardVariants}


                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15
                                    }}

                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                        boxShadow: "0px 25px 50px rgba(0,0,0,0.25)"
                                    }}

                                    className="relative will-change-transform h-[320px] rounded-3xl overflow-hidden group shadow-xl" >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" />

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.2 + 0.3
                                        }}
                                        className="absolute bottom-5 left-5">
                                        <h2 className="text-white text-xl md:text-2xl font-normal md:font-semibold">
                                            {item.title}
                                        </h2>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                    )
                }</AnimatePresence>
        </div >
    );
};

export default PaintingServices;