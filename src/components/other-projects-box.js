import Image from "next/image";

export default function OtherProjectsBox () {
    return (
        <div className="relative border-2 border-solid border-memo-color rounded-xl group min-w-fit">
            <Image src={"/images/WhatsApp Image 2025-01-17 at 12.04.17 PM (4) 2.png"} className="rounded-[10px]" width={114} height={118} alt="" />
            <div className="absolute bg-[#00308383] rounded-[10px] inset-0 opacity-0 transition-all group-hover:opacity-100">
                <button className="bg-white rounded-3xl px-4 py-1 absolute bottom-4 left-1 -rotate-45"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg></button>
            </div>
        </div>
    )
}