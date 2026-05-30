import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush
} from "lucide-react";

const FacebookIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <svg
    xmlns="http://w3.org"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <svg
    xmlns="http://w3.org"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main Outer Box */}
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    {/* Inner Lens Circle */}
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    {/* Top Right Camera Flash Dot */}
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const LinkedInIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <svg
    xmlns="http://w3.org"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Rounded Box */}
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    {/* Vertical Stem of the 'i' */}
    <rect width="4" height="12" x="2" y="9" />
    {/* Dot of the 'i' */}
    <circle cx="4" cy="4" r="2" />
  </svg>
);



import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Paintbrush />
              </div>

              <h2 className="text-2xl font-bold">
                Elite Home Care
              </h2>
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Professional painting services for homes,
              apartments and commercial spaces with
              premium quality finishes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Water Proofing</li>
              <li>Rental Painting</li>
              <li>Texture Painting</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 12345 67890</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@elitehomecare.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Pune, Maharashtra</span>
              </div>

            </div>
          </motion.div>

        </div>

        <div className="h-px bg-white/10 my-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center md:text-left">
            © 2025 Elite Home Care. All Rights Reserved.
          </p>

          <div className="flex gap-4">

            <motion.a
              whileHover={{ y: -4 }}
              className="bg-white/10 p-3 rounded-full"
            >
              <FacebookIcon size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              className="bg-white/10 p-3 rounded-full"
            >
              <InstagramIcon size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              className="bg-white/10 p-3 rounded-full"
            >
              <LinkedInIcon size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              className="bg-green-600 p-3 rounded-full"
            >
              <MessageCircle size={18} />
            </motion.a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;