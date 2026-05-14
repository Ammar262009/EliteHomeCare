import React, { useState, useRef } from "react";

const beforeAfterData = [
    {
        before: "/Images/HeroImgBefore1.png",
        after: "/Images/HeroImgAfter1.png",
        title: "Living Room Transformation",
    },
    {
        before: "/Images/HeroImgBefore2.png",
        after: "/Images/HeroImgAfter2.png",
        title: "Wall Renovation",
    },
];

const BeforeAfter = (props) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const sliderRef = useRef(null);

    const handleMove = (clientX) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();

        let position = ((clientX - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(position, 100));

        setSliderPosition(position);
    };

    return (
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
            className="relative w-full h-full rounded-3xl overflow-hidden cursor-ew-resize" >

            <img
                src={props.after}
                alt="after"
                className="absolute inset-0 w-full h-full object-cover" />


            <img
                src={props.before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }} />


            <div className="absolute top-5 left-5 bg-black/30 px-4 py-2 rounded-full text-white"> Before</div>

            <div className="absolute top-5 right-5 bg-black/30 px-4 py-2 rounded-full text-white"> After </div>

            <div className="absolute top-0 bottom-0 w-[3px] bg-white"
                style={{
                    left: `${sliderPosition}%`,
                    transform: "translateX(-50%)",
                }} />


            <div
                className="absolute top-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center"
                style={{
                    left: `${sliderPosition}%`,
                    transform: "translate(-50%, -50%)",
                }} > ||</div>


            <div className="absolute bottom-5 left-5 bg-black/40 text-white px-4 py-2 rounded-xl"> {props.title} </div>
        </div>
    );
};

export default BeforeAfter;