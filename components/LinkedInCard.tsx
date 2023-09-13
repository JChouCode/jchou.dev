"use client"

import { useState } from "react";
import Card from "./Card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LinkedInCard() {
    const [hover, setHover] = useState(false);

    return (<Card>
        <div className="relative w-full h-full overflow-hidden rounded-2xl p-2 bg-[#F3F2F0]">
            <div className="z-[1000] absolute flex justify-center items-center right-[28px] top-[28px] h-[50px] w-[50px] rounded-lg overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height='30px' width='30px' viewBox="0 0 24 24"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" fill="rgba(255,255,255,1)"></path></svg>
            </div>
            <motion.div animate={{ scale: hover ? 15 : 1, z: 1 }} transition={{ type: 'linear', duration: 0.2 }} className="z-10 absolute right-[28px] top-[28px] h-[50px] w-[50px] bg-gradient-to-b from-[#5d8ef9] to-[#0B65C2] rounded-lg">
            </motion.div>
            <div className={`relative h-full w-full border-light-gray border-2 p-4 rounded-xl ${hover ? "z-50  bg-opacity-0 border-opacity-30 text-white" : "bg-white"}`}>
                <div className={`z-[300] flex justify-start border-b-light-gray border-b-2 pb-3 ${hover && "border-opacity-30"}`}>
                    <div className="z-50 flex gap-[7px] items-center">
                        <div className={`rounded-full w-fit h-fit overflow-hidden p-[3px] border-2 ${hover ? "border-white border-opacity-30" : "border-light-gray"}`}>
                            <Image className="rounded-full" src="/linked_profile.jpeg" height={45} width={45} alt="profile"></Image>
                        </div>
                        <div className="flex flex-col w-fit h-fit">
                            <div className="text-[15px] leading-4 font-semibold">Jeffrey Chou</div>
                            <div className={`text-[14px] mt-1 leading-4 font-regular ${hover ? "text-white text-opacity-80" : "text-secondary"}`}>Cornell &apos;22 | Comp Sci</div>
                        </div>
                    </div>
                </div>
                <div className="z-[100] ml-1 mt-4 text-[18.3px] leading-6 font-regular">
                    Looking for new and exciting opportunities !!!
                </div>
                <div className="z-[100] ml-1 mt-2 text-[18.3px] leading-6 font-regular">
                    Always down to chat :&#41;
                </div>
                <motion.a href="https://www.linkedin.com/in/jeffreychoucu/" animate={{ stroke: hover ? 'white' : 'black', backgroundColor: hover ? '#00000040' : 'white' }}
                    className={`z-[300] mt-7 flex justify-center items-center w-full h-[53px] border-black border-2 border-opacity-[15%] rounded-2xl`}
                    onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                    <div className="z-[100] flex gap-2 items-center">
                        <div className="font-medium text-[17px]">Slide into my DMs</div>
                        <svg className={`${hover ? "stroke-white" : "stroke-black"} stroke-2`} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 9a.5.5 0 110-1 .5.5 0 010 1zM8.5 9a.5.5 0 110-1 .5.5 0 010 1z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </motion.a>
            </div>
        </div>
    </Card>)
}
