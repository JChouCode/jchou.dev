import { ReactNode } from "react"

type LayoutProps = {
    left: ReactNode
    children: ReactNode
}

export default function Layout(props: LayoutProps) {

    return (<div className="flex justify-center">
        <div className="flex gap-6">
            {props.left}
            <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                    {props.children[0]}
                    {props.children[1]}
                </div>
                <div className="flex gap-6">
                    {props.children[2]}
                    {props.children[3]}
                </div>
                <div className="flex gap-6">
                    {props.children[4]}
                    {props.children[5]}
                </div>

            </div>
        </div>
    </div>)
}
