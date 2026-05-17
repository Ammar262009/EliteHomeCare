import React, { useState } from "react";
import { Star, Quote, CircleAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <section className="bg-[#efc0a6] px-4 py-16 md:px-10">

            <div className="mx-auto max-w-7xl">

                <div>
                    <h1 className="text-4xl font-extrabold text-black md:text-6xl">
                        What Our Customers Say
                    </h1>

                    <p className="mt-4 text-lg text-gray-700 md:text-2xl">
                        Discover why homeowners love
                        Elite Home Care
                    </p>
                </div>
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
                        layout className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <AnimatePresence>

                            {visibleTestimonials.map(
                                (item, idx) => (
                                    <motion.div
                                        key={idx}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            y: 40,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.03,
                                        }}
                                        className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl" >
                                        <div className="absolute right-5 top-5 text-orange-200">
                                            <Quote size={40} />
                                        </div>

                                        <div className="flex flex-col items-center">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-24 w-24 rounded-full border-4 border-orange-200 object-cover transition duration-500 group-hover:scale-110"/>

                                            <h3 className="mt-4 text-2xl font-bold">
                                                {item.name}
                                            </h3>

                                            <div className="mt-2 flex gap-1">

                                                {[...Array(5)].map(
                                                    (_, i) => (
                                                        <Star
                                                            key={
                                                                i
                                                            }
                                                            size={
                                                                18
                                                            }
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
                                                            }/>)  )}
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
                    <h2 className="mx-auto mt-3 text-gray-500 w-full flex gap-2"><CircleAlert/>Only Premium Users can Submit the Review. These all reviews are for testing purposes.</h2>
                    <div className="mt-12 flex justify-center">

                        <motion.button
                            whileHover={{
                                scale: 1.05,
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
        </section>
    );
};

export default Reviews;