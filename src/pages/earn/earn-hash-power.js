import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer, { JoinCommunity } from "@/components/footer";
import { Header2 } from "@/components/headers";
import OtherProjectsBox from "@/components/other-projects-box";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Router, { useRouter } from "next/router";
import EarnHashPowerCard from "@/components/earn-hash-power-card";


export default function EarnHashPower () {
    const router = useRouter()
    const backFunc = () => router.back()

    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-4 pb-12">
                <Header2 title={"Earn Hash Power"} backFunc={ backFunc } />

                <div className="mt-4">
                    <p className="text-memo-color">Complete Your current tasks to boost your Hash Power and unlock the next level.</p>

                    <div className="grid grid-cols-3 gap-4 mt-4 items-center relative">
                        <div className="flex flex-col gap-2">
                            <CurveText text={"My Hash Power"} />
                            <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl font-semibold text-sm text-nowrap text-center text-white">0.0 k</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CurveText text={"Quest Completion"} />
                            <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-8 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">0/3 <span className="text-memo-text text-[10px]">Completed</span></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <CurveText text={"Total Reward"} />
                            <div className="flex w-full bg-[#001D64]/25 border border-solid border-memo-blue py-8 rounded-xl justify-center items-center px-2">
                                <p className="font-semibold text-sm text-center text-white">270 <span className="text-memo-text">K</span></p>
                                <p className="font-semibold text-sm text-center text-memo-text">Hash Power</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <EarnHashPowerCard hashPrice={"150k"} title={"Refer 3 friends"} description={"Invite friends with your referral link."} link={"#"} />
                <EarnHashPowerCard hashPrice={"150k"} title={"Join Airdrop Project"} description={"Secure tokens with great potential."} link={"#"} />
                <EarnHashPowerCard hashPrice={"10k"} title={"Build Battle Team"} description={"Maximize rewards with your team"} link={"/earn/earn-hash-power/team"} />

                <div className="bg-memo-blue/30 border border-solid border-memo-blue rounded-2xl p-4 flex flex-col gap-4">
                    <h2 className="text-white font-semibold">Complete all quests to earn an additional reward of 100K hash Power</h2>
                    <p className="text-memo-text text-sm">Boost your hash power to earn more!</p>
                    <Link href={"#"} className="button-inset bg-gradient-to-br from-memo-light-blue to-memo-blue p-3 rounded-3xl text-center">Unlock Rewards Now</Link>
                </div>

                <JoinCommunity />
            </div>
        </>
    )
}