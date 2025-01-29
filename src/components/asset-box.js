import Image from "next/image";
import Link from "next/link";

export default function AssetBox ({logo, title, balance, available, frozen, link}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                    <Image src={logo} className="size-8" width={34} height={34} alt="logo" />
                    <h2 className="font-medium">{ title }</h2>
                </div>
                <Link href={`/assets/${title}`} className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"/></svg></Link>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center relative">
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Balance</p>
                    <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">{ balance }</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Available</p>
                    <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">{ available }</p>
                </div>
                <div className="flex flex-col gap-2">
                <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 text px-4 py-1 rounded-t-2xl rounded-b text-center truncate text-sm w-fit mx-auto">Frozen</p>
                    <p className="bg-[#001D64]/25 border border-solid border-memo-blue py-5 px-2 rounded-xl font-semibold text-sm text-nowrap text-center text-white truncate">{ frozen }</p>
                </div>
            </div>
        </div>
    )
}