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
  Check
} from "lucide-react";
import FAQCard from "./FAQCard";

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
      
      <div className="text-center mb-14">
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

        <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4 bg-gradient-to-br from-[#fff7e8] to-[#fff1d6] rounded-3xl p-6 shadow-md relative overflow-hidden">
          
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
            <li className="flex gap-1"><Check /> Professional Painters</li>
            <li className="flex gap-1"><Check /> Premium Quality Paints</li>
            <li className="flex gap-1"><Check /> On-Time Completion</li>
            <li className="flex gap-1"><Check /> Clean & Safe Work Process</li>
            <li className="flex gap-1"><Check /> 5 Year Warranty</li>
          </ul>

          <div className="bg-white rounded-2xl p-4 mt-8 shadow-md flex items-center gap-4">
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
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {faqData.map((faq, idx) => (
            <FAQCard key={idx} id={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-14">
        {trustFeatures.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#fcf3df] rounded-2xl p-5 text-center hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-3 text-orange-500">
                <Icon size={32} />
              </div>

              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        *T&C Apply. Warranty applicable as per terms and conditions.
      </p>
    </section>
  );
};

export default FAQSection;