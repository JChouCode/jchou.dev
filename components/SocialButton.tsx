"use client"

import { ReactNode } from "react"
import { motion } from 'framer-motion'

type SocialProps = {
    children: ReactNode
}

export default function SocialButton(props: SocialProps) {
    return (
        <motion.div whileHover={{
            scale: 1.1,
            transition: { type: 'spring', duration: 0.3 },
        }}
            whileTap={{ scale: 0.9 }} className="flex items-center justify-center h-[40px] w-[40px] border-light-gray border-[2px] shadow-sm rounded-lg ml-2 bg-white">
            {props.children}
        </motion.div>
    )
}
