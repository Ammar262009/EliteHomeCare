import React, { useRef, useState } from 'react'


const HeroImg = () => {
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
        <div onMouseMove={(e) => {
                    if (e.buttons === 1) {
                        handleMove(e, e.clientX);
                    }
                }} className="w-full h-screen bg-black flex justify-center items-center">

            {/* Outer Glow */}
            <div className="p-8 rounded-[50px] shadow-[0_0_120px_rgba(255,255,255,0.15)]">

                {/* Main Card */}
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
                    className="relative w-[700px] h-[700px] rounded-[40px] overflow-hidden cursor-ew-resize"
                >
                    {/* AFTER IMAGE */}
                    <img
                        src="/Images/HeroImgAfter1.png"
                        alt="after"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* BEFORE IMAGE */}
                    <img
                        src="/Images/HeroImgBefore1.png"
                        alt="before"
                        className="absolute inset-0 w-full h-full object-cover brightness-75"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                        }}
                    />

                    {/* BEFORE LABEL */}
                    <div className="absolute top-6 left-6 z-20">
                        <div className="px-5 py-2 rounded-full bg-black/30 text-white font-bold text-xl backdrop-blur-md">
                            Before
                        </div>
                    </div>

                    {/* AFTER LABEL */}
                    <div className="absolute top-6 right-6 z-20">
                        <div className="px-5 py-2 rounded-full bg-black/20 text-white font-bold text-xl backdrop-blur-md">
                            After
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div
                        className="absolute top-0 bottom-0 w-[3px] bg-white z-30"
                        style={{
                            left: `${sliderPosition}%`,
                            transform: "translateX(-50%)"
                        }}
                    />

                    {/* Slider Handle */}
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
            </div>
        </div>
    );
};
export default HeroImg