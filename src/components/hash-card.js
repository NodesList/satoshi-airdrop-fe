import Bg from "@/components/bg";
import Footer from "@/components/footer";
import { Header2 } from "@/components/headers";
import Image from "next/image";
import { useRef, useState } from "react";

export default function HashCard () {
    const modal = useRef(null)
    const [isTeammates, setIsTeammates] = useState(true)

    const closeModal = () => {
        modal.current.classList.toggle('flex')
        modal.current.classList.toggle('hidden')
    }

    return (
        <div className="">
            
        </div>
    )
}