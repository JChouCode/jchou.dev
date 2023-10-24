import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type LeetcodeBadgeProps = {
    img: string,
    title: string
}

export default function LeetcodeBadge({ img, title }: LeetcodeBadgeProps) {
    const [showTitle, setShowTitle] = useState(true);

    return (
        <div className="relative h-[45px] w-[45px]" onMouseEnter={() => setShowTitle(true)} onMouseLeave={() => setShowTitle(false)}>
            <Image src={img} height={45} width={45} alt="icon"></Image>
            <div className="absolute w-fit left-0 right-0 mx-auto top-[48px] ">
                <AnimatePresence>
                    {<motion.div className="text-[10px] p-1 rounded-lg bg-white text-black">
                        {title}
                    </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    )
}
