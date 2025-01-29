import Image from "next/image"
import Link from "next/link"


export default function Footer ({active}) {
    return (
        <div className="fixed inset-x-0 w-full bottom-4 px-4">
        <nav className="relative w-full bg-[#001D64] rounded-[20px] p-4 grid grid-cols-5 text-[#828282]">  
            { active == "airdrop"?
                <Link href={"#"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/airdrop-icon-active.svg"} className="w-5" width={20} height={22} alt="" /><p className="text-memo-color">Airdrop</p></Link>:
                <Link href={"/airdrop"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/mingcute_airdrop-line.svg"} className="relative -top-0.5" width={24} height={24} alt="" /><p className="">Airdrop</p></Link>
            }
            { active == "project"?
                <Link href={"#"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/ix_project-configuration-active.svg"} className="w-7 relative -top-1" width={22} height={22} alt="" /><p className="text-memo-color">Project</p></Link>:
                <Link href={"/project"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/ix_project-configuration.svg"} className="w-7 relative -top-1" width={22} height={22} alt="" /><p className="">Project</p></Link>
            }
            { active == "earn"?
                <Link href={"#"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/hugeicons_coins-swap-earn.svg"} width={20} height={22} alt="" /><p className="text-memo-color">Earn</p></Link>:
                <Link href={"/earn"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/hugeicons_coins-swap.svg"} width={21} height={21} alt="" /><p className="">Earn</p></Link>
            }
            { active == "quote"?
                <Link href={"#"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/solar_graph-broken-active.svg"} width={20} height={22} alt="" /><p className="text-memo-color">Quote</p></Link>:
                <Link href={"/quote"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/solar_graph-broken.svg"} width={21} height={21} alt="" /><p className="">Quote</p></Link>
            }
            { active == "me"?
                <Link href={"#"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/pajamas_profile-active.svg"} width={20} height={22} alt="" /><p className="text-memo-color">Me</p></Link>:
                <Link href={"/me"} className="flex flex-col items-center justify-between gap-2"><Image src={"/images/pajamas_profile.svg"} width={22} height={22} alt="" /><p className="">Me</p></Link>
            }
            
        </nav>
        </div>
    )
}

export function JoinCommunity () {
    return (
        <section className="flex flex-col items-center gap-4">
            <h2 className="text-white text-xl font-semibold">Join the community</h2>
            <div className="flex justify-center w-fit gap-4">
                <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/bi_twitter-x.svg"} width={16} height={16} alt="" /></Link>
                <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/ic_round-discord.svg"} width={24} height={24} alt="" /></Link>
                <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/line-md_telegram.svg"} width={24} height={24} alt="" /></Link>
                <Link href={"#"} className="bg-gradient-to-b from-memo-light-blue to-memo-blue px-5 py-2 rounded-full flex justify-center"><Image src={"/images/mdi_linkedin.svg"} width={24} height={24} alt="" /></Link>
            </div>
        </section>
    )
}