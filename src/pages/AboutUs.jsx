import React from "react";
import {
    PaintRoller,
    Users,
    ShieldCheck,
    Clock,
    Star,
    Home
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../component/common/Navbar";

const features = [
    {
        icon: PaintRoller,
        title: "Premium Painting",
        desc: "High quality paints with perfect finishing."
    },
    {
        icon: Users,
        title: "Expert Team",
        desc: "Professional painters with years of experience."
    },
    {
        icon: ShieldCheck,
        title: "5 Year Warranty",
        desc: "Long lasting protection for your walls."
    },
    {
        icon: Clock,
        title: "On Time Service",
        desc: "Fast and clean project completion."
    }
];

const process = [
    "Free Site Inspection",
    "Color & Design Selection",
    "Professional Painting",
    "Final Quality Check"
];

const About = () => {
    return (
        <section className="overflow-hidden bg-gradient-to-br from-[#fff7ed] via-[#ffe7d1] to-[#ffd1a3] px-0 pt-1 pb-6 md:px-2">
            <Navbar />

            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="grid items-center gap-12 lg:grid-cols-2">

                    <div>
                        <p className="font-bold uppercase tracking-widest text-orange-500">
                            About Us
                        </p>

                        <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                            We Turn Empty Walls Into Beautiful Homes
                        </h1>

                        <p className="mt-6 text-lg text-gray-700 md:text-xl">
                            We provide professional interior and exterior painting services with premium materials, skilled painters, and a hassle-free experience.
                        </p>

                        <Link to={"/#services"}>
                            <button className="mt-8 rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="relative">

                        <img
                            src="/Images/aboutUs.png"
                            className="rounded-[40px] shadow-2xl"
                            alt="painting" />

                        <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">
                            <div className="flex gap-2 text-orange-500">
                                {[1, 2, 3, 4, 5].map(i =>
                                    <Star key={i} size={20} fill="currentColor" />
                                )}
                            </div>

                            <p className="mt-2 font-bold">
                                500+ Happy Customers
                            </p>
                        </div>

                    </motion.div>

                </motion.div>

                <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

                    {[
                        ["10+", "Years Experience"],
                        ["500+", "Projects"],
                        ["50+", "Painters"],
                        ["100%", "Satisfaction"]
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="rounded-3xl bg-white p-8 text-center shadow-lg">

                            <h2 className="text-4xl font-black text-orange-500">
                                {item[0]}
                            </h2>

                            <p className="mt-2 font-semibold">
                                {item[1]}
                            </p>

                        </motion.div>
                    ))}

                </div>

                <div className="mt-24">

                    <h2 className="text-center text-4xl font-bold">
                        Why Choose Us?
                    </h2>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {features.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="rounded-3xl bg-white p-8 shadow-xl">

                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                                        <Icon />
                                    </div>

                                    <h3 className="text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {item.desc}
                                    </p>

                                </motion.div>
                            )

                        })}

                    </div>

                </div>

                <div className="mt-24">

                    <h2 className="text-center text-4xl font-bold">
                        Our Process
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-4">

                        {process.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="rounded-3xl bg-orange-500 p-7 text-white shadow-xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-orange-500">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 font-bold">
                                    {item}
                                </h3>

                            </motion.div>

                        ))}

                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-[40px] bg-gradient-to-r from-orange-500 to-red-500 p-10 text-center text-white">

                    <Home size={45} className="mx-auto" />

                    <h2 className="mt-5 text-4xl font-black">
                        Ready To Transform Your Home?
                    </h2>

                    <p className="mt-3 text-lg">
                        Let's create a space you love.
                    </p>

                    <Link to={"/contact"}>
                        <button className="mt-7 rounded-full bg-white px-10 py-4 font-bold text-orange-500">
                            Book Painting
                        </button>
                    </Link>

                </motion.div>

            </div>

        </section>
    );
};

export default About;