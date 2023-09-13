import { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type CardProps = {
    logoPath: string
    logoUrl: string
    children: ReactNode
    disableShadow: boolean
}

export default function Card(props: CardProps) {
    return (<div className="relative w-[328px] h-[328px] bg-white rounded-2xl shadow-custom">
        {props.logoPath &&
            (<motion.a
                // whileHover={{
                //     scale: 1.05,
                //     transition: { type: 'spring', duration: 0.3 },
                // }}
                // whileTap={{ scale: 0.9 }}
                href={props.logoUrl} className={`h-[50px] w-[50px] z-[200] rounded-xl overflow-hidden absolute right-[28px] top-[28px] ${!props.disableShadow && "shadow-button"}`}>
                <Image src={props.logoPath} className="w-full h-full" height={50} width={50} alt="icon"></Image>
            </motion.a>)}
        {props.children}
    </div>)

}
