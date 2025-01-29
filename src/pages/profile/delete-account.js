import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import { Header2 } from "@/components/headers";
import Link from "next/link";
import { useRef } from "react";

export default function DeleteAccount () {
    const deleteModal = useRef(null)

    const accountDeleteFunc = () => {
        //Perform account deletion related checks
        deleteModal.current.classList.toggle('hidden')
        deleteModal.current.classList.toggle('flex')
    }

    const closeDeleteModal = () => {
        deleteModal.current.classList.toggle('hidden')
        deleteModal.current.classList.toggle('flex')
    }

    return (
        <>
            <Bg />
            <div ref={ deleteModal } className="bg-black/30 fixed inset-0 hidden items-center justify-center z-10 p-12">
                <div className="bg-memo-blue p-8 flex flex-col gap-6 w-full mx-auto rounded-[28px]">
                    <p className="inter text-lg font-semibold text-center">Do you confirm to delete the account</p>
                    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
                        <button onClick={ closeDeleteModal } className="button-inset rounded-[47px] bg-memo-light-blue/30 px-6 py-3 border border-solid border-memo-color">Cancel</button>
                        <button className="button-inset rounded-[47px] bg-gradient-to-r from-memo-light-blue to-memo-blue px-6 py-3">Ok</button>
                    </div>
                </div>
            </div>

            <div className="relative px-6 flex flex-col gap-4 pb-32">
                <Header2 title={"Delete Account"} />

                <div className="bg-white/5 flex p-5 rounded-xl mt-6">
                    <input className="w-full bg-transparent placeholder:text-[#464646]" placeholder="Log in password" type="password" />
                    <button onClick={ () => {} } className="block"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#464646"><path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/></svg></button>
                    <button onClick={ () => {} } className="hidden"><svg xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#464646"><path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/></svg></button>
                </div>
                <div className="flex gap-4 items-start text-left mb-4">
                    <input type="checkbox" />
                    <p className="text-memo-46">I am aware of the risks and confirm to delete my account</p>
                </div>

                <button onClick={ accountDeleteFunc } className="button-inset gap-4 bg-gradient-to-r from-memo-light-blue to-memo-blue text-lg p-3 rounded-full">Confirm Deleting Account</button>

                <p className="text-center px-12 bg-gradient-to-b from-memo-color to-memo-blue-2 bg-clip-text text-transparent">All data and all assets in your account will be permanently deleted after your account is cancelled. This should be a prudent operation, please be sure to consider carefully before you proceed.</p>
            </div>
        </>
    )
}