import React, { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ShieldCheck,
    Clock3,
    Award,
    Users,
    Send,
    CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";
import Navbar from "../component/common/Navbar";
import FeaturesCard from "../component/ContactUs/FeaturesCard";
import ContactCards from "../component/ContactUs/ContactCards";

const contactCards = [
    {
        icon: Phone,
        title: "Call Us",
        info: "+91 12345 67890",
        sub: "Mon-Sat, 9:00AM - 8:00PM",
    },
    {
        icon: Mail,
        title: "Email Us",
        info: "info@elitehomecare.com",
        sub: "We reply within 24 hours",
    },
    {
        icon: MapPin,
        title: "Our Office",
        info: "123, Pune, Maharashtra",
        sub: "411042, India",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp Us",
        info: "+91 12345 67890",
        sub: "Chat with us instantly",
    },
];

const features = [
    {
        icon: ShieldCheck,
        title: "Trusted & Verified",
        desc: "100% Customer Satisfaction",
    },
    {
        icon: Users,
        title: "Expert Professionals",
        desc: "Trained & Experienced Team",
    },
    {
        icon: Award,
        title: "Quality Assurance",
        desc: "Premium Paints & Materials",
    },
    {
        icon: Clock3,
        title: "On-Time Service",
        desc: "We Value Your Time",
    },
];

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [service, setService] = useState('')
    const [desc, setDesc] = useState('')

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        setError("")
        setSuccess("")

        if (!name || !email || !mobile || !desc) {
            setError("Please fill all the fields")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email")
            return
        }

        if (mobile.length < 10) {
            setError("Please enter a valid mobile number")
            return
        }

        setSuccess("Message submitted successfully!")

        setName("")
        setEmail("")
        setMobile("")
        setService("")
        setDesc("")
    }
    return (
        <div className="w-full overflow-hidden bg-[#f6f4ef]">
            <Navbar />

            <section className="relative px-4 py-16 md:px-10 lg:px-20">

                <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-orange-200/40 blur-3xl"></div>

                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl"></div>

                <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">


                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, }}
                        transition={{ duration: 0.8 }}>
                        <p className="font-semibold uppercase tracking-[3px] text-orange-500">
                            We're Here To Help
                        </p>

                        <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                            Contact Us
                        </h1>

                        <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
                            We’d Love to{" "}
                            <span className="text-orange-500">
                                Hear From You !
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                            Have a question, need a quotation, or want to book
                            our premium painting service? Get in touch with our
                            expert team today.
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                            {contactCards.map((item, idx) => {
                                const Icon = item.icon;

                                return (
                                    <ContactCards id={idx} key={idx} icon={Icon} title={item.title} info={item.info} sub={item.sub} />
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, }}
                        transition={{ duration: 0.8 }}
                        className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                        <h2 className="text-3xl font-bold">
                            Send Us a Message
                        </h2>

                        <div className="mt-3 h-1 w-20 rounded-full bg-orange-500"></div>
                        <form onSubmit={submitHandler}>
                            <div className="mt-8 grid gap-5 sm:grid-cols-2">

                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    value={name}
                                    required
                                    placeholder="Your Name"
                                    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500" />

                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    value={email}
                                    required
                                    placeholder="Your Email"
                                    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500" />

                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="tel"
                                    onChange={(e) => {
                                        setMobile(e.target.value)
                                    }}
                                    value={mobile}
                                    required
                                    placeholder="Phone Number"
                                    className="rounded-2xl border overflow-y-hidden border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500 sm:col-span-2" />

                                <motion.select
                                    whileFocus={{ scale: 1.02 }}
                                    required
                                    onChange={(e) => {
                                        setService(e.target.value)
                                    }}
                                    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500 sm:col-span-2">

                                    <option>Interior Painting</option>
                                    <option>Exterior Painting</option>
                                    <option>Water Proofing</option>
                                    <option>Rental Painting</option>
                                </motion.select>

                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    rows={5}
                                    value={desc}
                                    onChange={(e) => {
                                        setDesc(e.target.value)
                                    }}
                                    placeholder="Your Message"
                                    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500 sm:col-span-2"
                                ></motion.textarea>
                            </div>

                            {error && (
                                <p className="mt-4 rounded-xl bg-red-100 p-4 text-sm font-medium text-red-600">
                                    {error}
                                </p>
                            )}

                            {success && (
                                <p className="mt-4 rounded-xl bg-green-100 p-4 text-sm font-medium text-green-600">
                                    {success}
                                </p>
                            )}

                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.03,
                                    y: -3,
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 text-lg font-bold text-white shadow-xl"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>

                        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <ShieldCheck size={18} />
                            Your information is safe with us
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 pb-10 md:px-10 lg:px-20">

                <div className="grid gap-6 lg:grid-cols-3">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[35px] bg-[#f8f1df] p-8 shadow-lg">
                        <h3 className="text-3xl font-bold">
                            Why Contact Us?
                        </h3>

                        <div className="mt-3 h-1 w-16 rounded-full bg-orange-500"></div>

                        <div className="mt-8 space-y-4">

                            {[
                                "Get expert advice for your painting needs",
                                "Free quotation & consultation",
                                "Premium quality painting service",
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 8 }}
                                    className="flex items-center gap-4 rounded-2xl bg-white p-5"
                                >
                                    <div className="rounded-full bg-orange-500 p-2 text-white">
                                        <CheckCircle2 size={18} />
                                    </div>

                                    <p className="text-gray-700">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="rounded-[35px] bg-[#f8f1df] p-8 shadow-lg"
                    >
                        <h3 className="text-3xl font-bold">
                            Support Hours
                        </h3>

                        <div className="mt-3 h-1 w-16 rounded-full bg-orange-500"></div>

                        <div className="mt-8 space-y-4">

                            {[
                                {
                                    day: "Monday - Saturday",
                                    time: "9:00 AM - 8:00 PM",
                                },
                                {
                                    day: "Sunday",
                                    time: "10:00 AM - 6:00 PM",
                                },
                                {
                                    day: "Emergency Support",
                                    time: "24/7 Available",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 rounded-2xl bg-white p-5"
                                >
                                    <div className="rounded-full bg-orange-500 p-3 text-white">
                                        <Clock3 size={18} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold">
                                            {item.day}
                                        </h4>

                                        <p className="text-gray-500">
                                            {item.time}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="rounded-[35px] bg-[#f8f1df] p-8 shadow-lg"
                    >
                        <h3 className="text-3xl font-bold">
                            Our Location
                        </h3>

                        <div className="mt-3 h-1 w-16 rounded-full bg-orange-500"></div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative mt-8 flex h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-500"
                        >
                            <MapPin
                                size={60}
                                className="text-white"
                            />

                            <div className="absolute left-5 top-5 rounded-2xl bg-white p-5 shadow-xl">
                                <h4 className="font-bold">
                                    Elite Home Care
                                </h4>

                                <p className="mt-2 text-sm text-gray-500">
                                    Pune, Maharashtra <br />
                                    411042, India
                                </p>

                                <button className="mt-3 text-sm font-semibold text-orange-500">
                                    View on Google Maps
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 pb-20 md:px-10 lg:px-20">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid gap-6 rounded-[35px] bg-[#f8f1df] p-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, idx) => {
                        return (<FeaturesCard key={idx} title={item.title} icon={item.icon} desc={item.desc} />)
                    })}
                </motion.div>
            </section>
        </div>
    );
};

export default ContactUs;