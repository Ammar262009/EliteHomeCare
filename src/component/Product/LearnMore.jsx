import React from "react";
import {
    ShieldCheck,
    Droplets,
    Sparkles,
    PaintBucket,
    Clock,
    ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

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


const LearnMore = () => {
    
    const navigate = useNavigate();
    function handleNavigate() {
        navigate('/product')
    }
    const {id} = useParams();
    console.log(id);

    const product = products.find(
        (item) => item.id === id
    );
    if(!product){
        return <h1>No Product found</h1>
    }

    return (
        <div className="bg-[#faf8f3] overflow-hidden">

            <section className="px-6 py-16 md:px-12">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="rounded-3xl shadow-2xl w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }} >
                        <button onClick={handleNavigate} className="flex items-center gap-2 text-orange-500 font-semibold">
                            <ArrowLeft size={18} />
                            Back to Products
                        </button>

                        <h1 className="mt-4 text-4xl md:text-6xl font-bold">
                            {product.name}
                        </h1>

                        <p className="mt-6 text-lg text-gray-600">
                            {product.description}
                        </p>

                        <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                            Get Free Quote
                        </button>
                    </motion.div>

                </div>
            </section>

            <section className="px-6 py-16 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-4xl font-bold">
                        Product Features
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                        {[
                            {
                                icon: ShieldCheck,
                                title: "Durable Finish",
                            },
                            {
                                icon: Droplets,
                                title: "Washable Surface",
                            },
                            {
                                icon: Sparkles,
                                title: "Smooth Texture",
                            },
                            {
                                icon: PaintBucket,
                                title: "Premium Quality",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="bg-[#fff6ed] rounded-3xl p-8 text-center" >
                                    <div className="flex justify-center text-orange-500">
                                        <Icon size={42} />
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold">
                                        {item.title}
                                    </h3>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-12">
                <div className="max-w-6xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center">
                        Why You'll Love It
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h3 className="text-xl font-bold">
                                Rich Colours
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Vibrant shades that stay beautiful for years.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h3 className="text-xl font-bold">
                                Easy Maintenance
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Easily clean walls without damaging paint.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h3 className="text-xl font-bold">
                                Eco Friendly
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Low VOC formula for healthier indoor air.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 md:px-12">
                <div className="max-w-5xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-4xl font-bold">
                        Specifications
                    </motion.h2>

                    <div className="mt-12 rounded-3xl overflow-hidden shadow-lg">

                        <div className="grid grid-cols-2 border-b p-5">
                            <span className="font-semibold">
                                Coverage
                            </span>
                            <span>140-160 sq.ft/litre</span>
                        </div>

                        <div className="grid grid-cols-2 border-b p-5">
                            <span className="font-semibold">
                                Finish
                            </span>
                            <span>Luxury Matte</span>
                        </div>

                        <div className="grid grid-cols-2 border-b p-5">
                            <span className="font-semibold">
                                Drying Time
                            </span>
                            <span>4-6 Hours</span>
                        </div>

                        <div className="grid grid-cols-2 p-5">
                            <span className="font-semibold">
                                Warranty
                            </span>
                            <span>5 Years</span>
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-6 py-20 md:px-12">
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
                    className="max-w-6xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-12 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Ready To Upgrade Your Walls?
                    </h2>

                    <p className="text-orange-100 mt-4">
                        Get expert guidance and a free quotation today.
                    </p>

                    <button className="mt-8 bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:scale-105 transition">
                        Book Consultation
                    </button>
                </motion.div>
            </section>

        </div>
    );
};

export default LearnMore;