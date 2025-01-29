import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import { Header2 } from "@/components/headers";
import Link from "next/link";
import { useRef } from "react";

export default function RewardCards () {
    const hashButton = useRef(null)
    const giftButton = useRef(null)

    const hash = useRef(null)
    const gift = useRef(null)

    const toggleCards = () => {
        hashButton.current.classList.toggle('bg-memo-color')
        hashButton.current.classList.toggle('bg-memo-color/30')
        hash.current.classList.toggle('flex')
        hash.current.classList.toggle('hidden')

        giftButton.current.classList.toggle('bg-memo-color')
        giftButton.current.classList.toggle('bg-memo-color/30')
        gift.current.classList.toggle('flex')
        gift.current.classList.toggle('hidden')
    }

    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-4 pb-32">
                <Header2 title={"Reward Cards"} />

                <div className="flex gap-2">
                    <button ref={ hashButton } onClick={ toggleCards } className="bg-memo-color text p-2 rounded-t-2xl rounded-b text-center truncate">Hash Card</button>
                    <button ref={ giftButton } onClick={ toggleCards } className="bg-memo-color/30 text p-2 rounded-t-2xl rounded-b text-center truncate">Gift Card</button>
                </div>

                <div ref={hash} className="flex flex-col gap-4">
                    <p className="text-memo-color text-sm">Initiate your exchange and invite others, or join existing ones to boost your hash power!</p>

                    <div className="bg-memo-blue/30 border border-solid border-memo-blue p-4 rounded-2xl">
                        <h3 className="text-white font-medium mb-4">BeetleCard</h3>
                        <div className="flex justify-between pb-4 border-b border-solid border-white/15">
                            <p className="text-memo-text text-sm">Hash <span className="text-xl font-semibold">1.0</span>k</p>
                            <p className="text-memo-text text-sm">Rate <span className="text-xl font-semibold text-white ml-4">5</span>%</p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <h3 className="text-white font-medium">Card Exchange</h3>
                            <div className="flex gap-2 items-center">
                                <Link href={"#"} className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-3xl px-4 py-2">Initiate</Link>
                                <Link href={"#"} className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-3xl px-4 py-2">Join</Link>
                            </div>
                        </div>
                    </div>


                    <button className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue p-3 rounded-3xl w-full">Show All (5 Hash Cards)</button>
                </div>

                <div ref={gift} className="hidden flex-col gap-4">
                    <p className="text-memo-color text-sm">Boost Your and your friend’s hash power, or team up together.</p>

                    <div className="bg-memo-blue/30 border border-solid border-memo-blue p-4 rounded-2xl flex flex-col gap-4">
                        <h3 className="text-white font-medium">Do you have a gift card ?</h3>
                        <p className="text-memo-color">Use it to earn more hash power, don’t miss out!</p>
                        <button className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue p-3 rounded-3xl w-full">Use Gift Card</button>
                        <p className="flex gap-2 items-center text-memo-color"><svg className="size-4" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/></svg> Takes approx. 1 min.</p>
                    </div>

                    <div className="bg-memo-blue/30 border border-solid border-memo-blue p-4 rounded-2xl">
                        <h3 className="text-white font-medium mb-4">Gift Card</h3>
                        <div className="flex justify-between pb-4 border-b border-solid border-white/15">
                            <p className="text-memo-text text-sm">Your Hash <span className="text-xl font-semibold">1</span>k</p>
                            <p className="text-memo-text text-sm">User&apos;s Hash <span className="text-xl font-semibold text-white ml-4">30</span>k</p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <h3 className="text-memo-text font-medium">Use Code <span className="text-white">5qfnenhe</span></h3>
                            <div className="flex gap-2 items-center">
                                <Link href={"#"} className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-lg p-2"><svg className="size-6" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560ZM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180Zm120-180v-560 560Z"/></svg></Link>
                                <Link href={"#"} className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue rounded-lg p-2"><svg className="size-6 rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg></Link>
                            </div>
                        </div>
                    </div>


                    <button className="button-inset bg-gradient-to-r from-memo-light-blue to-memo-blue p-3 rounded-3xl w-full">Show All (5 Hash Cards)</button>
                </div>


                {/**
                 * Questionnaire Section
                 */}
            </div>
        </>
    )
}