import Image from 'next/image'
import { Badge } from './Badge'
import { ReactNode } from 'react'

type ExperienceProps = {
    photoPath: string
    company: string
    title: string
    children: ReactNode
}

export default function Experience(props: ExperienceProps) {
    if (props.children == null || props.children == undefined) {
        return (<div></div>)
    }

    return (<div className="mt-3 flex justify-between items-center p-2 px-3 lg:px-4 bg-white rounded-lg shadow-sm border-light-gray border-[1px] w-full h-[60px] lg:h-[78px] mx-auto">
        <div className="flex">
            <div className="flex mr-2 lg:mr-3 items-center justify-center w-[30px] h-[30px] lg:h-[50px] lg:w-[50px] border-light-gray border-2 rounded-full shadow-sm">
                <div className='relative w-[25px] h-[25px] lg:w-[36px] lg:h-[36px]'>
                    <Image className="rounded-full" src={props.photoPath} fill={true} alt="icon"></Image>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='font-medium text-xxs lg:text-base'>{props.company}</div>
                <div className='font-regular text-secondary text-[9px] lg:text-[15px]'>{props.title}</div>
            </div>
        </div>
        <div className='flex flex-col justify-start gap-1 items-end min-h-[90%]'>
            {props.children[0] ? props.children[0] : props.children}
            <div className='flex gap-1'>
                {props.children[1]}
                {props.children[2]}
            </div>
        </div>
    </div>)
}
