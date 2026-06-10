import React from "react";
import {
    ShieldCheck,
    Sparkles,
    PaintBucket,
    Award,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../component/common/Navbar";
import { Link } from "react-router-dom";

const products = [
    {
        id: "luxury-interior",
        name: "Luxury Interior Paint",
        image: "/Images/product1.jpg",
        description: "Smooth finish with premium durability.",
    },
    {
        id: "weather-shield",
        name: "Weather Shield Exterior",
        image: "/Images/product2.jpg",
        description: "Protection against rain and sunlight.",
    },
    {
        id: "royal-velvet",
        name: "Royal Velvet Finish",
        image: "/Images/product3.jpg",
        description: "Rich texture for elegant interiors.",
    },
    {
        id: "waterproof-coating",
        name: "Waterproof Coating",
        image: "/Images/product4.jpg",
        description: "Long-lasting waterproof protection.",
    },
    {
        id: "anti-dust",
        name: "Anti-Dust Paint",
        image: "/Images/product5.jpg",
        description: "Keeps walls cleaner for longer.",
    },
    {
        id: "premium-ceiling",
        name: "Premium Ceiling Paint",
        image: "/Images/product6.jpg",
        description: "Bright and crack-resistant finish.",
    },
];

const features = [
    {
        icon: ShieldCheck,
        title: "5 Year Warranty",
        desc: "Long-lasting wall protection.",
    },
    {
        icon: PaintBucket,
        title: "Premium Paints",
        desc: "Trusted quality materials.",
    },
    {
        icon: Award,
        title: "Certified Quality",
        desc: "Professional grade products.",
    },
    {
        icon: Sparkles,
        title: "Luxury Finish",
        desc: "Elegant and modern appearance.",
    },
];

const brands = [
    "Asian Paints",
    "Berger",
    "Nerolac",
    "Dulux",
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const Product = () => {
    return (
        <div className="overflow-hidden bg-[#faf8f3]">
            <Navbar />

            <section className="bg-gradient-to-r from-[#ff8a2a] to-[#ff6a00] px-6 py-24 md:px-12">
                <div className="mx-auto max-w-7xl text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-white md:text-6xl"
                    >
                        Premium Painting Products
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                        className="mx-auto mt-6 max-w-3xl text-lg text-orange-100 md:text-xl"
                    >
                        Explore our premium collection of paints and coatings designed
                        for durability, beauty and long-lasting protection.
                    </motion.p>
                </div>
            </section>

            <section className="px-6 py-20 md:px-12">
                <div className="mx-auto max-w-7xl">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                id={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                }}
                                className="overflow-hidden rounded-3xl bg-white shadow-xl" >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition duration-700 hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">
                                        {product.name}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {product.description}
                                    </p>

                                    <Link  to={`/product/${product.id}`}>
                                        <button className="mt-6 flex items-center gap-2 font-semibold text-orange-500">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            <section className="bg-white px-6 py-20 md:px-12">
                <div className="mx-auto max-w-7xl">

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center text-4xl font-bold"
                    >
                        Why Choose Our Products
                    </motion.h2>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="rounded-3xl bg-[#fff5ed] p-8 text-center"
                                >
                                    <div className="flex justify-center text-orange-500">
                                        <Icon size={42} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <section className="px-6 py-20 md:px-12">
                <div className="mx-auto max-w-6xl">

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center text-4xl font-bold"
                    >
                        Trusted Brands
                    </motion.h2>

                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-2xl bg-white p-8 text-center text-xl font-bold shadow-lg"
                            >
                                {brand}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 md:px-12">
                <div className="mx-auto max-w-6xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="rounded-[40px] bg-gradient-to-r from-[#ff7a00] to-[#ff5200] p-12 text-center"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            Ready To Transform Your Home?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-orange-100">
                            Get premium painting solutions with trusted products
                            and professional service.
                        </p>

                        <button className="mt-8 rounded-full bg-white px-10 py-4 font-bold text-orange-600 transition hover:scale-105">
                            Get Free Quote
                        </button>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default Product;