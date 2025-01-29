import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer, { JoinCommunity } from "@/components/footer";
import { Header1 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";



export default function Airdrop () {
    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header1 />

                <div className="grid grid-cols-2 bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl">
                    <div className="pr-4 border-r-[0.5px] border-solid border-white flex items-center justify-between gap-2">
                        <p className="text-memo-text text-sm">Total Tokens Claimed</p>
                        <p className="text-xl font-bold">70.8 <span className="text-memo-light-blue">B</span></p>
                    </div>
                    <div className="pl-4 border-l-[0.5px] border-solid border-white flex items-center justify-between gap-0">
                        <p className="text-memo-text text-sm">Total Value Airdropped</p>
                        <p className="text-xl font-bold">$320 <span className="text-memo-light-blue">M</span></p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-[#001D64]/25 border border-solid border-memo-blue p-8 rounded-xl items-center text-center">
                    <h2 className="text-white text-xl font-semibold">Start earning rewards today</h2>
                    <p className="text-memo-text text-sm">The bigger your team, the higher your Battle team Hash Power, boosting your airdrop rewards.</p>
                    <Link href={"/airdrop/start-airdrop"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2.5 rounded-full">
                        Get Started
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </Link>
                </div>

                <div className="">
                    <h2 className="text-2xl font-semibold">My Dashboard</h2>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <CurveText text={"My Hash"} />
                            <p className="g-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-xl text-nowrap text-center">100.0 <span className="text-memo-light-blue">K</span></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CurveText text={"My Team"} />
                            <p className="g-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-xl text-nowrap text-center text-memo-bg">.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CurveText text={"Daily Check-in"} />
                            <p className="g-[#001D64]/25 border border-solid border-memo-blue py-8 px-2 rounded-xl font-semibold text-xl text-nowrap text-center truncate">Coming soon</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-4 bg-[#001D64]/25 border border-solid border-memo-blue p-8 rounded-xl items-center text-center">
                    <h2 className="text-white text-xl font-semibold">Boost your hash power for more rewards</h2>
                    <p className="text-memo-text text-sm">Complete quests to increase your hash power in Just a few clicks</p>
                    <Link href={"/project"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2.5 rounded-full">
                        Boost Your Hash Now
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </Link>
                </div>

                <JoinCommunity />
            </div>

            <Footer active={"airdrop"} />
        </>
    )
}