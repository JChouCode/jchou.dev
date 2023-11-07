import { Color, Badge } from './Badge'
import Image from 'next/image'
import HireButton from './HireButton'
import EmailButton from './EmailButton'

export default function Profile() {
    return (<div className="w-full mb-6">
        <div className='flex justify-between mb-6'>
            <Badge text="CORNELL '22" dot={false} color={Color.RED}></Badge>
            <Badge text="AVAILABLE FOR WORK :)" dot={false} color={Color.GREEN}></Badge>
        </div>
        <div className='flex w-full h-min justify-between items-center'>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-[23px] lg:text-[37px] mb-1'>Jeffrey Chou</h1>
                <div className='font-light text-secondary tracking-wide w-fit text-xxs leading-[16px] lg:text-base lg:leading-[25px]'>
                    <p>Software engineer from Bay Area, CA.<br></br> Previously at <a className="hover:font-regular text-black underline-offset-4 underline" href="https://www.apollographql.com/">Apollo GraphQL</a>.</p>
                </div>
                <div className='flex mt-3 lg:mt-5 gap-1'>
                    <HireButton></HireButton>
                    <EmailButton></EmailButton>
                </div>
            </div>
            <div className='flex justify-center items-center h-[100px] w-[100px] lg:h-[155px] lg:w-[155px] rounded-full shadow-sm border-[#ebeef3] border-[2px] lg:border-[3px]'>
                <div className='flex justify-center items-center h-[87px] w-[87px] lg:h-[135px] lg:w-[135px] bg-[#DDDDDD] rounded-full'>
                    <div className='relative mt-4 w-[85px] h-[85px] lg:h-[145px] lg:w-[145px]'>
                        <Image className="pb-1 lg:pb-0" src="/memoji.png" fill={true} alt="memoji"></Image>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
