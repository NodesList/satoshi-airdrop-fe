import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import Footer from "@/components/footer";
import { Header1 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";



export default function Quote () {
    const Optional = useRef(null)
    const Coins = useRef(null)
    const Derivatives = useRef(null)
    const Ranking = useRef(null)
    const New = useRef(null)
    const optionsList = [Optional, Coins, Derivatives, Ranking, New]

    const switchOptions = (option) => {
        for (let i=0; i<optionsList.length; i++) {
            optionsList[i].current.classList.remove('p-2.5')
            optionsList[i].current.classList.remove('bg-none')
            optionsList[i].current.classList.add('p-2')
            optionsList[i].current.classList.add('py-1.5')
        }
        option.current.classList.remove('p-2')
        option.current.classList.remove('py-1.5')
        option.current.classList.add('p-2.5')
        option.current.classList.add('bg-none')
    }

    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header1 />

                <div className="grid grid-cols-5 gap-2 pb-2 border-b border-solid border-white/10 items-end">
                    <p onClick={ () => switchOptions(Optional) } ref={ Optional } className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-sm p-2 py-1.5 bg-memo-color rounded-t-2xl rounded-b text-center truncate h-fit">Optional</p>
                    <p onClick={ () => switchOptions(Coins) } ref={ Coins } className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-sm p-2 py-1.5 bg-memo-color rounded-t-2xl rounded-b text-center truncate h-fit">Coins</p>
                    <p onClick={ () => switchOptions(Derivatives) } ref={ Derivatives } className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-sm p-2 py-1.5 bg-memo-color rounded-t-2xl rounded-b text-center truncate h-fit">Derivatives</p>
                    <p onClick={ () => switchOptions(Ranking) } ref={ Ranking } className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-sm p-2 py-1.5 bg-memo-color rounded-t-2xl rounded-b text-center truncate h-fit">Ranking</p>
                    <p onClick={ () => switchOptions(New) } ref={ New } className="bg-gradient-to-b from-memo-color to-memo-blue-2 text-sm p-2 py-1.5 bg-memo-color rounded-t-2xl rounded-b text-center truncate h-fit">New</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl text-center text-white">
                        <h2 className="font-semibold text-sm pb-2 mb-2 border-b-2 border-dashed border-white/10">MEMO Index</h2>
                        <p className="font-semibold text-memo-color">23647.15</p>
                        <p className="font-semibold mt-4">+699.96 +3.05%</p>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl text-center text-white">
                        <h2 className="font-semibold text-sm pb-2 mb-2 border-b-2 border-dashed border-white/10">MEMO Index</h2>
                        <p className="font-semibold text-memo-color">23647.15</p>
                        <p className="font-semibold mt-4">+699.96 +3.05%</p>
                    </div>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl text-center text-white">
                        <h2 className="font-semibold text-sm pb-2 mb-2 border-b-2 border-dashed border-white/10">MEMO Index</h2>
                        <p className="font-semibold text-memo-color">23647.15</p>
                        <p className="font-semibold mt-4">+699.96 +3.05%</p>
                    </div>
                </div>
                {/**
                 * Add slide graph (See design)
                 */}
                 
                <div className="">
                    <div className="bg-[#001D64]/30 border border-solid border-memo-blue p-4 rounded-lg text-center text-white flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <Image src={"/images/download (1) 1.svg"} className="size-9" width={28} height={28} alt="" />
                            <div className="flex flex-col justify-between items-start">
                                <p className="text-white text">BTC<span className="text-memo-text text-sm">/USDT</span></p>
                                <p className="text-memo-text text-sm">Bitcoin</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <p className="text-memo-text font-bold text-sm">102034.05</p>
                            <p className="text-memo-color-2 italic text-sm">+2.05%</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer active={"quote"} />
        </>
    )
}