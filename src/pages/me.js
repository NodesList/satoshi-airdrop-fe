import Bg from "@/components/bg";
import Footer from "@/components/footer";
import { Header1 } from "@/components/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Me () {
    const router = useRouter()

    const logoutModal = useRef(null)
    const logoutFunc = () => {
        //Perform account deletion related checks
        logoutModal.current.classList.toggle('hidden')
        logoutModal.current.classList.toggle('flex')
    }

    const closeLogoutModal = () => {
        logoutModal.current.classList.toggle("hidden")
        logoutModal.current.classList.toggle("flex")
    }

    return (
        <>
            <Bg />
            <div ref={ logoutModal } className="bg-black/30 fixed inset-0 hidden items-center justify-center z-10 p-12">
                <div className="bg-memo-blue p-8 flex flex-col gap-6 w-full mx-auto rounded-[28px]">
                    <p className="inter text-lg font-semibold text-center">Do you confirm to delete the account</p>
                    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
                        <button onClick={ closeLogoutModal } className="button-inset rounded-[47px] bg-memo-light-blue/30 px-6 py-3 border border-solid border-memo-color">Cancel</button>
                        <button onClick={ () =>  router.push('/login') } className="button-inset rounded-[47px] bg-gradient-to-r from-memo-light-blue to-memo-blue px-6 py-3">Ok</button>
                    </div>
                </div>
            </div>

            <div className="relative px-6 flex flex-col gap-6 pb-32">
                <Header1 />

                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <Image src={"/images/Frame 22.png"} width={60} height={60} alt="" />
                        <div className="flex flex-col justify-center">
                            <p className="text-2xl font-semibold">Hi, Smit 👋</p>
                            <p className="text-sm text-memo-text">w*****3@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className=""><svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z"/></svg></button>
                        <button className=""><svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg></button>
                    </div>
                </div>

                <section className="flex flex-col gap-2">
                    <h2 className="font-semibold text-2xl mt-6">My Assets</h2>
                    <div className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl flex justify-between items-center">
                        <p className="text-memo-text">Asset Summary Dashboard</p>

                        <Link href={"/assets"} className="flex justify-end gap-4 items-center">
                            <p className="italic text-memo-color">See All</p>
                            <button className="bg-gradient-to-b from-memo-color to-memo-blue-2 w-fit h-fit rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"/></svg></button>
                        </Link>
                    </div>
                </section>

                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="bg-gradient-to-b from-memo-color to-memo-blue-2 text p-2 rounded-t-2xl rounded-b text-center truncate flex gap-2 items-center"><Image src={"/images/download (1) 1.svg"} className="size-5" width={28} height={28} alt="" /><span className="inline-block truncate">Hash Limit</span></div>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl truncate">0.00000000</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-gradient-to-b from-memo-color to-memo-blue-2 text p-2 rounded-t-2xl rounded-b text-center truncate flex gap-2 items-center"><Image src={"/images/download (1) 2.svg"} className="size-5" width={28} height={28} alt="" /><span className="inline-block truncate">CORE-1</span></div>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl truncate">0.00000000</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-gradient-to-b from-memo-color to-memo-blue-2 text p-2 rounded-t-2xl rounded-b text-center truncate flex gap-2 items-center"><Image src={"/images/download (1) 3.svg"} className="size-5" width={20} height={20} alt="" /><span className="inline-block truncate">Hash Limit</span></div>
                        <p className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl truncate">0.00000000</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-[#001D64]/25 border border-solid border-memo-blue p-8 rounded-xl items-center text-center">
                    <h2 className="text-white text-xl font-semibold">Boost your hash power for more rewards</h2>
                    <p className="text-memo-text text-sm">Complete quests to increase your hash power in Just a few clicks</p>
                    <Link href={"/project"} className="button-inset flex items-center gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg px-4 py-2.5 rounded-full">
                        Boost Your Hash Now
                        <span className="bg-white inline-block px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" className="fill-memo-light-blue size-6"><path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
                        </span>
                    </Link>
                </div>

                <section className="flex flex-col gap-2">
                    <h2 className="font-semibold text-2xl mt-6">My Account</h2>
                    <div className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-memo-color font-medium">Identification</h3>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Choose Country/Region <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">User Verification <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-memo-color font-medium">Personal Information</h3>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Change Nickname <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Change Password <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Asset Password <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Change Email <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-memo-color font-medium">About App</h3>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Feedback <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"/profile/change-language"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Change Language <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Privacy Policy <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Terms Of Use <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                            <Link href={"#"} className="flex w-full justify-between items-center hover:bg-memo-blue-2 hover:shadow-md hover:p-2 rounded-md transition-all duration-75 shadow-white">Download <svg xmlns="http://www.w3.org/2000/svg" className="size-8" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg></Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Link href={"/profile/delete-account"} className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl flex gap-4 justify-between items-center">
                                <button className="p-2 bg-gradient-to-b from-memo-color to-memo-blue-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg></button>
                                Delete Account
                            </Link>
                            <button onClick={ logoutFunc } className="bg-[#001D64]/25 border border-solid border-memo-blue p-4 rounded-xl flex gap-4 justify-between items-center">
                                <section className="p-2 bg-gradient-to-b from-memo-color to-memo-blue-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg></section>
                                Log Out
                            </button>
                        </div>
                    </div>
                </section>
                

            </div>

            <Footer active={"me"} />
        </>
    )
}