import Bg from "@/components/bg";
import { Header2 } from "@/components/headers";
import Image from "next/image";

export default function EarnDeposit () {
    const copyText = async () => {
        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText('0x40SJFIUNGKJELKD34243JSDKFSDDFSDFSFEMBJKG')
            alert('0x40SJFIUNGKJELKD34243JSDKFSDDFSDFSFEMBJKG copied to clipboard')
        } else {
            alert("Failed to copy text");
        }
    }

    return (
        <>
            <Bg />
            <div className="px-6 flex flex-col gap-4 w-full pb-12 relative">
                <Header2 title={"BTC"} />
                <p className="bg-gradient-to-b from-memo-color to-memo-blue-2 bg-clip-text text-lg font-semibold w-2/3 mx-auto text-transparent text-center mt-4">Only Bitcoin assets are supported</p>

                <Image src={"/images/QR_code_for_mobile_English_Wikipedia 1.png"} className="mx-auto my-6" width={176} height={176} alt="" />
                <p className="font-semibold text-lg text-center">Wallet Address</p>
                <p className="text-center px-12 leading-snug mx-auto text-wrap break-all -mt-2">0x40SJFIUNGKJELKD34243JSDKFSDDFSDFSFEMBJKG</p>
                <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
                    <button onClick={ copyText } className="px-4 py-2 bg-gradient-to-b from-memo-light-blue to-memo-blue flex gap-2 items-center rounded-lg text-sm"><Image src={"/images/iconoir_copy.svg"} width={29} height={29} alt="" />Copy Address</button>
                    <a href="/images/QR_code_for_mobile_English_Wikipedia 1.png" download={"/QR_code_for_mobile_English_Wikipedia 1.png"} className="px-4 py-2 bg-gradient-to-b from-memo-light-blue to-memo-blue flex gap-2 items-center rounded-lg text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="size-7" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M450-313v-371L330-564l-43-43 193-193 193 193-43 43-120-120v371h-60ZM160-160v-203h60v143h520v-143h60v203H160Z"/></svg>Save QR Code</a>
                </div>

                <section className="flex flex-col gap-2 mt-6">
                    <h2 className="font-semibold text-lg">Notice</h2>
                    <p className="text-memo-text text-sm">Please carefully verify whether the address and deposit network are correct. If an error occurs due to the user&apos;s mistake, resulting in funds not being credited, the user will bear full responsibility.</p>
                </section>
            </div>
        </>
    )
}