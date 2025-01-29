import Image from "next/image"
import Link from "next/link"


export default function ProjectCard ({image, title, text, totalRounds, totalReward, link}) {
    return (
        <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl mt-6 flex flex-col gap-2">
            <Image src={`/images/${image}`} className="rounded-lg" width={348} height={116} alt="" />
            <h2 className="font-semibold text-white text-xl">{ title }</h2>
            <p className="text-memo-text text-sm">{ text }</p>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#001D6444] border border-solid border-memo-blue p-4 rounded-xl">
                    <p className="mb-2">Total Rounds</p>
                    <p className="font-bold">{ totalRounds }</p>
                </div>
                <div className="bg-[#001D6444] border border-solid border-memo-blue p-4 rounded-xl">
                    <p className="mb-2">Total Reward</p>
                    <p className="font-bold">{ totalReward }</p>
                </div>
            </div>
            <Link href={`/project/${link}`} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2 rounded-full w-fit mx-auto mt-4">
                Explore
                <span className="bg-white inline-block px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                </span>
            </Link>
        </div>
    )
}