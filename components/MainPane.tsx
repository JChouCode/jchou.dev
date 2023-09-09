import Pane from '@/components/Pane'
import Profile from '@/components/Profile'
import Follow from '@/components/Follow'
import Work from '@/components/Work'
import LetsWork from '@/components/LetsWork'

export default function MainPane() {
    return (
        <Pane>
            <Profile></Profile>
            <Follow></Follow>
            <Work></Work>
            <LetsWork></LetsWork>
            <div className='mt-20 pb-3 flex justify-center items-center'>
                <div className='text-sm text-center leading-6 font-regular text-gray-400'>
                    Built with ❤️ in React | NextJS | Typescript | Framer Motion! <br></br>
                    Designed in Figma :) | Inspired by <a className='underline' href='https://twitter.com/nurpraditya'>Nur</a> and <a className='underline' href="https://www.marco.fyi/">Marco</a>
                </div>
            </div>
        </Pane>
    )
}
