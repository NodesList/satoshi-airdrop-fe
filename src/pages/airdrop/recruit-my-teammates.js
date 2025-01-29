import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import { useRef } from "react";

export default function RecruitMyTeammates () {
    const modal = useRef(null)

    const modalToggle = () => {
        modal.current.classList.toggle('flex')
        modal.current.classList.toggle('hidden')
    }

    return (
        <>
            <Bg />
            <div ref={modal} className="fixed inset-0 bg-black/90 p-6 hidden flex-col justify-center items-center z-10">
                <div className="w-full bg-memo-blue rounded-[28px] p-8 flex flex-col gap-8 text-center">
                    <p className="font-semibold text-center">Free airdrop platform, a must-have tool for the crypto world</p>
                    <Image src={"/images/QR_code_for_mobile_English_Wikipedia 1.png"} className="mx-auto shadow-xl" width={120} height={120} alt="" />
                    <p className="-mt-2">Long press the image to recognize the QR code and start the airdrop.</p>
                    <p className="text-[#C80C0C] text-sm font-normal -mt-2">Violators will have their accounts banned and assets frozen!</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-4 mt-4">
                    <button onClick={ modalToggle } className="bg-[#006ABC]/30 border border-solid border-memo-blue p-4 rounded-full">Cancel</button>
                    <button className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue text-white p-4 rounded-full">Save</button>
                </div>
            </div>

            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header2 title={"Recruit My Teammates"} />

                <p className="text-memo-color">Managing a team requires recruiting teammates. The more teammates you have, the greater the boost to your team&apos;s computing power.</p>
                <p className="text-memo-color">(Personal Computing Power + Team Computing Power + Project Computing Power = Total Computing Power for Participating in Airdrops)</p>

                <div className="">
                    <h2 className="lalezar text-lg mb-2">[Level 1 Teammates]</h2>
                    <p className="text-white text-sm leading-snug">Teammates you directly recruit will contribute 20% of their effective computing power to your team&apos;s computing power.</p>
                </div>
                <div className="">
                    <h2 className="lalezar text-lg mb-2">[Level 2 Teammates]</h2>
                    <p className="text-white text-sm leading-snug">Teammates recruited by your Level 1 teammates will contribute 10% of their effective computing power to your team&apso;s computing power.</p>
                </div>

                <p className="text-white text-sm"><span className="font-black text-memo-color">Note: </span>Effective computing power of teammates refers to the power actively engaged in airdrops. If they are not participating or have stopped, their effective computing power becomes 0.)<br />(Teammates contribute computing power to the team, but their own computing power remains unaffected.</p>

                <div className="flex flex-col gap-4">
                    <h2 className="bg-gradient-to-b from-memo-color to-memo-blue-2 bg-clip-text text-transparent font-bold">Recruit Teammates URL:</h2>
                    <div className="flex gap-2 items-center bg-memo-blue px-4 py-3 w-fit text-sm rounded-xl">
                        https://invite.memoiapp.xyz/9rhwo0
                        <button className=""><Image src={"/images/iconoir_copy.svg"} width={22} height={22} alt="" /></button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="bg-gradient-to-b from-memo-color to-memo-blue-2 bg-clip-text text-transparent font-bold">Recruit Teammates URL:</h2>
                    <button onClick={ modalToggle } className="bg-memo-blue px-4 py-3 w-fit text-sm rounded-xl">Recruitment Poster</button>
                    <p className="text-white text-sm">(Users who register via the recruitment URL or poster will become your teammates.)</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="bg-gradient-to-b from-memo-color to-memo-blue-2 bg-clip-text text-transparent font-bold">Recruitment Notes:</h2>
                    <p className="text-white text-sm">To ensure fairness and protect the rights of regular users during the airdrop process, all cheating behavior is strictly prohibited. Violators will be severely dealt with!
                    The system will conduct irregular, multidimensional, intelligent anti-cheating audits for all users. Cheating will result in the invalidation of accounts and assets!</p>
                </div>
            </div>
        </>
    )
}