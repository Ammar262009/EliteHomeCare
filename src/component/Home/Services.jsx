import React, { useState } from "react";
import {
    PaintRoller,
    BadgeCheck,
    Sofa,
    UserCheck,
    Sparkles,
    Check,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Interior Painting",
        image: "/Images/Interior Painting Services.png",
    },
    {
        title: "Exterior Painting",
        image: "Images/Services2Img.png",
    },
    {
        title: "Rental Home Painting",
        image: "Images/Services3Rental.png",
    },
    {
        title: "Water Proofing",
        image: "Images/Services4WaterProof.png",
    },
];

const features = [
    {
        icon: <PaintRoller size={36} />,
        title: "On site consultation",
    },
    {
        icon: <Sofa size={36} />,
        title: "Furniture protection",
    },
    {
        icon: <BadgeCheck size={36} />,
        title: "Premium products",
    },
    {
        icon: <UserCheck size={36} />,
        title: "Certified painters",
    },
    {
        icon: <Sparkles size={36} />,
        title: "Post clean-up",
    },
];

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
        y: 60
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
const Services = () => {
    const [step, setStep] = useState(1);

    const [selected, setSelected] = useState(0);

    const [houseType, setHouseType] =
        useState("2BHK");

    const [area, setArea] = useState(1200);

    const [condition, setCondition] =
        useState("Fresh");

    const selectedService =
        services[selected].title;

    const estimatedCost =
        Math.floor(area * 1.8);

    const progress = (step / 3) * 100;

    return (
        <div className="relative overflow-hidden h-auto bg-gradient-to-br from-[#d96b06] via-[#ef8b36] to-[#f7a45c] px-4 py-10 md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl"></div>

                <div className="absolute bottom-[-100px] right-[-100px] h-[280px] w-[280px] rounded-full bg-orange-300/20 blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}>
                    <h1 className="text-4xl font-bold text-white md:text-6xl">
                        Book Painting Services
                    </h1>

                    <p className="mt-3 text-lg text-orange-100 md:text-2xl">
                        Hassle-free online booking experience
                    </p>
                </motion.div>

                <div className="mt-10">
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/30">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                            className="h-full rounded-full bg-white" />
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">

                    {["Select Service", "Add Details", "Get Quotation"].map(
                        (label, index) => (
                            <motion.button
                                key={index}
                                whileHover={{
                                    y: -4,
                                    scale: 1.03
                                }}

                                whileTap={{
                                    scale: 0.96
                                }}
                                onClick={() => setStep(index + 1)}
                                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300
                                
                                ${step === index + 1
                                        ? "bg-white text-[#d96b06] shadow-[0_10px_40px_rgba(255,255,255,0.35)] scale-105"
                                        : "bg-white/20 text-white hover:bg-white/30"
                                    }`} >
                                {step > index ? (
                                    <Check
                                        className="mr-2 inline"
                                        size={18} />
                                ) : null}

                                {label}
                            </motion.button>
                        )
                    )}
                </div>

                <AnimatePresence mode="wait">

                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            className="mt-14">
                            <h2 className="text-center text-3xl font-bold text-white">
                                Choose Your Service
                            </h2>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{
                                    once: false,
                                    amount: 0.2
                                }}
                                className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"  >

                                {services.map((service, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.01,
                                            boxShadow: "0px 25px 45px rgba(0,0,0,0.18)"
                                        }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => {
                                            setSelected(idx);
                                            setStep(2);
                                        }}
                                        className={`cursor-pointer overflow-hidden rounded-3xl border-4 transition-all duration-500 transform-gpu
                                        
                                        ${selected === idx
                                                ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                                : "border-transparent"
                                            }`}>
                                        <div className="border border-white rounded-2xl"><ServicesCard title={service.title} image={service.image} /></div>
                                    </motion.div>
                                ))} </motion.div>
                        </motion.div>)}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            className="mt-14 rounded-3xl bg-white/10 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8 backdrop-blur-lg" >
                            <h2 className="text-3xl font-bold text-white">
                                Add Project Details
                            </h2>

                            <div className="mt-8 grid gap-8 md:grid-cols-2">

                                <div>
                                    <label className="text-white">
                                        House Type
                                    </label>

                                    <motion.select
                                        whileFocus={{
                                            scale: 1.02
                                        }}
                                        value={houseType}
                                        onChange={(e) =>
                                            setHouseType(e.target.value)
                                        }
                                        className="mt-2 w-full border-white border rounded-xl p-4">
                                        <option>1BHK</option>
                                        <option>2BHK</option>
                                        <option>3BHK</option>
                                        <option>Villa</option>
                                    </motion.select>
                                </div>

                                <div>
                                    <label className="text-white">
                                        Wall Condition
                                    </label>

                                    <motion.select
                                        whileFocus={{
                                            scale: 1.02
                                        }}
                                        value={condition}
                                        onChange={(e) =>
                                            setCondition(e.target.value)
                                        }
                                        className="mt-2 border-white border w-full rounded-xl p-4">
                                        <option>Fresh</option>
                                        <option>Repaint</option>
                                        <option>Repair Needed</option>
                                    </motion.select>
                                </div>

                            </div>

                            <div className="mt-8">
                                <label className="text-white">
                                    Area Size: {area} sq.ft
                                </label>

                                <input
                                    type="range"
                                    min="500"
                                    max="5000"
                                    step="100"
                                    value={area}
                                    onChange={(e) =>
                                        setArea(e.target.value)
                                    }
                                    className="mt-4 w-full cursor-pointer accent-white" />
                            </div>

                            <button
                                onClick={() => setStep(3)}
                                className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-[#d96b06] transition hover:scale-105">
                                Continue
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-14 rounded-3xl bg-white p-10 text-center shadow-2xl">
                            <h2 className="text-4xl font-bold text-[#d96b06]">
                                Estimated Quotation
                            </h2>

                            <p className="mt-4 text-lg text-gray-600">
                                Based on your selections
                            </p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.3
                                }}
                                className="mt-8 space-y-4 text-left md:text-center">
                                <p>
                                    <strong>Service:</strong>{" "}
                                    {selectedService}
                                </p>

                                <p>
                                    <strong>House Type:</strong>{" "}
                                    {houseType}
                                </p>

                                <p>
                                    <strong>Condition:</strong>{" "}
                                    {condition}
                                </p>

                                <p>
                                    <strong>Area:</strong>{" "}
                                    {area} sq.ft
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                }}
                                className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-6xl font-extrabold text-transparent">
                                ₹ {estimatedCost}
                            </motion.div>

                            <button
                                className="mt-10 rounded-full bg-[#d96b06] px-10 py-4 text-lg font-bold text-white transition hover:scale-105">
                                <Link to='contact'>Book Now</Link>
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>

                <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-5">

                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: false,
                                amount: 0.2
                            }}

                            whileHover={{
                                y: -10,
                                scale: 1.015,
                                backgroundColor: "rgba(255,255,255,0.18)"
                            }}

                            transition={{
                                duration: 0.5,
                                delay: idx * 0.12
                            }}
                            className="rounded-2xl bg-white/10 p-6 text-center text-white backdrop-blur-md" >
                            <div className="flex justify-center">
                                {feature.icon}
                            </div>

                            <p className="mt-4 font-medium">
                                {feature.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;