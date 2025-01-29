import { AirdropBlockFreeAirdrop, GiftCardBlockFreeAirdrop, HashCardBlockFreeAirdrop } from "@/components/free-airdrop-block";
import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function FreeAirdrop () {
    const router = useRouter()
    const modal = useRef(null)

    const airdropButton = useRef(null)
    const giveawayButton = useRef(null)
    const hashCardButton = useRef(null)
    const giftCardButton = useRef(null)


    const buttonList = [airdropButton, giveawayButton, hashCardButton, giftCardButton]
    const [active, setActive] = useState('airdrop');

    const toggleButtonOff = () => {
        for (let i=0; i<buttonList.length;i++) {
            buttonList[i].current.classList.remove('bg-memo-color')
            buttonList[i].current.classList.remove('bg-memo-color/40')
            buttonList[i].current.classList.add('bg-memo-color/40')
        }
    }

    const airdropClick = () => {
        toggleButtonOff()

        airdropButton.current.classList.remove('bg-memo-color/40')
        airdropButton.current.classList.add('bg-memo-color')
        setActive('airdrop')
    }

    const giveawayClick = () => {
        toggleButtonOff()
        giveawayButton.current.classList.remove('bg-memo-color/40')
        giveawayButton.current.classList.add('bg-memo-color')
        setActive('giveaway')
    }

    const hashCardClick = () => {
        toggleButtonOff()

        hashCardButton.current.classList.remove('bg-memo-color/40')
        hashCardButton.current.classList.add('bg-memo-color')
        setActive('hashcard')
    }

    const giftCardClick = () => {
        toggleButtonOff()
        giftCardButton.current.classList.remove('bg-memo-color/40')
        giftCardButton.current.classList.add('bg-memo-color')
        setActive('giftcard')
    }
    
    const toggleReferModal = () => {
        modal.current.classList.toggle('flex');
        modal.current.classList.toggle('hidden');
    }

    return (
        <>
            <Bg />
            <div ref={modal} className="fixed inset-0 bg-black/50 z-10 hidden justify-center items-center px-6">
                <div onClick={ toggleReferModal } className="fixed inset-0"></div>
                <div className="bg-memo-blue p-6 rounded-[28px] w-full flex flex-col gap-4 relative z-10">
                    <h2 className="font-semibold text-white text-lg">Steps to Recruit Teammates</h2>
                    <ol className="text-memo-text flex flex-col gap-4 list-decimal list-inside">
                        <li>Take a screenshot of the [Share Page] on your phone and save it to your album.</li>
                        <li>Then send the screenshot from your album to friends on WeChat, QQ, or Weibo.</li>
                    </ol>
                    <div className="w-full flex justify-end">
                        <Link href={"/airdrop/recruit-my-teammates"} className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue px-8 py-2.5 rounded-[47px]">I Got It</Link>
                    </div>
                </div>
            </div>

            <div className="relative px-6 flex flex-col gap-6 pb-2 py-8">
                <nav className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <button onClick={ () => router.back() } className="w-1/4"><svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg></button>
                        <h1 className="lalezar text-shadow-blue text-3xl text-nowrap relative top-0.5">Free Airdrop</h1>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button className="font-semibold text-xs bg-gradient-to-b from-memo-light-blue to-blue border border-solid border-memo-blue p-2 rounded-lg w-1/2">Increase Income</button>
                        <button className="font-semibold text-xs bg-gradient-to-b from-memo-light-blue to-blue border border-solid border-memo-blue p-2 rounded-lg">Rules</button>
                    </div>
                </nav>

                <div className="bg-memo-color/30 border border-solid border-memo-color rounded-2xl p-4 grid grid-cols-2 gap-2">
                    <p className="text-memo-text text-sm">No of Airdrop Coins</p>
                    <p className="text-memo-text text-sm text-right">No of Claims</p>

                    <p className="text-white font-semibold">85,002,230,204</p>
                    <p className="text-white font-semibold text-right">3.94 Bm</p>
                </div>

                <div className="bg-[#000C2A] p-4 rounded-2xl flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-2 border-b border-solid border-white/10 pb-4">
                        <h3 className="text-sm text-memo-text">My Hash</h3>
                        <h3 className="text-sm text-memo-text text-center">My Hash</h3>
                        <h3 className="text-sm text-memo-text text-right">Airdrop Time</h3>

                        <p className="text-white font-semibold">1.08 <span className="text-memo-color text-xs">M</span></p>
                        <p className="text-white font-semibold text-center flex gap-2 justify-center">94<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 12.6875C7.99846 12.689 8.97955 12.4263 9.84375 11.9263V10.0625C9.84375 9.54035 9.63633 9.0396 9.26712 8.67038C8.8979 8.30117 8.39715 8.09375 7.875 8.09375H6.125C5.60286 8.09375 5.1021 8.30117 4.73288 8.67038C4.36367 9.0396 4.15625 9.54035 4.15625 10.0625V11.9263C5.02045 12.4263 6.00154 12.689 7 12.6875ZM11.1562 10.0625V10.8824C11.9129 10.0724 12.4163 9.05899 12.6047 7.96672C12.7931 6.87446 12.6583 5.75095 12.2168 4.7343C11.7752 3.71764 11.0462 2.85216 10.1194 2.24424C9.19263 1.63632 8.10839 1.31245 7 1.31245C5.89161 1.31245 4.80737 1.63632 3.88056 2.24424C2.95376 2.85216 2.22479 3.71764 1.78325 4.7343C1.34171 5.75095 1.20686 6.87446 1.39527 7.96672C1.58368 9.05899 2.08713 10.0724 2.84375 10.8824V10.0625C2.84349 9.38596 3.05236 8.72587 3.44176 8.17263C3.83116 7.61939 4.38205 7.20004 5.019 6.972C4.68859 6.59196 4.47447 6.12489 4.40218 5.62651C4.3299 5.12813 4.40249 4.61948 4.61132 4.16122C4.82014 3.70297 5.15637 3.31445 5.57991 3.04201C6.00344 2.76957 6.49641 2.62472 7 2.62472C7.50359 2.62472 7.99656 2.76957 8.42009 3.04201C8.84363 3.31445 9.17986 3.70297 9.38868 4.16122C9.59751 4.61948 9.6701 5.12813 9.59782 5.62651C9.52553 6.12489 9.31141 6.59196 8.981 6.972C9.61795 7.20004 10.1688 7.61939 10.5582 8.17263C10.9476 8.72587 11.1565 9.38596 11.1562 10.0625ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM8.3125 5.25C8.3125 5.5981 8.17422 5.93194 7.92808 6.17808C7.68194 6.42422 7.3481 6.5625 7 6.5625C6.6519 6.5625 6.31806 6.42422 6.07192 6.17808C5.82578 5.93194 5.6875 5.5981 5.6875 5.25C5.6875 4.9019 5.82578 4.56806 6.07192 4.32192C6.31806 4.07578 6.6519 3.9375 7 3.9375C7.3481 3.9375 7.68194 4.07578 7.92808 4.32192C8.17422 4.56806 8.3125 4.9019 8.3125 5.25Z" fill="#6C6C6C"/>
                            </svg>
                        </p>
                        <p className="text-white font-semibold text-right">09:50 </p>
                    </div>

                    <div className="grid grid-cols-3 gap-12 border-b border-solid border-white/10 pb-4">
                        <div className="flex gap-3 items-center">
                            <Image src={"/images/download (1) 1.svg"} className="size-9" width={28} height={28} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-memo-text text-sm">BTC</p>
                                <p className="text-white text-xs font-semibold truncate w-12">0.00000000</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={"/images/download (1) 3.svg"} className="size-9" width={28} height={28} alt="" />
                            <div className="flex flex-col gap-1">
                                <p className="text-memo-text text-sm">BTC</p>
                                <p className="text-white text-xs font-semibold truncate w-12">0.00000000</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <svg className="text-right" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.9249 14.007C36.8257 14.0012 36.7201 13.9988 36.6081 14H32.1894C28.5704 14 25.4746 16.849 25.4746 20.5625C25.4746 24.276 28.5721 27.125 32.1894 27.125H36.6081C36.7201 27.1262 36.8263 27.1238 36.9266 27.118C37.6704 27.0731 38.3725 26.7594 38.9022 26.2353C39.4318 25.7111 39.7528 25.0123 39.8054 24.269C39.8124 24.164 39.8124 24.0502 39.8124 23.9452V17.1797C39.8124 17.0747 39.8124 16.961 39.8054 16.856C39.7528 16.1127 39.4318 15.4139 38.9022 14.8897C38.3725 14.3656 37.6687 14.0518 36.9249 14.007ZM31.8026 22.3125C32.7336 22.3125 33.4879 21.5285 33.4879 20.5625C33.4879 19.5965 32.7336 18.8125 31.8026 18.8125C30.8699 18.8125 30.1156 19.5965 30.1156 20.5625C30.1156 21.5285 30.8699 22.3125 31.8026 22.3125Z" fill="#0098F1"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.6065 29.75C36.667 29.7476 36.7272 29.7594 36.7823 29.7847C36.8373 29.8099 36.8857 29.8477 36.9233 29.8951C36.961 29.9425 36.987 29.9981 36.9991 30.0574C37.0113 30.1168 37.0093 30.1781 36.9932 30.2365C36.6432 31.4825 36.085 32.5465 35.1907 33.439C33.88 34.7515 32.2192 35.3307 30.1683 35.6073C28.1733 35.875 25.627 35.875 22.4105 35.875H18.7145C15.498 35.875 12.95 35.875 10.9568 35.6073C8.90575 35.3307 7.245 34.7497 5.93425 33.4407C4.62525 32.13 4.04425 30.4692 3.76775 28.4183C3.5 26.4233 3.5 23.877 3.5 20.6605V20.4645C3.5 17.248 3.5 14.7 3.76775 12.705C4.04425 10.654 4.62525 8.99325 5.93425 7.6825C7.245 6.3735 8.90575 5.7925 10.9568 5.516C12.9517 5.25 15.498 5.25 18.7145 5.25H22.4105C25.627 5.25 28.175 5.25 30.1683 5.51775C32.2192 5.79425 33.88 6.37525 35.1907 7.68425C36.085 8.58025 36.6432 9.6425 36.9932 10.8885C37.0093 10.9469 37.0113 11.0082 36.9991 11.0676C36.987 11.1269 36.961 11.1825 36.9233 11.2299C36.8857 11.2773 36.8373 11.3151 36.7823 11.3403C36.7272 11.3656 36.667 11.3774 36.6065 11.375H32.1895C27.2247 11.375 22.8498 15.295 22.8498 20.5625C22.8498 25.83 27.2247 29.75 32.1895 29.75H36.6065ZM10.0625 12.25C9.7144 12.25 9.38056 12.3883 9.13442 12.6344C8.88828 12.8806 8.75 13.2144 8.75 13.5625C8.75 13.9106 8.88828 14.2444 9.13442 14.4906C9.38056 14.7367 9.7144 14.875 10.0625 14.875H17.0625C17.4106 14.875 17.7444 14.7367 17.9906 14.4906C18.2367 14.2444 18.375 13.9106 18.375 13.5625C18.375 13.2144 18.2367 12.8806 17.9906 12.6344C17.7444 12.3883 17.4106 12.25 17.0625 12.25H10.0625Z" fill="#0098F1"/>
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image src={"/images/gridicons_speaker.svg"} className="size-4" width={16} height={16} alt="" />
                        <p className="text-memo-text truncate text-xs">As one of the largest token launches in house</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <button onClick={ airdropClick } ref={ airdropButton } className="bg-memo-color p-2 rounded-t-2xl rounded-b">Airdrop</button>
                        <button onClick={ giveawayClick } ref={ giveawayButton } className="irish-grover bg-memo-color/40 p-2 rounded-t-2xl rounded-b">Giveaway</button>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={ hashCardClick } ref={ hashCardButton } className="bg-memo-color/40 p-2 rounded-t-2xl rounded-b">Hash Card</button>
                        <button onClick={ giftCardClick } ref={ giftCardButton } className="bg-memo-color/40 p-2 rounded-t-2xl rounded-b">Gift Card</button>
                    </div>
                </div>
            </div>
            { active == 'airdrop'?<AirdropBlockFreeAirdrop action={ toggleReferModal } />: null }
            { active == 'hashcard'?<HashCardBlockFreeAirdrop />: null }
            { active == 'giftcard'?<GiftCardBlockFreeAirdrop />: null }
        </>
    )
}