import Image from "next/image"
import { useRouter } from "next/router"

export function Header1 () {
    return (
        <div className="grid grid-cols-3 items-center mt-6">
            <button className=""><Image src={"/images/Group 9.svg"} className="size-10 invisible" width={27} height={6} alt="" /></button>
            <Image src={"/images/logo.png"} width={207} height={100} alt="" />
            <button className="text-right flex justify-end"><Image src={"/images/Group 9.svg"} className="size-6 relative -top-1" width={27} height={6} alt="" /></button>
        </div>
    )
}

export function Header2 ({title, backFunc}) {
    return (
        <div className="flex justify-between items-center mt-6">
            <button onClick={ backFunc } className="w-1/4"><svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-memo-light-blue" height="48px" viewBox="0 -960 960 960" width="48px"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg></button>
            <h1 className="lalezar text-white font-semibold text-3xl text-nowrap relative top-1">{ title }</h1>
            <button className="text-right flex justify-end w-1/4"><Image src={"/images/Group 9.svg"} className="size-6 invisible" width={27} height={6} alt="" /></button>
        </div>
    )
}