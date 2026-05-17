import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FAQCard = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
      const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <div
            className="bg-white rounded-2xl shadow-sm border border-orange-500 hover:shadow-md transition-all" >
            <button
                onClick={() => toggleFAQ(props.id)}
                className="w-full flex justify-between items-center p-5 text-left" >
                <h3 className="font-semibold text-lg">
                    {props.question}
                </h3>

                {activeIndex === props.id ? (
                    <ChevronUp className="text-orange-500" />
                ) : (
                    <ChevronDown />
                )}
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === props.id
                        ? "max-h-40 pb-5 px-5"
                        : "max-h-0"
                    }`}>
                <p className="text-gray-600">
                    {props.answer}
                </p>
            </div>
        </div>
    )
}

export default FAQCard