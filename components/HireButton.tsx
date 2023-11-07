"use client"

import { motion } from 'framer-motion'

export default function HireButton() {
    return (<motion.a
        whileHover={{
            boxShadow: '0 0 0 3px #00000020',
            transition: { type: 'linear', duration: 2 },
        }}
        whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/jeffreychoucu/"
        className="flex items-center outline outline-1 outline-[#00000030] font-[sans-serif] shadow-button p-2 h-[24px] w-[67px] lg:w-[83px] lg:h-[36px] bg-black rounded-md text-white">
        <div className="flex w-full justify-between items-center">
            <div className="rounded-full border-white border-[1px]">
                <svg className="w-[8px] lg:w-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="rgba(255,255,255,1)"></path></svg>
            </div>
            <div className='font-medium text-xxs lg:text-sm'>Hire Me</div>
        </div>
    </motion.a>)
}
