import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";

export default function Team () {
    return (
        <>
            <Bg />
            <div className="bg-black/30 fixed inset-0 flex items-center justify-center z-10 p-8">
                <div className="bg-[#000C2A] p-4 w-full rounded-2xl flex flex-col gap-4 relative max-h-[75vh] overflow-y-auto">
                    <h2 className="font-semibold text-xl text-center">Build Your Battle Team</h2>

                    <div className="w-full p-4 text-center bg-memo-blue-2 rounded-2xl relative pb-14 mb-24">
                        <Image src={"/images/Group 47.svg"} className="absolute size-24 left-0 bottom-0 rounded-bl-2xl" width={136} height={136} alt="" />

                        <h3 className="text-xl font-semibold relative">Complete Quests to Earn More Airdrops</h3>
                        <p className="bg-gradient-to-b rounded-2xl from-memo-color to-memo-blue-2 p-2 w-full relative mt-4">Use link invite.memoapp.xyz/456br</p>
                        <Image src={"/images/QR_code_for_mobile_English_Wikipedia 1.svg"} className="size-32 absolute -bottom-20 inset-x-0 mx-auto rounded-xl" width={120} height={120} alt="" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 pb-6 border-b border-solid border-white/10 last:border-0">
                            <section className="bg-gradient-to-b from-memo-color to-memo-blue-2 p-2 rounded h-fit"><svg className="size-6" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF"><path d="M450-313v-371L330-564l-43-43 193-193 193 193-43 43-120-120v371h-60ZM160-160v-203h60v143h520v-143h60v203H160Z"/></svg></section>
                            <section className="flex flex-col gap-2">
                                <p className="karla text-white font-bold">Share Your Link</p>
                                <p className="text-memo-text">Send your unique referral link and get them signed up in no time. Together, start earning airdrops instantly!</p>
                            </section>
                        </div>
                        <div className="flex gap-4 pb-6 border-b border-solid border-white/10 last:border-0">
                            <section className="bg-gradient-to-b from-memo-color to-memo-blue-2 p-2 rounded h-fit"><svg className="size-6" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M80-160v-640h800v640H80Zm60-60h680v-436H140v436Zm298-92L310-440l44-44 84 84 168-168 44 44-212 212Zm-298 92v-520 520Z"/></svg></section>
                            <section className="flex flex-col gap-2">
                                <p className="karla text-white font-bold">Complete Verification</p>
                                <p className="text-memo-text">Make sure they complete verification to unlock full access and start earning!</p>
                            </section>
                        </div>
                        <div className="flex gap-4 pb-6 border-b border-solid border-white/10 last:border-0">
                            <section className="bg-gradient-to-b from-memo-color to-memo-blue-2 p-2 rounded h-fit"><svg className="w-6" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.001C10.1217 5.001 12.1566 5.84385 13.6569 7.34415C15.1571 8.84444 16 10.8793 16 13.001C16 15.1227 15.1571 17.1576 13.6569 18.6579C12.1566 20.1581 10.1217 21.001 8 21.001C5.87827 21.001 3.84344 20.1581 2.34315 18.6579C0.842855 17.1576 0 15.1227 0 13.001C0 10.8793 0.842855 8.84444 2.34315 7.34415C3.84344 5.84385 5.87827 5.001 8 5.001ZM8 7.001C6.4087 7.001 4.88258 7.63314 3.75736 8.75836C2.63214 9.88358 2 11.4097 2 13.001C2 14.5923 2.63214 16.1184 3.75736 17.2436C4.88258 18.3689 6.4087 19.001 8 19.001C9.5913 19.001 11.1174 18.3689 12.2426 17.2436C13.3679 16.1184 14 14.5923 14 13.001C14 11.4097 13.3679 9.88358 12.2426 8.75836C11.1174 7.63314 9.5913 7.001 8 7.001ZM8 8.501L9.322 11.181L12.28 11.611L10.14 13.696L10.645 16.642L8 15.251L5.355 16.641L5.86 13.696L3.72 11.61L6.678 11.18L8 8.501ZM14 0.00100005V3.001L12.637 4.139C11.5063 3.54476 10.2712 3.17497 9 3.05V0.00100005H14ZM7 0V3.05C5.72918 3.17478 4.49449 3.54424 3.364 4.138L2 3.001V0.00100005L7 0Z" fill="white"/></svg></section>
                            <section className="flex flex-col gap-2">
                                <p className="karla text-white font-bold">Score Big in the Same Project</p>
                                <p className="text-memo-text">Team up with your teammates on the same project to maximize your rewards!.</p>
                            </section>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 justify-center w-fit gap-4">
                        <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/iconoir_copy.svg"} width={32} height={32} alt="" /></Link>
                        <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/bi_twitter-x.svg"} width={16} height={16} alt="" /></Link>
                        <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/line-md_telegram.svg"} width={24} height={24} alt="" /></Link>
                        <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><svg className="size-6" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFF"><path d="M450-313v-371L330-564l-43-43 193-193 193 193-43 43-120-120v371h-60ZM160-160v-203h60v143h520v-143h60v203H160Z"/></svg></Link>
                    </div>
                </div>
            </div>
            
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header2 title={"Battle Team"} />
            </div>
        </>
    )
}