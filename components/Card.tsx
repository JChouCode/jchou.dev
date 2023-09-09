import { ReactNode } from "react"
import Image from "next/image"

type CardProps = {
    logoPath: String
    logoUrl: String
    children: ReactNode
    disableShadow: Boolean
}

export default function Card(props: CardProps) {
    return (<div className="relative w-[328px] h-[328px] bg-white rounded-2xl shadow-custom">
        {props.logoPath && (<a href={props.logoUrl} className={`h-[50px] w-[50px] z-[200] rounded-xl overflow-hidden absolute right-[28px] top-[28px] ${!props.disableShadow && "shadow-button"}`}>
            <img quality={100} src={props.logoPath} height={50} width={50} alt="icon"></img>
        </a>)}
        {props.children}
    </div>)

}
