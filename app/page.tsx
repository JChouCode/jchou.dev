import MainPane from '@/components/MainPane'
import Layout from '@/components/Layout'
import LeetCard from '@/components/LeetCard'
import PhotosCard from '@/components/PhotosCard'
import InstagramCard from '@/components/InstagramCard'
import MusicCard from '@/components/MusicCard'
import LinkedInCard from '@/components/LinkedInCard'

export default function Home() {
  return (
    <main className="flex  min-w-full min-h-full w-fit h-fit flex-col items-center justify-center p-12 bg-gray">
      <Layout left={<MainPane />}>
        <LeetCard></LeetCard>
        <PhotosCard />
        <InstagramCard />
        <MusicCard></MusicCard>
        <LinkedInCard></LinkedInCard>
        {/* <Card></Card>
        <Card></Card> */}
      </Layout>
    </main>
  )
}
