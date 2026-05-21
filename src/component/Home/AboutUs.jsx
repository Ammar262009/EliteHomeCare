import React from "react";
import {
    ShieldCheck,
    Clock3,
    PaintBucket,
    ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
    {
        icon: <ShieldCheck size={34} />,
        title: "5 Year Warranty",
        desc:
            "Enjoy peace of mind with our long-lasting service guarantee.",
    },
    {
        icon: <Clock3 size={34} />,
        title: "On-Time Completion",
        desc:
            "We value your time and always deliver projects on schedule.",
    },
    {
        icon: <PaintBucket size={34} />,
        title: "Top-Quality Paints",
        desc:
            "Only premium paints for a rich and durable finish.",
    },
];

const AboutUs = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f68c45] via-[#f3a36a] to-[#efc3a2] px-4 py-20 md:px-10">

            <div className="absolute left-10 top-20 h-28 w-28 rounded-full bg-[#ffd1b2]/40 blur-2xl" />

            <div className="absolute bottom-10 left-32 h-36 w-36 rounded-full bg-[#ff6f61]/30 blur-2xl" />

            <div className="absolute right-20 top-16 h-24 w-24 rounded-full bg-[#fff0d6]/40 blur-xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -80,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    className="relative flex justify-center">
                    <motion.img
                        whileHover={{
                            y: -10,
                            rotate: -2,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                        }}
                        src="/Images/Painter.png"
                        alt="Painter"
                        className="relative z-10 w-[100%] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] md:w-[90%]" />

                    <motion.img
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 6, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        src="/Images/Brush.png"
                        alt="Brush"
                        className="absolute right-0 top-0 hidden w-28 md:block" />

                    <motion.img
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -8, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        src="/Images/Roller.png"
                        alt="Roller"
                        className="absolute left-10 top-24 hidden w-28 md:block" />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 86,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}>

                    <h1 className="text-5xl font-extrabold leading-tight text-[#8d0000] md:text-7xl">
                        Why Choose Us
                    </h1>

                    <p className="mt-5 text-xl text-[#5f3a2b] md:text-2xl">
                        Experienced professionals.
                        Exceptional results.
                    </p>

                    <div className="mt-10 rounded-[35px] bg-[#f6dfd2]/90 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-10">

                        <div className="grid gap-6">

                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{
                                        x: 10,
                                        scale: 1.02,
                                    }}
                                    className="group flex items-start gap-5 rounded-2xl p-4 transition-all duration-300 hover:bg-white/50" >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6b6b] to-[#ff8e53] text-white shadow-lg">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-[#b6451d]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-lg text-[#5b4b43]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;