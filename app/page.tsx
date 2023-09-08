import Pane from '@/components/Pane'
import Profile from '@/components/Profile'
import Follow from '@/components/Follow'
import Work from '@/components/Work'
import LetsWork from '@/components/LetsWork'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray">
      <Pane>
        <Profile></Profile>
        <Follow></Follow>
        <Work></Work>
        <LetsWork></LetsWork>
        <div className='mt-20 flex justify-center items-center'>
          <div className='text-sm font-regular text-gray-400'>Built with ❤️ in React | NextJS | Typescript | Framer Motion!</div>
        </div>
      </Pane>
    </main>
  )
}
