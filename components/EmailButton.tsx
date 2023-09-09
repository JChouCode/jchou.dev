"use client"

import { motion } from 'framer-motion'
import { useState } from 'react';

export default function EmailButton() {

    const [text, setText] = useState('Copy Email')

    return (<motion.button whileHover={{
        boxShadow: ' 0 0 0 2px #00000020',
        transition: { type: 'linear', duration: 2 },
    }}
        whileTap={{ scale: 0.9 }} type="button" onClick={async () => { navigator.clipboard.writeText("jc2573@cornell.edu"); setText("Copied!"); setText("Copy Email"); }} className=" font-[sans-serif] shadow-button flex justify-center w-[116px] h-[36px] bg-white border-light-gray border-2 rounded-md text-black">
        <motion.div layout className="flex justify-between items-center w-[85%] h-full">
            <div className="flex gap-1 items-center h-[16px] w-[16px] rounded-full border-white border-[1px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M 12.5 13.794 L 7.5 13.794 C 6.948 13.794 6.5 13.346 6.5 12.794 L 6.5 6.794 C 6.5 6.241 6.948 5.794 7.5 5.794 L 12.5 5.794 C 13.052 5.794 13.5 6.241 13.5 6.794 L 13.5 12.794 C 13.5 13.346 13.052 13.794 12.5 13.794 Z" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9.5 3.722 L 9.5 2.794 C 9.5 2.241 9.052 1.794 8.5 1.794 L 3.5 1.794 C 2.948 1.794 2.5 2.241 2.5 2.794 L 2.5 9.794 C 2.5 10.346 2.948 10.794 3.5 10.794 L 4.364 10.794" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.5"></path></svg>            </div>
            <motion.div layout transition={{ type: 'linear', duration: 0.3, delay: 10 }} className='align-left font-medium text-sm w-[100px]'>{text}</motion.div>
        </motion.div>
    </motion.button >)
}
