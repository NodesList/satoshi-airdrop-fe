import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer from "@/components/footer";
import { Header2 } from "@/components/headers";
import OtherProjectsBox from "@/components/other-projects-box";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";



export default function ProjectDetailed () {
    const router = useRouter()

    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 200; // Set scroll amount
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else if (direction === 'right') {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-4 pb-12">
                <Header2 title={"Project Details"} />

                <div className="">
                    <div className="flex justify-between px-6 items-end">
                        <CurveText text={"Dec-Dec 2024"} />
                        <button className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md p-1"><svg className="size-6 rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg></button>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2 flex flex-col gap-2">
                        <Image src={`/images/WhatsApp Image 2025-01-17 at 12.04.17 PM (1) 1.png`} className="rounded-lg" width={348} height={116} alt="" />
                        <h2 className="font-semibold text-white text-xl">Akka</h2>
                        <p className="text-memo-text text-sm">Akka, an AI-powered liquidity aggregator, delivers optimized, low-slippage trades in DeFi.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#001D6444] border border-solid border-memo-blue p-4 rounded-xl">
                                <p className="mb-2">Total Rounds</p>
                                <p className="font-bold">1.46K</p>
                            </div>
                            <div className="bg-[#001D6444] border border-solid border-memo-blue p-4 rounded-xl">
                                <p className="mb-2">Total Reward</p>
                                <p className="font-bold">8M</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 items-center relative">
                    <div className="flex flex-col gap-2">
                        <CurveText text={"Hash Limit"} />
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-xl text-nowrap text-center text-white">100.0 <span className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-transparent bg-clip-text">K</span></p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CurveText text={"Total Hash Limit"} />
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 px-2 rounded-xl font-semibold text-xl text-nowrap text-center truncate">0</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CurveText text={"My Hash"} />
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-xl text-nowrap text-center text-white">100.0 <span className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-transparent bg-clip-text">K</span></p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <CurveText text={"Participant Limit"} />
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-xl text-nowrap text-center text-white">Unlimited</p>
                    </div>
                    
                    <Link href={`/project/`} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2 rounded-full w-fit mx-auto mt-4 h-fit absolute right-0 bottom-[13%]">
                        Increase Hash
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </Link> 
                </div>

                <div className="mt-6">
                    <h2 className="text-white text-2xl font-semibold mb-4">About This Project</h2>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2 flex flex-col gap-4">
                        <h3 className="font-semibold">What is Aka</h3>
                        <p className="text-sm text-memo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h2 className="text-white text-2xl font-semibold">Other Projects</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={ () => scroll('left')} className="bg-white rounded-3xl px-4 py-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg></button>
                            <button onClick={ () => scroll('right')} className="bg-white rounded-3xl px-4 py-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg></button>
                        </div>
                    </div>

                    <div ref={ scrollRef } className="flex gap-4 flex-nowrap overflow-x-auto">
                        <OtherProjectsBox />
                        <OtherProjectsBox />
                        <OtherProjectsBox />
                        <OtherProjectsBox />
                        <OtherProjectsBox />
                        <OtherProjectsBox />
                    </div>
                </div>
            </div>
        </>
    )
}