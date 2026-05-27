import React, { useState } from "react";
import { Star, Quote, CircleAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        y: 80,
        scale: 0.9
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const testimonials = [
    {
        name: "Virat Kohli",
        city: "Pune",
        rating: 4,
        review:
            "Amazing painting service. Professional team and premium finish.",
        image:
            "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Shah Rukh Khan",
        city: "Mumbai",
        rating: 5,
        review:
            "Elite Home Care transformed my home beautifully.",
        image:
            "https://i.pravatar.cc/150?img=15",
    },
    {
        name: "Deepika Padukone",
        city: "Bangalore",
        rating: 5,
        review:
            "Highly recommended for premium painting work.",
        image:
            "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Rohit Sharma",
        city: "Delhi",
        rating: 4,
        review:
            "Affordable pricing and excellent quality work.",
        image:
            "https://i.pravatar.cc/150?img=11",
    },
    {
        name: "Alia Bhatt",
        city: "Hyderabad",
        rating: 5,
        review:
            "Very clean work and friendly painters.",
        image:
            "https://i.pravatar.cc/150?img=25",
    },
    {
        name: "Ranveer Singh",
        city: "Chennai",
        rating: 5,
        review:
            "Smooth process from booking till completion.",
        image:
            "https://i.pravatar.cc/150?img=50",
    },
];

const Reviews = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleTestimonials = showAll
        ? testimonials
        : testimonials.slice(0, 3);

    return (
        <section className="bg-[#efc0a6] relative overflow-hidden px-4 py-16 md:px-10">

            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.9,
                        ease: "easeOut"
                    }}>
                    <h1 className="text-4xl font-extrabold text-black md:text-6xl">
                        What Our Customers Say
                    </h1>

                    <p className="mt-4 text-lg text-gray-700 md:text-2xl">
                        Discover why homeowners love
                        Elite Home Care
                    </p>
                </motion.div>
                <div className="mt-14 rounded-[40px] border border-white/40 bg-[#f3d2bf]/80 p-6 backdrop-blur-lg md:p-12">

                    <div className="text-center">
                        <h2 className="text-2xl font-bold md:text-4xl">
                            Real Customer Experiences
                        </h2>

                        <p className="mt-3 text-gray-600 md:text-lg">
                            Trusted by hundreds of happy
                            homeowners
                        </p>
                    </div>
                    <motion.div
                        // layout
                        // variants={containerVariants}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{
                            once: false,
                            amount: 0.15
                        }}
                        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <AnimatePresence>

                            {visibleTestimonials.map(
                                (item, idx) => (
                                    <motion.div
                                        key={idx}
                                        layout
                                        variants={cardVariants}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        whileHover={{
                                            y: -16,
                                            scale: 1.035,
                                            rotateX: 4,
                                            rotateY: 4,
                                            boxShadow: "0px 30px 80px rgba(0,0,0,0.18)"
                                        }}
                                        className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl" >
                                        <motion.div
                                            animate={{
                                                y: [0, -6, 0],
                                                rotate: [0, 5, 0]
                                            }}

                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}

                                            className="absolute right-5 top-5 text-orange-200"
                                        >
                                            <Quote size={40} />
                                        </motion.div>

                                        <div className="flex flex-col items-center">

                                            <motion.img
                                                whileHover={{
                                                    scale: 1.12,
                                                    rotate: 3
                                                }}

                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200
                                                }}

                                                src={item.image}
                                                alt={item.name}
                                                className="h-24 w-24 rounded-full border-4 border-orange-200 object-cover" />


                                            <h3 className="mt-4 text-2xl font-bold">
                                                {item.name}
                                            </h3>

                                            <div className="mt-2 flex gap-1">

                                                {[...Array(5)].map(
                                                    (_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            viewport={{
                                                                once: false,
                                                                amount: 0.2 
                                                            }}
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0
                                                            }}

                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1
                                                            }}

                                                            transition={{
                                                                delay: i * 0.08,
                                                                type: "spring",
                                                                stiffness: 200
                                                            }}>
                                                            <Star
                                                                key={i}
                                                                size={18}
                                                                fill={
                                                                    i <
                                                                        item.rating
                                                                        ? "#f59e0b"
                                                                        : "none"
                                                                }
                                                                color={
                                                                    i <
                                                                        item.rating
                                                                        ? "#f59e0b"
                                                                        : "#d1d5db"
                                                                } />
                                                        </motion.div>))}
                                            </div>
                                        </div>

                                        <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#ff7b7b] to-[#ff5c5c] p-6 text-center text-white shadow-lg">
                                            <p className="leading-relaxed">
                                                "{item.review} "
                                            </p>
                                        </div>

                                        <div className="mt-6 text-center text-lg font-semibold text-gray-700">
                                            {item.city}
                                        </div>
                                    </motion.div>
                                )
                            )}

                        </AnimatePresence>
                    </motion.div>
                    <motion.h2
                        initial={{
                            opacity: 0
                        }}

                        whileInView={{
                            opacity: 1
                        }}

                        viewport={{
                            once: false
                        }}

                        transition={{
                            delay: 0.4
                        }}

                        className="mx-auto mt-5 flex w-full items-center gap-2 text-gray-600"
                    ><CircleAlert />Only Premium Users can Submit the Review. These all reviews are for testing purposes.</motion.h2>
                    <div className="mt-12 flex justify-center">

                        <motion.button
                            animate={{
                                boxShadow: [
                                    "0px 0px 0px rgba(255,90,60,0.2)",
                                    "0px 0px 25px rgba(255,90,60,0.4)",
                                    "0px 0px 0px rgba(255,90,60,0.2)"
                                ]
                            }}

                            transition={{
                                duration: 2.5,
                                repeat: Infinity
                            }}
                            whileHover={{
                                scale: 1.06,
                                y: -4,
                                boxShadow: "0px 20px 40px rgba(255,90,60,0.4)"
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            onClick={() =>
                                setShowAll(!showAll)
                            }
                            className="rounded-full bg-gradient-to-r from-[#ff4d2d] to-[#ff6b3d] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:shadow-2xl">
                            {showAll
                                ? "Show Less"
                                : "Read More Reviews"}
                        </motion.button>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Reviews;