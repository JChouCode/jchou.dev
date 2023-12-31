"use client"

import { motion } from 'framer-motion'

export default function ResumeButton() {
    return (<motion.a
        whileHover={{
            boxShadow: '0 0 0 3px #00000020',
            transition: { type: 'linear', duration: 2 },
        }} whileTap={{ scale: 0.9 }} href="/resume.pdf"
        className="shadow-sm flex items-center p-2 w-[97px] h-[24px] lg:w-[127px] lg:h-[36px] bg-white border-light-gray border-2 rounded-md text-black">
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
                <svg className='w-[12px] lg:w-[16px]' viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>            </div>
            <div className='font-medium text-xxs lg:text-sm'>View Resume</div>
        </div>
    </motion.a>)
}
