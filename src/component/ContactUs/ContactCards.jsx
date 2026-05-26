import React from 'react'
import { motion } from "framer-motion";


const ContactCards = ({ id, title, icon: Icon, info, sub }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount: 0.2,
            }}
            transition={{
                delay: id * 0.12,
                duration: 0.6,
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="rounded-3xl bg-white/80 p-5 shadow-lg backdrop-blur-lg">
            <div className="flex items-start gap-4">

                <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-4 text-white shadow-lg">
                    <Icon size={24} />
                </div>

                <div>
                    <h3 className="font-bold text-lg">
                        {title}
                    </h3>

                    <p className="mt-1 font-medium text-gray-800">
                        {info}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        {sub}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactCards