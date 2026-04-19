"use client"

import Image from "next/image";
import Card from "./Card";
import { useRef, useState, useEffect } from "react";
import { wrap } from "popmotion";
import { motion } from "framer-motion";


type AudioInfo = {
    audioSources: string[],
    imgPath: string,
    track: string,
    album: string
    artist: string,
}

const audioMap: Array<AudioInfo> = [
    { audioSources: ['/e85.flac', '/e85.mp3'], imgPath: '/e85_album.png', track: 'E85', album: 'OCTANE', artist: 'Don Toliver' },
    { audioSources: ['/2nite.flac', '/2nite.mp3'], imgPath: '/2nite_album.png', track: '2Nite', album: '2Nite', artist: 'Yeat' },
    { audioSources: ['/satellite.mp3'], imgPath: '/satellite_album.jpeg', track: 'Satellite', album: 'Harry\'s House', artist: 'Harry Styles' },
    { audioSources: ['/ordinary-life.mp3'], imgPath: '/starboy_album.png', track: 'Ordinary Life', album: 'Starboy', artist: 'The Weeknd' },
]

const resolveAudioSource = (audioSources: string[]) => {
    if (typeof Audio === "undefined") {
        return audioSources[0];
    }

    const probeAudio = document.createElement("audio");
    const canPlayFlac = ["audio/flac", "audio/x-flac"].some((mimeType) => probeAudio.canPlayType(mimeType) !== "");

    if (canPlayFlac) {
        const flacSource = audioSources.find((source) => source.endsWith(".flac"));
        if (flacSource) {
            return flacSource;
        }
    }

    return audioSources.find((source) => source.endsWith(".mp3")) ?? audioSources[0];
};

export default function MusicCard() {
    const [audioIndex, setAudioIndex] = useState(0);
    const wrappedAudioIndex = wrap(0, audioMap.length, audioIndex);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    const { imgPath, track, album, artist } = audioMap[wrappedAudioIndex]

    const audioRefs = useRef<Array<HTMLAudioElement>>([]);
    const getCurrentAudio = () => audioRefs.current[wrappedAudioIndex];

    useEffect(() => {
        audioRefs.current = audioMap.map(({ audioSources }) => new Audio(resolveAudioSource(audioSources)));

        return () => {
            audioRefs.current.forEach((trackAudio) => {
                trackAudio.pause();
                trackAudio.currentTime = 0;
            });
        };
    }, []);

    useEffect(() => {
        const audio = audioRefs.current[wrappedAudioIndex];
        if (playing && audio) {
            audio.play();
        }
    }, [audioIndex, playing, wrappedAudioIndex]);

    useEffect(() => {
        const audio = audioRefs.current[wrappedAudioIndex];
        if (audio) {
            audio.muted = muted;
        }
    }, [muted, wrappedAudioIndex]);

    const resetAudio = () => {
        const audio = getCurrentAudio();
        if (!audio) return;
        audio.currentTime = 0;
        audio.pause();
    };

    const toggleMute = (nextMuted: boolean) => {
        const audio = getCurrentAudio();
        setMuted(nextMuted);
        if (audio) {
            audio.muted = nextMuted;
        }
    };

    return (<Card logoPath="/apple-music-logo.png" logoUrl="https://open.spotify.com/user/1259911919?si=d9a09e90f02f4611" disableShadow={true}>
        <div className="relative p-[28px] h-full overflow-hidden rounded-2xl">
            <motion.div initial={false} animate={{ scale: playing ? 15 : 1 }} transition={{ type: 'linear', duration: 0.2 }}
                className=" z-10 absolute rounded-xl right-[28px] h-[50px] w-[50px] bg-gradient-to-b from-[#f95d73] to-[#fa263d]">

            </motion.div>
            <div className=" flex flex-col justify-start">
                <div className="z-[200] bg-white shadow-button border-light-gray p-[4px] border-2 rounded-md w-fit h-fit">
                    <div className="relative h-[130px] w-[130px] overflow-hidden rounded-[2px]">
                        <Image
                            src={imgPath}
                            fill
                            alt={`${track} album art`}
                            className="object-cover object-center"
                            sizes="130px"
                        ></Image>
                    </div>
                </div>
                <motion.div animate={{ color: playing ? 'white' : 'black' }}
                    className="z-[200] ml-1 mt-5 text-[16px]  leading-3 font-medium tracking-wide">{track}</motion.div>
                <div className={`z-[200] ml-1 text-[14px] leading-7 font-regular ${playing ? 'text-white' : 'text-secondary'}`}>{artist + " - " + album}</div>
                <motion.div animate={{ stroke: playing ? 'white' : 'black', backgroundColor: playing ? '#00000040' : 'white' }} className="z-[200] shadow-sm mt-5 h-[48px] w-full flex justify-between rounded-xl py-[10px] px-[16px] border-black border-2 border-opacity-10">
                    <button>
                        <a href="https://open.spotify.com/user/1259911919?si=d9a09e90f02f4611">
                            <motion.svg animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2 11h14M2 17h11M2 5h18" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0v-7.9a.6.6 0 01.6-.6H22" stroke-linecap="round"></path></motion.svg>
                        </a>
                    </button>
                    <button onClick={() => { resetAudio(); setAudioIndex((prev) => { return prev - 1; }) }}>
                        <motion.svg animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 7v10M17.028 5.267a.6.6 0 01.972.471v12.524a.6.6 0 01-.972.47l-7.931-6.261a.6.6 0 010-.942l7.931-6.262z" stroke-linecap="round" stroke-linejoin="round"></path></motion.svg>                    </button>
                    {playing ? <button onClick={() => { getCurrentAudio()?.pause(); setPlaying(false); }}>
                        <motion.svg layoutId="play" animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 18.4V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6zM14 18.4V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6z"  ></path></motion.svg>
                    </button> : <button onClick={() => { getCurrentAudio()?.play(); setPlaying(true); }}>
                        <motion.svg layoutId="play" animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke-linecap="round" stroke-linejoin="round"></path></motion.svg>
                    </button>}
                    <button onClick={async () => {
                        resetAudio(); await setAudioIndex((prev) => { return prev + 1; });
                    }}>
                        <motion.svg animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 7v10M6.972 5.267A.6.6 0 006 5.738v12.524a.6.6 0 00.972.47l7.931-6.261a.6.6 0 000-.942L6.972 5.267z" stroke-linecap="round" stroke-linejoin="round"></path></motion.svg>
                    </button>
                    {
                        muted ?
                            <button onClick={() => { toggleMute(false); }}>
                                <motion.svg animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><g clip-path="url(#sound-off_svg__clip0_3173_16686)"><path d="M18 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H4a2 2 0 01-2-2z"></path></g><defs><clipPath id="sound-off_svg__clip0_3173_16686"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></motion.svg>
                            </button> :
                            <button onClick={() => { toggleMute(true); }}>
                                <motion.svg animate={{ stroke: playing ? 'white' : '#00000090' }} className=' stroke-[1.6px] stroke-[#00000090]' width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M1 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H3a2 2 0 01-2-2z" ></path><path d="M17.5 7.5S19 9 19 11.5s-1.5 4-1.5 4M20.5 4.5S23 7 23 11.5s-2.5 7-2.5 7" stroke-linecap="round" stroke-linejoin="round"></path></motion.svg>
                            </button>
                    }
                </motion.div>
            </div>

        </div>
    </Card >)
}
