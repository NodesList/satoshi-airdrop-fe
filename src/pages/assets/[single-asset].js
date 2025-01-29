import AssetRecord from "@/components/asset-record";
import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";

import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Assets() {
    const router = useRouter()

    const modalContainer = useRef(null)
    const depositModal = useRef(null)
    const withdrawModal = useRef(null)

    const [recordsTitle, setRecordsTitle] = useState('Financial Records')
    const [isRecords, setIsRecords] = useState(false)
    const [slug, setSlug] = useState(router.query.slug)

    const modalList = [modalContainer, depositModal, withdrawModal]

    const closeModal = () => {
        for (let i=0; i<modalList.length; i++) {
            modalList[i].current.classList.remove('flex')
            modalList[i].current.classList.add('hidden')
        }
    }

    const openModal = (modal) => {
        modalContainer.current.classList.remove('hidden')
        modalContainer.current.classList.add('flex')

        modal.current.classList.remove('hidden')
        modal.current.classList.add('flex')
    }

    return (
        <>
            <Bg />
            <div ref={ modalContainer } className="fixed bg-black/50 inset-0 z-10 hidden justify-center items-center p-8">
                <div ref={ withdrawModal } className="bg-memo-blue p-8 rounded-[28px] hidden items-center gap-4 flex-col">
                    <h2 className="font-semibold text-lg px-12 text-center">Please start the airdrop first</h2>
                    <button onClick={ closeModal } className="button-inset px-8 py-3 bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-full">Close</button>
                </div>

                <div ref={ depositModal } className="bg-memo-blue p-8 rounded-[28px] hidden items-center gap-4 flex-col">
                    <h2 className="font-semibold text-lg text-center">BTC deposits are temporarily unavailable</h2>
                    <button onClick={ closeModal } className="button-inset px-8 py-3 bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-full">Close</button>
                </div>
            </div>

            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <div className="flex justify-between items-center mt-6">
                    <button onClick={ () => router.back() } className="w-1/4"><svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg></button>
                    <section className="flex gap-2 items-center">
                        <Image src={"/images/download (1) 1.svg"} className="size-9" width={34} height={34} alt="logo" />
                        <h1 className="lalezar text-white font-semibold text-3xl text-nowrap mt-1">{ slug }BTC</h1>
                    </section>
                    <button className="text-right flex justify-end w-1/4"><Image src={"/images/Group 9.svg"} className="size-6 invisible" width={27} height={6} alt="" /></button>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center relative">
                    <div className="flex flex-col gap-2">
                        <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Balance</p>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">0.0000000000</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Available</p>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">0.0000000000</p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Frozen</p>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">0.0000000000</p>
                    </div>
                </div>


                {/**
                 * The following sections are conditionally rendered
                 */}

                <button onClick={ () => router.push('/assets/withdraw')}  className="button-inset flex items-center justify-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-2.5 rounded-full relative">
                    Link Withdraw address
                    <span className="bg-white inline-block px-3 py-1 rounded-full absolute right-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                    </span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                    <button onClick={ () => openModal(depositModal)} className="button-inset flex items-center justify-between gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-2.5 rounded-full relative">
                        <span className="inline-block truncate">Deposit</span>
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </button>
                    <button onClick={ () => openModal(withdrawModal) } className="button-inset flex items-center justify-between gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-2.5 rounded-full relative">
                        <span className="inline-block truncate">Withdraw</span>
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </button>
                </div>
                
                {/**
                 * End of first section
                 */}

                <div className="bg-[#000C2A] rounded-2xl p-8">
                    <h2 className="pb-6 border-b border-solid border-white/15 font-semibold text-center text-xl">{ recordsTitle }</h2>
                    { isRecords?
                        <p className="text-memo-text text-center text-xl py-20">No Records</p>:
                        <div className="flex flex-col gap-6 mt-4">
                            <AssetRecord title={"Airdrop"} time={"2024-09-21 09:08:25"} amount={"0.00001 BTC"} txStatus={"Successful"} />
                            <AssetRecord title={"Airdrop"} time={"2024-09-21 09:08:25"} amount={"0.00001 BTC"} txStatus={"Successful"} />
                            <AssetRecord title={"Airdrop"} time={"2024-09-21 09:08:25"} amount={"0.00001 BTC"} txStatus={"Successful"} />
                            <AssetRecord title={"Airdrop"} time={"2024-09-21 09:08:25"} amount={"0.00001 BTC"} txStatus={"Successful"} />
                        </div>
                    }
                </div>
            </div>


        </>
    )
}