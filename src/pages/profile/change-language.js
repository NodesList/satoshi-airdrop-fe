import Bg from "@/components/bg";
import CurveText from "@/components/curve-text";
import { Header2 } from "@/components/headers";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ChangeLanguage () {
    const [languages, setLanguages] = useState(['English', 'Chinese'])
    const [chosenLanguage, setChosenLanguage] = useState('English')

    useEffect(() => {
        for(let i=0; i<languages.length; i++) {
            document.getElementById(languages[i]).style.visibility = 'hidden'
        }
        document.getElementById(languages[0]).style.visibility = 'visible'
    }, [])
    
    const toggleLanguage = (id) => {
        for(let i=0; i<languages.length; i++) {
            document.getElementById(languages[i]).style.visibility = 'hidden'
        }
        document.getElementById(languages[id]).style.visibility = 'visible'
        setChosenLanguage(languages[id])
    }

    return (
        <>
            <Bg />
            <div className="relative px-6 flex flex-col gap-4 pb-32">
                <Header2 title={"Change Language"} />

                <div className=" flex flex-col gap-0">
                { languages.map((language, key) => {
                    return (
                        <button onClick={ () => toggleLanguage(key) } key={key} className="flex justify-between items-center py-6 border-b border-solid border-white/25">
                            <p className="">{ language }</p>
                            <svg id={language} xmlns="http://www.w3.org/2000/svg" className="size-6" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0098F1"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/></svg>
                        </button>
                    )
                })}
                </div>
            </div>
        </>
    )
}
