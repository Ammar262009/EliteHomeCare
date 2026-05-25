import React, { useState } from "react";
import {
    ShieldCheck,
    Clock3,
    Paintbrush,
    Users,
    Sofa,
    Calendar,
    Home,
    ChevronDown,
    ChevronUp,
    Phone,
    Award,
    BrushCleaning,
    Check,
} from "lucide-react";
import FAQCard from "./FAQCard";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "How much does painting cost?",
        answer:
            "The cost depends on area, paint type, surface condition, and design requirements. You can request a free quotation."
    },
    {
        question: "How long does it take to complete a painting project?",
        answer:
            "Most home painting projects take 2–7 days depending on the size of your property."
    },
    {
        question: "What type of paints do you use?",
        answer:
            "We use premium brands like Asian Paints, Berger Paints, Nerolac, and Dulux."
    },
    {
        question: "Do you provide material or only labor?",
        answer:
            "We provide both labor and materials based on your package selection."
    },
    {
        question: "Will you move our furniture before painting?",
        answer:
            "Yes, our team helps move and cover furniture for safe painting."
    },
    {
        question: "How do I book your service?",
        answer:
            "You can book online, call us directly, or request a free site visit."
    },
    {
        question: "Do you offer warranty?",
        answer:
            "Yes, we provide up to 5 years warranty depending on the package."
    },
    {
        question: "How do I prepare my home before painting?",
        answer:
            "Remove fragile items and personal belongings. Our team handles the rest."
    }
];

const trustFeatures = [
    {
        icon: ShieldCheck,
        title: "5 Year Warranty",
        desc: "Long-lasting wall protection"
    },
    {
        icon: Award,
        title: "Quality Assured",
        desc: "Premium paints & materials"
    },
    {
        icon: Users,
        title: "Experienced Team",
        desc: "Verified painters"
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        desc: "We value your time"
    },
    {
        icon: BrushCleaning,
        title: "Clean & Safe Work",
        desc: "Mess-free painting"
    }
];

const FAQSection = () => {


    return (
        <section className="w-full bg-[#faf8f3] py-16 px-4 md:px-10 lg:px-20">

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
                }}

                className="text-center mb-14" >
                <p className="text-orange-500 font-semibold uppercase tracking-wider">
                    FAQ
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Find answers to common questions about our painting services,
                    pricing, process and more.
                </p>

                <motion.div
                    initial={{
                        width: 0
                    }}

                    whileInView={{
                        width: 80
                    }}

                    viewport={{
                        once: false
                    }}

                    transition={{
                        delay: 0.4,
                        duration: 0.8
                    }}

                    className="h-1 bg-orange-500 mx-auto mt-5 rounded-full"
                />
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8">

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}

                    className="relative overflow-hidden lg:col-span-4 rounded-3xl border border-white/40 bg-white/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                >


                    <div className="flex items-center gap-2 text-orange-500 font-semibold mb-5">
                        <ShieldCheck size={20} />
                        <span>100% Trusted Service</span>
                    </div>

                    <h3 className="text-3xl font-bold leading-tight mb-6">
                        We Make Painting <br />
                        <span className="text-orange-500">
                            Simple & Hassle-Free
                        </span>
                    </h3>

                    <ul className="space-y-4 text-gray-700">
                        {[
                            "Professional Painters",
                            "Premium Quality Paints",
                            "On-Time Completion",
                            "Clean & Safe Work Process",
                            "5 Year Warranty"
                        ].map((item, index) => (
                            
                            <motion.li
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: -20
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}

                                viewport={{
                                    once: false
                                }}

                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.4
                                }}

                                whileHover={{
                                    x: 6
                                }}

                                className="flex gap-2"
                            ><Check />{item}</motion.li>))}
                    </ul>

                    <motion.div
                        whileHover={{
                            scale: 1.03,
                            y: -4
                        }}

                        transition={{
                            duration: 0.3
                        }}

                        className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg" >
                        <div className="bg-orange-500 text-white p-3 rounded-xl">
                            <Phone />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Still have questions?
                            </p>
                            <h4 className="font-bold text-orange-500">
                                +91 12345 67890
                            </h4>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.2
                    }}

                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.12
                            }
                        }
                    }}

                    className="lg:col-span-8 space-y-4" >
                    {faqData.map((faq, idx) => (
                        <FAQCard key={idx} id={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-14">
                {trustFeatures.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40
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
                                delay: index * 0.1,
                                duration: 0.5
                            }}

                            whileHover={{
                                y: -10,
                                scale: 1.04,
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)"
                            }}
                            key={index}
                            className="bg-[#fcf3df] rounded-2xl p-5 text-center hover:scale-105 transition duration-300">
                            <div className="flex justify-center mb-3 text-orange-500">
                                <Icon size={32} />
                            </div>

                            <h4 className="font-bold">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                {item.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            <motion.p
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

                className="mt-8 text-center text-sm text-gray-500" >
                *T&C Apply. Warranty applicable as per terms and conditions.
            </motion.p>
        </section>
    );
};

export default FAQSection;