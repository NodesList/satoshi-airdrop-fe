import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRef, useState } from "react";

export function AirdropBlockFreeAirdrop ({ action }) {
    const [isAirdrop, setIsAirdrop] = useState(true)

    return (
        <div className="px-6">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    { !isAirdrop? <p className="text-white font-semibold">Airdrop Participated</p>: null }
                    <p className="text-memo-text">#14632 / 09-20 08:00</p>
                    <p className="text-memo-text text-sm">Participated in 0 projects</p>
                </div>
                <div className=""><Image src={"/images/ion_hourglass-outline.svg"} width={54} height={54} alt="" /></div>
            </div>
                    
            { isAirdrop?
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-memo-color/30 border border-solid border-memo-color p-4 rounded-xl flex justify-between">
                    <div className="flex items-start gap-2">
                        <Image src={"/images/download (1) 1.svg"} className="size-9" width={28} height={28} alt="" />
                        <p className="text-sm text-memo-text">100 M / 1 BTC</p>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                        <p className="text-white font-semibold">0.01010101 BTC</p>
                        <p className="text-memo-text text-sm ">Computing Power [Mine: 100K / Team: 500K / Project: 200K]</p>
                    </div>
                </div>
                <div className="bg-memo-color/30 border border-solid border-memo-color p-4 rounded-xl flex justify-between">
                    <div className="flex items-start gap-2">
                        <Image src={"/images/download (1) 1.svg"} className="size-9" width={28} height={28} alt="" />
                        <p className="text-sm text-memo-text">200 M / 10 ETH</p>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                        <p className="text-white font-semibold">0.02020202 ETH</p>
                        <p className="text-memo-text text-sm ">Computing Power [Mine: 100K / Team: 500K / Project: 200K]</p>
                    </div>
                </div>

                <div className="bg-memo-color/30 border border-solid border-memo-color p-4 rounded-xl flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image src={"/images/Group 69.svg"} className="w-9" width={34} height={36} alt="" />
                        <p className="text-sm text-memo-text">0.00 M / 000</p>
                    </div>
                    <p className="italic text-sm text-memo-color font-semibold">Add Project</p>
                </div>

                <div className="flex flex-col gap-2 text-center mt-12">
                    <h3 className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-lg font-semibold bg-clip-text text-transparent">MEMO APP</h3>
                    <p className="font-semibold text-white">No.1 Global Free Airdrop Platform</p>
                    <button onClick={ action } className="bg-memo-color shadow-lg rounded-xl w-fit mx-auto mt-4">
                        <Image src={"/images/QR_code_for_mobile_English_Wikipedia 1.png"} width={120} height={120} alt="" />
                    </button>
                    <p className="text-sm text-white px-12 mt-4">Long press the image Identify the QR code to start airdropping</p>
                </div>
            </div>:

            <div className="mt-12 flex flex-col gap-6 items-center">
                <Image src={"/images/Group 3 1.png"} className="p-6 bg-memo-blue rounded-full size-36 mx-auto" width={98} height={115} alt="" />
                <Link href={"/airdrop/free-airdrop"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-2.5 rounded-full">
                    Start Airdrop
                    <span className="bg-white inline-block px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                    </span>
                </Link>
            </div>}
        </div>
    )
}

export function HashCardBlockFreeAirdrop ({ action }) {
    const router = useRouter()
    const [isAirdrop, setIsAirdrop] = useState(true)

    return (
        <div className="pb-12 relative z-10">
            <div className="px-6 py-2 bg-memo-blue/30 flex justify-between gap-4 text-memo-text text-sm">
                <p className="w-2/3">You can give the gift cards to others to use Both parties can increase hash</p>
                <button onClick={ () =>  router.refresh() } className="">Refresh</button>
            </div>

            <div className="p-6 flex justify-between gap-4 text-memo-text text-sm">
                <p className="w-2/3">(Please send the usage code below to others for use)</p>
                <button className="w-32 text-white px-2 py-1 font-semibold bg-gradient-to-b from-memo-light-blue to-memo-blue rounded">Use someone else&apos;s Gift Card</button>
            </div>

            <div className="p-6 mx-6 bg-memo-blue/30 border border-solid border-memo-blue rounded-xl">
                <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                    <div className="flex flex-col gap-2 w-fit">
                        <p className="text-white font-semibold">You have initiated the exchange of 4 computing power cards</p>
                        <p className="text-memo-text">Exchange Code 7nfhgón</p>
                    </div>
                    <div className="flex gap-2 flex-wrap w-fit h-fit justify-end">
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded-xl text-white text-sm">Cancel Exchange</button>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded-xl text-white text-sm">Copy</button>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded-xl text-white text-sm">Poster</button>
                        <p className="text-memo-text text-[10px]">Share with other users</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                        <p className="bg-memo-text text-white rounded-full size-5 min-w-5 flex items-center justify-center font-medium text-xs">1</p>
                        <div className="text-memo-text">
                            <p>Initiator&apos;s own</p>
                            <p className="text-xs">Power Card [Beetle Card/Hash 1K/Stacking Amplification 5%]</p>
                        </div>
                        <p className="text-memo-text w-fit text-nowrap">Your Hash <span className="text-white font-bold text-lg">1.05</span> k</p>
                    </div>

                    <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                        <p className="bg-memo-text text-white rounded-full size-5 min-w-5 flex items-center justify-center font-medium text-xs">2</p>
                        <p className="text-memo-text">Waiting for participation</p>
                    </div>
                    <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                        <p className="bg-memo-text text-white rounded-full size-5 min-w-5 flex items-center justify-center font-medium text-xs">3</p>
                        <p className="text-memo-text">Waiting for participation</p>
                    </div>
                </div>
            </div>

            <div className="py-6 mx-6 bg-memo-blue/30 border border-solid border-memo-blue rounded-xl mt-4">
                <div className="flex justify-between items-center mx-6 pb-5 border-b border-solid border-white/10">
                    <h2 className="text-memo-text">Hash Card</h2>
                    <div className="w-fit flex gap-2">
                        <button className="bg-memo-color/30 px-3 py-1.5 rounded-md text-sm">Initiate</button>
                        <button className="bg-memo-color/30 px-3 py-1.5 rounded-md text-sm">Participation</button>
                    </div>
                </div>
                <div className="flex justify-center items-center px-6 pt-4 mt-4 border-t border-solid border-white/10 w-full mx-auto gap-4">
                    <p className="text-memo-text w-fit">Your Hash <span className="text-white font-bold text-lg">2</span>k</p>
                    <p className="text-memo-text w-fit">Users Hash <span className="text-white font-bold text-lg">5</span>%</p>
                </div>

            </div>
        </div>
    )
}

export function GiftCardBlockFreeAirdrop ({ action }) {
    const router = useRouter()
    const [isAirdrop, setIsAirdrop] = useState(true)

    return (
        <div className="pb-12 relative z-10">
            <div className="px-6 py-2 bg-memo-blue/30 flex justify-between gap-4 text-memo-text text-sm">
                <p className="w-2/3">You can give the gift cards to others to use Both parties can increase hash</p>
                <button onClick={ () =>  router.refresh() } className="">Refresh</button>
            </div>
            <div className="p-6 flex justify-between gap-4 text-memo-text text-sm">
                <p className="w-2/3">(Please send the usage code below to others for use)</p>
                <button className="w-32 text-white px-2 py-1 font-semibold bg-gradient-to-b from-memo-light-blue to-memo-blue rounded">Use someone else&apos;s Gift Card</button>
            </div>

            { /** Repeat Code */ }
            <div className="p-6 mx-6 bg-memo-blue/30 border border-solid border-memo-blue rounded-xl">
                <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                    <p className="text-memo-text text-base text-nowrap">Gift Card</p>
                    <div className="flex gap-2 w-fit h-fit justify-end">
                        <p className="text-memo-text text-sm text-center">Usage Code 5xqqetm</p>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded text-white text-sm">Copy</button>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded text-white text-sm">Poster</button>
                    </div>
                </div>

                <div className="flex justify-center items-center px-6 pt-4 w-full mx-auto gap-4">
                    <p className="text-memo-text w-fit">Your Hash <span className="text-white font-bold text-lg">1</span>k</p>
                    <p className="text-memo-text w-fit">Users Hash <span className="text-white font-bold text-lg">30</span>k</p>
                </div>
            </div>
            <div className="p-6 mx-6 bg-memo-blue/30 border border-solid border-memo-blue rounded-xl">
                <div className="flex gap-4 border-b border-solid border-white/10 pb-4">
                    <p className="text-memo-text text-base text-nowrap">Gift Card</p>
                    <div className="flex gap-2 w-fit h-fit justify-end">
                        <p className="text-memo-text text-sm text-center">Usage Code 5xqqetm</p>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded text-white text-sm">Copy</button>
                        <button className="bg-memo-color/30 h-fit px-2 py-1 rounded text-white text-sm">Poster</button>
                    </div>
                </div>

                <div className="flex justify-center items-center px-6 pt-4 w-full mx-auto gap-4">
                    <p className="text-memo-text w-fit">Your Hash <span className="text-white font-bold text-lg">1</span>k</p>
                    <p className="text-memo-text w-fit">Users Hash <span className="text-white font-bold text-lg">30</span>k</p>
                </div>
            </div>
            { /** End of Repeat Code */ }

        </div>
    )
}