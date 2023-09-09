import MainPane from '@/components/MainPane'
import Layout from '@/components/Layout'
import LeetCard from '@/components/LeetCard'
import PhotosCard from '@/components/PhotosCard'
import InstagramCard from '@/components/InstagramCard'
import MusicCard from '@/components/MusicCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gray">
      <Layout left={<MainPane />}>
        <LeetCard></LeetCard>
        <PhotosCard />
        <InstagramCard />
        <MusicCard></MusicCard>
        {/* <Card></Card>
        <Card></Card> */}
      </Layout>
    </main>
  )
}
