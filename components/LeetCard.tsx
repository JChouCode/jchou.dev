"use client";

import Card from "./Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    AnimatePresence,
} from "framer-motion";
import localFont from "next/font/local";

const jetBrainsMono = localFont({
    src: [
        {
            path: "../public/fonts/JetBrainsMono-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/JetBrainsMono-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/JetBrainsMono-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/JetBrainsMono-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/JetBrainsMono-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/JetBrainsMono-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
});

export default function LeetCard() {
    const ranking = useMotionValue(0);
    const rankingRounded = useTransform(ranking, Math.round);

    const solved = useMotionValue(0);
    const solvedRounded = useTransform(solved, Math.round);

    const [info, setInfo] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://leetcode-stats-api.herokuapp.com/jchoubankai",
                { next: { revalidate: 3600 } }
            );
            const data = await response.json();
            animate(ranking, data.ranking, { duration: 1 });
            animate(solved, data.totalSolved, { duration: 1 });
        }
        try {
            fetchData();
        } catch (error) {
            console.log("error fetching leetcode data");
        }
    }, []);

    return (
        <Card>
            <div
                className={
                    jetBrainsMono.className +
                    ` relative flex flex-col w-full h-full bg-[#242424] rounded-2xl p-7 text-white`
                }
            >
                <div className="flex justify-between">
                    <h2 className={`font-semibold text-[23px]`}>
                        Leetcode<br></br>Stats
                    </h2>
                    <a
                        href="https://leetcode.com/jchoubankai/"
                        className="h-fit"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="flex text-black gap-1 items-center bg-white rounded-xl h-fit p-2"
                        >
                            <Image
                                src="/leetcode.png"
                                height={20}
                                width={20}
                                alt="icon"
                            ></Image>
                            <div className="font-medium text-[14px]">
                                jchoubankai
                            </div>
                        </motion.div>
                    </a>
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="flex flex-col">
                        <div className="font-light text-sm">Rank</div>
                        <motion.div
                            initial={false}
                            className="font-extrabold text-[36px] text-[#F9A118]"
                        >
                            {rankingRounded}
                        </motion.div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-light text-sm">Solved</div>
                        <motion.div
                            initial={false}
                            className="font-extrabold text-[36px] text-[#3AB8A3]"
                        >
                            {solvedRounded}
                        </motion.div>
                    </div>
                </div>
                <div className="relative flex flex-col mt-3 gap-2 w-full h-full">
                    <div className="flex justify-between items-center h-[25px]">
                        <div className="font-light text-sm">Badges</div>
                        <AnimatePresence>
                            {info && (
                                <motion.div className=" font-normal p-1 px-2 rounded-md text-[11px] bg-black bg-opacity-30 text-white">
                                    {info}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <div className="relative w-full h-fit pb-2 overflow-x-scroll">
                            <div className="relative w-[730px] h-fit overflow-x-hidden">
                                <motion.div
                                    className="flex w-[1420px] h-[50px]"
                                    animate={{ x: "-712px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 40,
                                        duration: 7,
                                        delay: 0.8,
                                    }}
                                >
                                    <div className="relative flex w-fit h-full items-center gap-2 mr-2">
                                        <Image
                                            src="/lc-top-100-liked-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-75-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-top-100-interview-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-programming-skills-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-premium-100-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-dp-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-graph-theory-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-binary-search-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-50.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-100.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-may-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-june-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-august-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-september-badge.png"
                                            height={45}
                                            width={45}
                                            alt="icon"
                                        ></Image>
                                    </div>
                                    <div className="relative flex w-fit h-full items-center gap-2">
                                        <Image
                                            src="/lc-top-100-liked-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Top 100 Liked");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-75-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("LeetCode 75");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-top-100-interview-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Top Interview 150");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-programming-skills-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Programming Skills");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-premium-100-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Premium Algo 100");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-dp-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Dynamic Programming");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-graph-theory-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Graph Theory");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-binary-search-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Binary Search");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-50-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("50 Days - 2023");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-100-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("100 Days - 2023");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-may-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("May 2023 Badge");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-june-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("June 2023 Badge");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-august-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Aug 2023 Badge");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                        <Image
                                            src="/lc-september-badge.png"
                                            height={45}
                                            width={45}
                                            onMouseEnter={() => {
                                                setInfo("Sep 2023 Badge");
                                            }}
                                            onMouseLeave={() => {
                                                setInfo("");
                                            }}
                                            alt="icon"
                                        ></Image>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
