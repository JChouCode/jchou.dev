import { ReactNode } from "react"

type SocialProps = {
    children: ReactNode
}

export default function SocialButton(props: SocialProps) {
    return (
        <div className="flex items-center justify-center h-[40px] w-[40px] border-light-gray border-[2px] shadow-sm rounded-lg ml-2 bg-white">
            {props.children}
        </div>
    )
}
