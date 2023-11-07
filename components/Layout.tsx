import { Children, ReactNode } from "react"
import ClickAround from "./ClickAround"

type LayoutProps = {
    left: ReactNode
    children: ReactNode
}

export default function Layout(props: LayoutProps) {

    return (
        <div className="flex flex-row justify-center w-full">
            <div>
                <ClickAround></ClickAround>
                <div className="grid w-fit lg:grid-cols-[550px_repeat(1,_328px)] xl:grid-cols-[550px_repeat(2,_328px)] gap-6">
                    <div className=" row-span-6">{props.left}</div>
                    {...props.children}
                </div>
            </div>
        </div>)
}
