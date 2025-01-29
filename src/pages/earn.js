import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer, { JoinCommunity } from "@/components/footer";
import { Header1 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";



export default function Earn () {
    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header1 />
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-2xl">Quests</h1>
                    <p className="text-memo-text">Complete quests to boost hash power and maximize airdrop rewards.</p>
                </div>

                <div className="">
                    <div className="flex justify-between px-6 items-end">
                        <CurveText text={"Hash Limit"} />
                        <Link href={"/earn/earn-hash-power"} className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"/></svg></Link>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2">
                        <p className="text-white font-semibold text-xl">0 <span className="text-memo-text text-sm">Quests Completed</span></p>
                        <div className="h-2.5 bg-white/10 w-full rounded-2xl mt-2">
                            <div className="bg-fill bg-cover h-2.5 bg-no-repeat rounded-2xl w-1/2"></div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between px-6 items-end">
                        <CurveText text={"Bonus Hash Power"} />
                        <button className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-full p-2 rounded-md">Coming Soon</button>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2">
                        <p className="text-white font-semibold text-xl">1/3 <span className="text-memo-text text-sm">Quests Completed</span></p>
                        <div className="h-2.5 bg-white/10 w-full rounded-2xl mt-2">
                            <div className="bg-fill bg-cover h-2.5 bg-no-repeat rounded-2xl w-1/2"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-2xl">Reward Cards</h1>
                    <p className="text-memo-text">Leverage Hash cards and gift cards to team up with other and supercharge your hash power.</p>
                </div>

                <div className="">
                    <div className="flex justify-between px-6 items-end w-full">
                        <CurveText text={"Hash Card"} />
                        <Link href={"/earn/reward-cards"} className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"/></svg></Link>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2">
                        <p className="font-semibold text-base text-memo-text">Boost Your Hash Power</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between px-6 items-end w-full">
                        <CurveText text={"Gift Card"} />
                        <button className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"/></svg></button>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-2">
                        <p className="font-semibold text-base text-memo-text">Boost Your Hash Power</p>
                    </div>
                </div>

                <JoinCommunity />
            </div>

            <Footer active={"earn"} />
        </>
    )
}