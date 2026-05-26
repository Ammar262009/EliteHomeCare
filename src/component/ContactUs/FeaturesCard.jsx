import React from 'react'
import {
    ShieldCheck,
    Clock3,
    Award,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";


const FeaturesCard = ({ icon: Icon, title, desc }) => {
    console.log(title);
    return (
        <div><motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="flex items-center gap-4 border-orange-200 lg:border-r last:border-none">
            <div className="rounded-2xl bg-orange-500 p-4 text-white shadow-lg">
                <Icon size={26} />
            </div>

            <div>
                <h3 className="font-bold">
                    {title}
                </h3>

                <p className="text-sm text-gray-500">
                    {desc}
                </p>
            </div>
        </motion.div></div>
    )
}

export default FeaturesCard