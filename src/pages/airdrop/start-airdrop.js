import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";

export default function AirdropSplash () {
    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header2 title={"Start Airdrop"} />

                <div className="mt-12 flex flex-col gap-6 items-center">
                    <Image src={"/images/Group 3 1.png"} className="p-6 bg-memo-blue rounded-full size-24 mx-auto" width={98} height={115} alt="" />
                    <p className="text-white">I am not a robot verification.</p>
                    <Link href={"/airdrop/free-airdrop"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-3 rounded-full">
                        Start Verification
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </Link>

                    <h2 className="font-semibold text-lg mt-6">Notice</h2>
                    <p className="text-memo-text text-center px-6 -mt-2">The account holder must verify by themselves. Allowing others to verify may affect the security of your funds.</p>
                </div>
            </div>            
        </>
    )
}