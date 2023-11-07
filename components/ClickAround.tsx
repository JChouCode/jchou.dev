"use client"

import { motion } from "framer-motion"

export default function ClickAround() {
    return (
        <div className="flex w-full justify-end mb-3">
            <div className="flex items-center gap-1" >
                <motion.svg
                    whileHover={{ scale: 0.9 }}
                    className=" fill-[#00000050] stroke-[2] mb-[1px] w-[12px] lg:w-[19px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path clip-rule="evenodd" d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.306 1.813-2.88 5.895c-.57 1.168-2.295.957-2.568-.314L4.677 6.257A1.369 1.369 0 016.53 4.7L19.503 9.97z"></path></motion.svg>
                <div className="text-[9px] lg:text-[13.5px] text-black text-opacity-50 font-regular">Click around :&#41;</div>
            </div >
        </div>
    )
}
