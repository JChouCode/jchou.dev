import MainPane from '@/components/MainPane'
import Layout from '@/components/Layout'
import LeetCard from '@/components/LeetCard'
import PhotosCard from '@/components/PhotosCard'
import InstagramCard from '@/components/InstagramCard'
import MusicCard from '@/components/MusicCard'
import LinkedInCard from '@/components/LinkedInCard'
import localFont from 'next/font/local'

const interDisplay = localFont({
  src: [
    {
      path: '../public/fonts/InterDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

export default function Home() {
  return (
    <main className={interDisplay.className + ` flex min-w-full min-h-full w-fit h-fit flex-col items-center justify-center pb-14 pt-8 bg-gray`}>
      <Layout left={<MainPane />}>
        <LeetCard></LeetCard>
        <PhotosCard />
        <InstagramCard />
        <MusicCard></MusicCard>
        <LinkedInCard></LinkedInCard>
      </Layout>
    </main>
  )
}
