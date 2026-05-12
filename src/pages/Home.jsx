import React, { useState, useRef } from "react";
import { UserRound } from 'lucide-react';
import HeroImg from "../component/Home/HeroImg";


const Home = () => {
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
        <div className='bg-[#FFC108] h-screen w-full '>
            <div className='flex justify-between items-center w-auto px-6 py-4 h-auto'>
                <h1 className='text-xl font-bold'>Elite Home Logo</h1>
                <div className='cursor-pointer bg-[#493f3b60] hidden md:flex rounded-full h-[55px] transition duration-75'>
                    <div className='w-auto rounded-full text-center items-center justify-center px-9 flex text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]'>Home</div>
                    <div className='w-auto rounded-full text-center items-center justify-center text-white px-9 flex'>Product</div>
                    <div className='w-auto rounded-full text-center items-center justify-center text-white px-9 flex'>About Us</div>
                    <div className='w-auto rounded-full text-center items-center justify-center text-white px-9 flex'>Contact</div>
                </div>
                <div className='rounded-full flex justify-center items-center h-[65px] bg-[#6d6c6c62] w-[65px]'>
                    <UserRound size={53} strokeWidth={1.25} />
                </div>
            </div>


            <div className='md:px-10 px-3 h-[80vh] justify-between sm:block md:flex'>
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

                <div
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

export default Home