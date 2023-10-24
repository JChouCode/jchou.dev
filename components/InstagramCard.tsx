"use client"

import { wrap } from "popmotion";
import { useState, useEffect } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import surf1 from '../public/surf1.jpeg'
import surf2 from '../public/surf2.jpeg'
import surf4 from '../public/surf4.jpeg'
import surf5 from '../public/surf5.jpeg'
import insta from '../public/insta.jpeg'
import insta2 from '../public/insta2.jpeg'
import insta3 from '../public/insta3.jpeg'
import insta4 from '../public/insta4.jpeg'
import Image from "next/image";

enum Images {
    ME,
    WAVES
}

const meImages = [insta, insta2, insta3, insta4]
const waveImages = [surf1, surf2, surf4, surf5]

export default function InstagramCard() {
    const [imgIndex, setImgIndex] = useState(0);
    const [selected, setSelected] = useState(Images.ME);
    const [hoverY, setHoverY] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => {
                return prev + 1
            })
        }, 10000)
        return () => clearInterval(interval);
    }, []);

    const imageIndex = wrap(0, meImages.length, imgIndex);
    const images = selected == Images.ME ? meImages : waveImages;


    return (
        <div onMouseOver={() => setHoverY(0)} onMouseOut={() => setHoverY(100)}>
            <Card logoPath="/instacrop.png" logoUrl='https://www.instagram.com/jchouder/'>
                <AnimatePresence initial={false}>
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="relative overflow-hidden w-full h-full rounded-xl bg-white">
                            <div className="z-[100] absolute box-border border-[#FFFFFF30] border-[5px] rounded-xl w-full h-full bg-none"></div>
                            <motion.div
                                className="absolute w-fit h-fit"
                                key={imageIndex}
                                exit={{ opacity: 0 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 50, duration: 1 }}
                            >
                                <Image src={images[imageIndex]} width={328} height={328} alt="Instagram" placeholder="blur" />
                            </motion.div>
                            <motion.div animate={{ y: hoverY }} transition={{ type: 'spring', duration: 0.7 }} className="z-[100] flex justify-evenly items-center left-0 right-0 backdrop-blur-lg mx-auto bottom-6 absolute w-[150px] h-[48px] bg-white bg-opacity-50 rounded-full border-[#FFFFFF50] border-[3px] ">
                                <button className="relative flex justify-center items-center h-[80%] w-fit px-1 rounded-full" onClick={() => { setSelected(Images.ME); }}>
                                    <svg className={`z-[200] ${selected == Images.ME ? 'stroke-black' : 'stroke-[#00000070]'}`} width="35px" height="35px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke-width="1.5"></path><path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z" fill="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    {selected == Images.ME && <motion.div transition={{ type: 'spring', duration: 0.2, delay: 0.1 }} className="absolute left-0 right-0 mx-auto bg-white h-full w-full rounded-xl" layoutId="selected">
                                    </motion.div>}
                                </button>
                                <button className="relative flex justify-center items-center h-[80%] w-fit px-1 rounded-full" onClick={() => { setSelected(Images.WAVES); }}>
                                    <svg className={`z-[200] ${selected == Images.WAVES ? 'stroke-black' : 'stroke-[#00000070]'}`} width="35px" height="35px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 10c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 17c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    {selected == Images.WAVES && <motion.div transition={{ type: 'spring', duration: 0.2, delay: 0.1 }} className="absolute bg-white h-full w-full rounded-xl" layoutId="selected">
                                    </motion.div>}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </AnimatePresence>
            </Card >
        </div>)
}
