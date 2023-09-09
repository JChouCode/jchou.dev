"use client"

import { wrap } from "popmotion";
import { useState } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

// const variants = {
//     enter: (direction: number) => {
//         return {
//             // x: direction > 0 ? 10 : -10,
//             opacity: 0
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1
//     },
//     exit: (direction: number) => {
//         return {
//             // x: direction < 0 ? 10 : -10,
//             opacity: 0
//         };
//     }
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//     return Math.abs(offset) * velocity;
// };

const images = ['/cloudy1.jpeg', '/cloudy2.jpeg']

const videos = ['/cloudy1.MOV', '/cloudy2.MOV', '/cloudy3.MOV']

export default function PhotosCard() {
    const [vidIndex, setVidIndex] = useState(0);
    const videoIndex = wrap(0, videos.length, vidIndex);

    return (<div>
        <Card logoPath="/apple-photos.png" logoUrl='https://www.instagram.com/jchouder/'>
            <AnimatePresence initial={false}>
                <div className="relative w-full h-full overflow-hidden">
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
            <div className="absolute left-4 w-fit bottom-4 text-white text-opacity-90 text-xs font-regular tracking-wide p-2 bg-black bg-opacity-50 rounded-xl"> My pet bird Cloudy :)</div>
        </Card >
    </div>)
    // const [[page, direction], setPage] = useState([0, 0]);

    // const imageIndex = wrap(0, images.length, page);

    // const paginate = (newDirection: number) => {
    //     setPage([page + newDirection, newDirection]);
    // };

    // return (<Card logoPath="/apple-photos.png" logoUrl="test.com">
    //     <AnimatePresence initial={false} custom={direction}>
    //         <div className="w-full h-full overflow-hidden rounded-lg bg-black">
    //             <motion.img
    //                 className="object-cover w-[700px] h-full"
    //                 key={page}
    //                 src={images[imageIndex]}
    //                 custom={direction}
    //                 variants={variants}
    //                 initial="enter"
    //                 animate="center"
    //                 exit="exit"
    //                 transition={{
    //                     x: { type: "spring", stiffness: 300, damping: 30 },
    //                     opacity: { duration: 1 }
    //                 }}
    //                 drag="x"
    //                 dragConstraints={{ left: 0, right: 0 }}
    //                 dragElastic={0}
    //                 onDragEnd={(e, { offset, velocity }) => {
    //                     const swipe = swipePower(offset.x, velocity.x);

    //                     if (swipe < -swipeConfidenceThreshold) {
    //                         paginate(1);
    //                     } else if (swipe > swipeConfidenceThreshold) {
    //                         paginate(-1);
    //                     }
    //                 }}
    //             />
    //         </div>
    //         {/* </div> */}
    //     </AnimatePresence>
    // </Card >)
}
