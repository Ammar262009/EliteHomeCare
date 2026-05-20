import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import Navbar from "../common/Navbar";
import BeforeAfter from "./Before&After";
import { motion } from "framer-motion";



const HeroSection = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, [])

    const sliderRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMove = (clientX) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();

        let position = ((clientX - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(position, 100));

        setSliderPosition(position);
    };
    return (
        <div className='bg-[#FFC108] h-auto max-h-100vh w-full '>
            <Navbar />


            <div className='md:px-10 py-4 md:pb-8 px-3 lg:h-[85vh] justify-between sm:block md:flex'>
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className='sm:w-full sm:min-h-[16%] md:w-[20%] mr-1 mt-6 relative flex flex-col' >
                    <div>
                        <div className="lg:w-[58px] lg:h-[58px] md:h-[40px] md:w-[40px] h-[25px] w-[25px] top-[50%] left-6 bg-[#ef4444bb] absolute rounded-full"></div>
                        <div className="lg:w-[117px] lg:h-[69px] md:h-[45px] md:w-[80px] h-[28px] w-[50px] top-[7%] left-[15%] bg-[#ff4b4b5d] absolute rounded-[40%_45%_45%_45%/50%_50%_45%_45%]"></div>
                        <div className="lg:w-[124px] lg:h-[64px] md:h-[40px] md:w-[80px] h-[25px] w-[50px] absolute top-[80%] right-[10%] bg-[#ef4452a6] rounded-[50%_50%_48%_48%/55%_55%_45%_45%]"></div>
                        <div className="">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                whileHover={{ scale: 1.03 }}
                                className='font-bold relative z-[3] leading-tight text-3xl md:text-2xl lg:text-[52px]'
                            >Transform your wall instantly</motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className='text-[24px] relative z-[3] font-medium md:font-light lg:font-normal mt-4 text-[#4b3d1f]'>
                                Professional painting service at your doorstep
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        scale: 1.01
                    }} className="pt-2  pb-4 my-4 md:pb-0 md:my-0 select-none w-full h-[350px] md:h-[500px] sm:h-[450px] md:w-[80%] lg:w-[60%] lg:h-full">
                    <BeforeAfter before="/Images/HeroImgBefore1.png" after="/Images/HeroImgAfter1.png" title="Living Room Transformation" />
                </motion.div>

                <div className='w-[20%] hidden lg:block relative'>
                    <div>

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="lg:w-[58px] lg:h-[58px] md:h-[40px] md:w-[40px] h-[25px] w-[25px] top-[50%] left-6 bg-[#ef4444bb] absolute rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="w-[64px] h-[124px] absolute top-[43%] right-[7%] bg-[#ef44527e] rounded-[50%_50%_48%_48%/55%_55%_45%_45%]" />
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -12, 0],
                                rotate: [0, 6, 0]
                            }}

                            transition={{
                                opacity: {
                                    duration: 0.8
                                },
                                scale: {
                                    duration: 0.8
                                },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                rotate: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}

                            className='absolute top-[7%] left-[10%]'
                            src="/Images/Brush.png"
                            alt="Brush" />
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -12, 0],
                                rotate: [0, 6, 0]
                            }}

                            transition={{
                                opacity: {
                                    duration: 0.8
                                },
                                scale: {
                                    duration: 0.8
                                },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                rotate: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className='absolute bottom-[1%] -left-[4%]' src="/Images/Bucket.png" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection