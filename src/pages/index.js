import Image from "next/image";
import Link from "next/link";

export default function Splash () {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Image src={"/images/logo.png"} width={207} height={100} alt="" />
            <Link href={"/sign-up"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2.5 rounded-full">
                Get Started
                <span className="bg-white inline-block px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                </span>
            </Link>
        </div>
    )
}