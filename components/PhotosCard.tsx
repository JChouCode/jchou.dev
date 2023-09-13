"use client"

import { wrap } from "popmotion";
import { useState } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

const videos = ['/cloudy1.MOV', '/cloudy2.MOV', '/cloudy4.mov']
const descriptions = ['My pet bird Cloudy is a true asian 🍚', 'My pet bird Cloudy loves watching me code 👨‍💻', 'My pet bird Cloudy enjoys 🍌 too!']

export default function PhotosCard() {
    const [vidIndex, setVidIndex] = useState(0);
    const videoIndex = wrap(0, videos.length, vidIndex);
    const [hover, setHover] = useState(false);

    return (<div>
        <Card logoPath="/apple-photos.png" logoUrl='https://www.instagram.com/jchouder/'>
            <AnimatePresence initial={false}>
                <div onMouseOver={() => { setHover(true); }} onMouseOut={() => { setHover(false); }} className="relative w-full h-full overflow-hidden">
                    <div className="relative overflow-hidden w-full h-full rounded-xl bg-white">
                        <div className="z-[100] absolute box-border border-[#FFFFFF30] border-[5px] rounded-xl w-full h-full bg-none"></div>
                        <motion.video
                            className="absolute w-fit h-fit bottom-[-40%]"
                            key={videos[videoIndex]}
                            autoPlay={true}
                            muted={true}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 50, duration: 1 }}
                            onEnded={() => setVidIndex((prev) => {
                                return prev + 1
                            })}
                        >
                            <source src={videos[videoIndex]} type="video/mp4" />
                        </motion.video>
                    </div>
                </div>
            </AnimatePresence>
            <AnimatePresence initial={false}>
                {
                    hover && <motion.div
                        key={descriptions[videoIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-4 w-fit bottom-4 text-white text-opacity-90 text-xs font-regular tracking-wide p-2 bg-black bg-opacity-50 rounded-xl">
                        {descriptions[videoIndex]}
                    </motion.div>
                }

            </AnimatePresence>
        </Card >
    </div>)
}
