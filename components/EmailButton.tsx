"use client"

import { motion } from 'framer-motion'
import { useState } from 'react';

export default function EmailButton() {

    return (<motion.a whileHover={{
        boxShadow: ' 0 0 0 2px #00000020',
        transition: { type: 'linear', duration: 2 },
    }}
        href='mailto:jc2573@cornell.edu'
        whileTap={{ scale: 0.9 }} type="button"
        className="shadow-button flex items-center w-[80px] h-[24px] lg:w-[100px] lg:h-[36px] bg-white border-light-gray border-2 rounded-md text-black p-2" >
        <div className="flex justify-between items-center h-full w-full">
            <svg className='w-[14px] lg:w-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M 12.5 13.794 L 7.5 13.794 C 6.948 13.794 6.5 13.346 6.5 12.794 L 6.5 6.794 C 6.5 6.241 6.948 5.794 7.5 5.794 L 12.5 5.794 C 13.052 5.794 13.5 6.241 13.5 6.794 L 13.5 12.794 C 13.5 13.346 13.052 13.794 12.5 13.794 Z" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9.5 3.722 L 9.5 2.794 C 9.5 2.241 9.052 1.794 8.5 1.794 L 3.5 1.794 C 2.948 1.794 2.5 2.241 2.5 2.794 L 2.5 9.794 C 2.5 10.346 2.948 10.794 3.5 10.794 L 4.364 10.794" fill="transparent" stroke-width="1.5" stroke="rgb(128,135,151)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.5"></path></svg>
            <div className='align-left font-medium text-xxs lg:text-sm'>Email Me</div>
        </div>
    </motion.a >)
}
