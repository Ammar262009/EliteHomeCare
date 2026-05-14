import React, { useState, useRef, useEffect } from "react";
import { UserRound, Menu, Cross } from 'lucide-react';
import Navbar from "../common/Navbar";
import BeforeAfter from "./Before&After";



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
                <div className='sm:w-full sm:min-h-[16%] md:w-[20%] mr-1 mt-6 relative flex flex-col'>
                    <div>
                        <div className="lg:w-[58px] lg:h-[58px] md:h-[40px] md:w-[40px] h-[25px] w-[25px] top-[50%] left-6 bg-[#ef4444bb] absolute rounded-full"></div>
                        <div className="lg:w-[117px] lg:h-[69px] md:h-[45px] md:w-[80px] h-[28px] w-[50px] top-[7%] left-[15%] bg-[#ff4b4b5d] absolute rounded-[40%_45%_45%_45%/50%_50%_45%_45%]"></div>
                        <div className="lg:w-[124px] lg:h-[64px] md:h-[40px] md:w-[80px] h-[25px] w-[50px] absolute top-[80%] right-[10%] bg-[#ef4452a6] rounded-[50%_50%_48%_48%/55%_55%_45%_45%]"></div>
                        <div className="">
                            <h1 className='font-bold relative z-3 text-3xl md:text-2xl lg:text-[42px]'>Transform your wall instantly</h1>
                            <p className='text-[24px] relative z-3 font-medium md:font-light lg:font-normal'>Professional paintaing service at your doorstep</p>
                        </div>
                    </div>
                </div>

                {/* <div
                    ref={sliderRef}
                    onMouseMove={(e) => {
                        if (e.buttons === 1) {
                            handleMove(e.clientX);
                        }
                    }}
                    onTouchMove={(e) =>
                        handleMove(e.touches[0].clientX)
                    }
                    className="relative mt-[41px] md:mt-0  w-full h-[350px] md:h-[500px] sm:h-[450px] md:w-[80%] lg:w-[60%] lg:h-full select-none rounded-[40px] overflow-hidden cursor-ew-resize"
                >

                    <img
                        src="/Images/HeroImgAfter1.png"
                        alt="after"
                        className="absolute inset-0 w-full h-full object-cover"
                    />


                    <img
                        src="/Images/HeroImgBefore1.png"
                        alt="before"
                        className="absolute inset-0 w-full h-full object-cover brightness-75"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                        }}
                    />

                    <div className="absolute top-6 left-6 z-20">
                        <div className="px-5 py-2 rounded-full bg-black/30 text-white font-bold text-xl backdrop-blur-md">
                            Before
                        </div>
                    </div>

                    <div className="absolute top-6 right-6 z-20">
                        <div className="px-5 py-2 rounded-full bg-black/20 text-white font-bold text-xl backdrop-blur-md">
                            After
                        </div>
                    </div>


                    <div
                        className="absolute top-0 bottom-0 w-[3px] bg-white z-30"
                        style={{
                            left: `${sliderPosition}%`,
                            transform: "translateX(-50%)"
                        }}
                    />


                    <div
                        className="absolute top-1/2 z-40"
                        style={{
                            left: `${sliderPosition}%`,
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        <div className="w-16 h-16 rounded-full bg-[#f3ead8] flex items-center justify-center shadow-xl">
                            <div className="flex gap-1">
                                <div className="w-[3px] h-6 bg-[#8c7759] rounded-full"></div>
                                <div className="w-[3px] h-6 bg-[#8c7759] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="pt-2  pb-4 my-4 md:pb-0 md:my-0 select-none w-full h-[350px] md:h-[500px] sm:h-[450px] md:w-[80%] lg:w-[60%] lg:h-full">
                    <BeforeAfter before="/Images/HeroImgBefore1.png" after="/Images/HeroImgAfter1.png" title="Living Room Transformation"/>
                </div>

                <div className='w-[20%] hidden lg:block relative'>
                    <div>
                        <div className="w-[78px] h-[39px] top-[30%] left-[10%] bg-[#ff4b4b5d] absolute rounded-[70%_45%_65%_45%/60%_50%_65%_45%]"></div>
                        <div className="w-[64px] h-[124px] absolute top-[43%] right-[7%] bg-[#ef44527e] rounded-[50%_50%_48%_48%/55%_55%_45%_45%]"></div>
                        <img className='absolute top-[7%] left-[10%]' src="/Images/Brush.png" alt="" />
                        <img className='absolute bottom-[1%] -left-[4%]' src="/Images/Bucket.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection