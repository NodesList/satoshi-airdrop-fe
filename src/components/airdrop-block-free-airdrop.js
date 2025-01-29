import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";

export function AirdropBlockFreeAirdrop ({ action }) {
    const [isAirdrop, setIsAirdrop] = useState(true)

    return (
        <div className="">
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