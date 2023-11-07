import Pane from '@/components/Pane'
import Profile from '@/components/Profile'
import Follow from '@/components/Follow'
import Work from '@/components/Work'
import LetsWork from '@/components/LetsWork'
import Credits from '@/components/Credits'

export default function MainPane() {
    return (
        <Pane>
            <Profile></Profile>
            <Follow></Follow>
            <Work></Work>
            <LetsWork></LetsWork>
            <Credits></Credits>
        </Pane>
    )
}
