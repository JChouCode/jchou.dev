import { ReactNode } from 'react'

type PaneProps = {
    children: ReactNode
}

export default function Pane(props: PaneProps) {
    return (
        <div className='w-[550px] h-fit p-10 bg-white shadow-custom flex flex-col item-center rounded-2xl'>
            {props.children}
        </div>)
}
