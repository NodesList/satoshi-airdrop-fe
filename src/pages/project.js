import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer from "@/components/footer";
import { Header1 } from "@/components/headers";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";



export default function Project () {
    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header1 />

                <div className="flex flex-col gap-4">
                    <ProjectCard image={"WhatsApp Image 2025-01-17 at 12.04.17 PM (1) 1.png"} title={"Akka"} text={"Akka, an AI-powered liquidity aggregator, delivers optimized, low-slippage trades in DeFi."} totalRounds={"1.46K"} totalReward={"8M"} link={"Akka"} />
                    <ProjectCard image={"WhatsApp Image 2025-01-17 at 12.04.17 PM (1) 2.png"} title={"Haven1"} text={"Haven1 is the REKT-Resistant EVM L ! Blockchain Designed to prevent onchain scams, hacks, and ru."} totalRounds={"1.13K"} totalReward={"12M"} link={"Akka"} />
                </div>

            </div>
            <Footer active={"project"} />
        </>
    )
}