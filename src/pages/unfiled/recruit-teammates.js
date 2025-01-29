import Bg from "@/components/bg";
import Footer from "@/components/footer";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import { useRef, useState } from "react";

export default function RecruitTeammates () {
    const modal = useRef(null)
    const [isTeammates, setIsTeammates] = useState(true)
    const level1 = useRef(null)
    const level2 = useRef(null)

    const closeModal = () => {
        modal.current.classList.toggle('flex')
        modal.current.classList.toggle('hidden')
    }

    const stateToggle = () => {
        level1.current.classList.toggle('bg-memo-color/40')
        level2.current.classList.toggle('bg-memo-color/40')

        level1.current.classList.toggle('bg-memo-color')
        level2.current.classList.toggle('bg-memo-color')
    }
    return (
        <>
            <Bg />
            <div className="relative flex flex-col gap-2 pb-32 pt-6">
                <section className="flex flex-col gap-2 p-6">
                    <div className="flex gap-2 justify-center">
                        <button className="bg-gradient-to-b from-memo-light-blue to-memo-blue rounded-lg p-2 ">Recruit Teammates</button>
                        <button className="bg-gradient-to-b from-memo-light-blue to-memo-blue rounded-lg p-2 "><Image src={"/images/mdi_chat-outline.svg"} width={24} height={24} alt="" /></button>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <button ref={ level1 } onClick={ stateToggle } className="bg-memo-color rounded-t-2xl rounded-b px-4 py-2 text-sm">Level 1 Teammates</button>
                        <button ref={ level2 } onClick={ stateToggle } className="bg-memo-color/40 rounded-t-2xl rounded-b px-4 py-2 text-sm">Level 2 Teammates</button>
                    </div>
                </section>

                {isTeammates?
                    <div>
                        <div className="grid grid-cols-4 w-full bg-memo-blue gap-4 px-4 text-center">
                            <p className="text-xs text-memo-text py-4 break-all">ID/Registration Time (2)</p>
                            <p className="text-xs text-memo-text py-4">Computing Power</p>
                            <p className="text-xs text-memo-text py-4">Project</p>
                            <p className="text-xs text-memo-text py-4">Status</p>
                        </div>
                        {/**To be iterated */}
                        <div className="grid grid-cols-4 items-center w-full gap-4 p-4 border-b border-solid border-white/10 text-memo-text">
                            <div className="flex gap-2 items-start w-full">
                                <Image src={"/images/iconamoon_profile-fill.svg"} width={18} height={18} alt="" />
                                <div className="flex flex-col gap-2 text-left w-full">
                                    <p className="text-memo-text font-semibold text-sm break-all truncate w-3/5">535***@qq.com</p>
                                    <p className="text-memo-text text-xs w-3/5">2024-06-14 19:50:49</p>
                                </div>
                            </div>
                            <div className="text-center font-semibold">0.00K</div>
                            <div className="text-center font-semibold">0</div>
                            <div className="text-center font-semibold">Not Started</div>
                        </div>
                        <div className="grid grid-cols-4 items-center w-full gap-4 p-4 border-b border-solid border-white/10 text-memo-text">
                            <div className="flex gap-2 items-start w-full">
                                <Image src={"/images/iconamoon_profile-fill.svg"} width={18} height={18} alt="" />
                                <div className="flex flex-col gap-2 text-left w-full">
                                    <p className="text-memo-text font-semibold text-sm break-all truncate w-3/5">535***@qq.com</p>
                                    <p className="text-memo-text text-xs w-3/5">2024-06-14 19:50:49</p>
                                </div>
                            </div>
                            <div className="text-center font-semibold">0.00K</div>
                            <div className="text-center font-semibold">0</div>
                            <div className="text-center font-semibold">Not Started</div>
                        </div>
                        {/**End of iteration */}
                        <p className="text-memo-text mt-16 font-semibold text-center">Total 1/1 page</p>
                    </div>:
                    <div className="mt-4">
                        <p className="p-8 border-y border-solid border-white/10 text-center text-memo-text text-sm">No teammates yet! Please recruit teammates first to manage your team!</p>

                        <div className="flex flex-col gap-16">
                            <h2 className="text-memo-text text-sm text-center font-bold mt-8">Steps to Manage Your Team:</h2>
                            <div className="flex flex-col items-center gap-4">
                                <Image src={"/images/Recruit Teammates.svg"} width={58} height={47} alt="" />
                                <p className="text-memo-text">Recruit Teammates</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <Image src={"/images/Group 74.svg"} width={56} height={56} alt="" />
                                <p className="text-memo-text">Increase Team Computing Power</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <Image src={"/images/Group 69.svg"} width={59} height={49} alt="" />
                                <p className="text-memo-text">Earn More Airdrops</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <Footer active={"earn"} />
        </>
    )
}