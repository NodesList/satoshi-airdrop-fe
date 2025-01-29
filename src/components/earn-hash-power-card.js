import Link from "next/link"

export default function EarnHashPowerCard ({hashPrice, title, description, link}) {
    return (
        <div className="mt-4">
            <p className="text-memo-color mb-4">Complete to Claim { hashPrice } Hash Power</p>
            <div className="bg-memo-blue/30 border border-solid border-memo-blue rounded-2xl p-4 flex flex-wrap justify-between">
                <p className="text-white font-semibold">{ title }</p>
                <Link href={link} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-base p-2 rounded-full w-fit h-fit">
                    Complete
                    <span className="bg-white inline-block px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-4"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                    </span>
                </Link> 
                <p className="text-memo-text text-sm mt-2">{ description }</p>
            </div>
        </div>
    )
}