import Bg from "@/components/bg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp () {
    const router = useRouter()

    const [isPassword, setIsPassword] = useState(true)
    const [ptype, setPtype] = useState("password")
    
    const viewPassword = (status) => {
        if (status) {
            setPtype('text')
            setIsPassword(false)
        } else {
            setPtype('password')
            setIsPassword(true)
        }
    }

    const signUpAuth = () => {
        router.push("/airdrop")
    }

    return (
        <>
        <Bg />
        <div className="relative mt-24 px-12 text-center pb-24">
            <Image src={"/images/logo.png"} className="mx-auto w-32" width={207} height={100} alt="" />
            <h1 className="text-memo-color font-black text-4xl mt-12 mb-6">Sign Up</h1>
            <p className="text-memo-text">Join now with a quick signup and grab your free tokens today!</p>
            <div className="mt-20 flex flex-col gap-4">
                <input className="w-full bg-white/5 p-5 rounded-xl placeholder:text-[#464646]" placeholder="Email" type="email" />
                <div className="bg-white/5 flex p-5 rounded-xl">
                    <input className="w-full bg-transparent placeholder:text-[#464646]" placeholder="Password" type={ptype} />
                    { isPassword? <button onClick={ () => viewPassword(true) } className="block"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#464646"><path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/></svg></button>:
                        <button onClick={ () => viewPassword(false) }><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="24px" viewBox="0 -960 960 960" width="24px" fill="#464646"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></button>
                    }
                </div>
                <div className="bg-white/5 flex p-5 rounded-xl">
                    <input className="w-full bg-transparent placeholder:text-[#464646]" placeholder="Confirm password" type={ptype} />
                    { isPassword? <button onClick={ () => viewPassword(true) } className="block"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#464646"><path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/></svg></button>:
                        <button onClick={ () => viewPassword(false) }><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="24px" viewBox="0 -960 960 960" width="24px" fill="#464646"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></button>
                    }
                </div>
                <input className="w-full bg-white/5 p-5 rounded-xl placeholder:text-[#464646]" placeholder="Input Referral Code (optional)" type="text" />

                <div className="flex gap-4 items-start text-left mb-4">
                    <input type="checkbox" />
                    <p className="text-memo-46">I&apos;ve read and accept the <Link href={"#"} className="italic text-memo-color font-semibold">Privacy Policy</Link> & <Link href={"#"} className="italic text-memo-color font-semibold">Terms of Use</Link></p>
                </div>

                <button onClick={ signUpAuth } className="button-inset gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-3 rounded-full">Register</button>
            </div>

            <div className="relative mt-16">
                <p className="text-memo-46">Already a Member? <Link href={"/login"} className="italic text-memo-color font-semibold">Log In</Link></p>
            </div>
        </div>
        </>
    )
}