import Image from 'next/image'
import { Badge } from './Badge'
import { ReactNode } from 'react'

type ExperienceProps = {
    photoPath: String
    company: String
    title: String
    children: ReactNode
}

export default function Experience(props: ExperienceProps) {
    return (<div className="mt-3 flex justify-between items-center p-2 px-4 bg-white rounded-lg shadow-sm border-light-gray border-[1px] w-full h-[78px] mx-auto">
        <div className="flex">
            <div className="flex mr-3 items-center justify-center h-[50px] w-[50px] border-light-gray border-2 rounded-full shadow-sm">
                <Image className="rounded-full" src={props.photoPath} height={36} width={36} alt="icon"></Image>
            </div>
            <div className='flex flex-col'>
                <div className='font-medium text-md'>{props.company}</div>
                <div className='font-regular text-secondary text-[15px]'>{props.title}</div>
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
