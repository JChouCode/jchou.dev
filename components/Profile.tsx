import { Color, Badge } from './Badge'
import Image from 'next/image'
import HireButton from './HireButton'
import EmailButton from './EmailButton'

export default function Profile() {
    return (<div className="w-full mb-6">
        <div className='flex justify-between mb-6'>
            <Badge text="CORNELL '22" dot={false} color={Color.RED}></Badge>
            <Badge text="AVAILABLE FOR WORK" dot={true} color={Color.GREEN}></Badge>
        </div>
        <div className='flex flex-row w-full h-min justify-between items-center'>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-[37px] mb-1'>Jeffrey Chou</h1>
                <div className='font-light text-secondary tracking-wide w-fit text-md leading-[25px]'>
                    <p>Software engineer from Bay Area, CA.<br></br> Previously at <a className="hover:font-regular text-black underline-offset-4 underline" href="https://www.apollographql.com/">Apollo GraphQL</a>.</p>
                </div>
                <div className='flex mt-5 gap-1'>
                    <HireButton></HireButton>
                    <EmailButton></EmailButton>
                </div>
            </div>
            <div className='flex justify-center items-center h-[155px] w-[155px] rounded-full shadow-sm border-[#ebeef3] border-[3px]'>
                <div className='flex justify-center items-center h-[135px] w-[135px] bg-[#DDDDDD] rounded-full'>
                    <div className='mt-4'>
                        <Image src="/memoji.png" height={145} width={145} alt="memoji"></Image>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
