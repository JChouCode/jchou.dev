"use client"

import Card from "./Card";
import Image from "next/image";
import fetch from 'node-fetch';
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


export default function LeetCard() {

    const ranking = useMotionValue(0);
    const rankingRounded = useTransform(ranking, Math.round);

    const solved = useMotionValue(0);
    const solvedRounded = useTransform(solved, Math.round);

    useEffect(async function () {
        try {
            const response = await fetch('https://leetcode-stats-api.herokuapp.com/jchoubankai');
            const data = await response.json();
            animate(ranking, data.ranking, { duration: 1 });
            animate(solved, data.totalSolved, { duration: 1 });
        } catch (error) {
            console.log('error fetching leetcode data');
        }
    }, []);

    return (<Card>
        <div className="font-mono w-full h-full bg-[#242424] rounded-2xl p-7 text-white">
            <div className="flex justify-between">
                <h2 className={`font-semibold text-[23px]`}>Leetcode<br></br>Stats</h2>
                <a href="https://leetcode.com/jchoubankai/" className="h-fit">
                    <div className="flex text-black gap-1 items-center bg-white rounded-xl h-fit p-2">
                        <Image src="/leetcode.png" height={20} width={20} alt="icon"></Image>
                        <div className='font-medium text-[14px]'>jchoubankai</div>
                    </div>
                </a>
            </div>
            <div className="mt-4 flex justify-between">
                <div className="flex flex-col">
                    <div className="font-light text-sm">Rank</div>
                    <motion.div initial={false} className="font-bold text-[36px] text-[#F9A118]">{rankingRounded}</motion.div>
                </div>
                <div className="flex flex-col">
                    <div className="font-light text-sm">Solved</div>
                    <motion.div initial={false} className="font-bold text-[36px] text-[#3AB8A3]">{solvedRounded}</motion.div>
                </div>
            </div>
            <div className="flex flex-col mt-4 gap-2 w-full">
                <div className="font-light text-sm">Badges</div>
                <div className="w-full overflow-x-auto">
                    <div className="w-[365px] h-[55px] pb-3 overflow-hidden">
                        <motion.div animate={{ x: '-365px' }} transition={{ type: 'spring', stiffness: 40, duration: 5 }} className="flex w-[726px] h-full left-0">
                            {/* <div className="flex w-full h-full"> */}
                            <div className="flex w-fit h-full items-center gap-2 mr-2">
                                <Image src="/lc-top-100-liked-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-75-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-top-100-interview-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-programming-skills-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-may-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-june-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-august-badge.png" height={45} width={45} alt="icon"></Image>
                            </div>
                            <div className="flex w-fit h-full items-center gap-2">
                                <Image src="/lc-top-100-liked-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-75-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-top-100-interview-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-programming-skills-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-may-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-june-badge.png" height={45} width={45} alt="icon"></Image>
                                <Image src="/lc-august-badge.png" height={45} width={45} alt="icon"></Image>
                            </div>
                            {/* </div> */}
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    </Card >)
}
