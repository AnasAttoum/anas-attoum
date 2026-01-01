"use client"

import clsx from "clsx"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"

export default function SubmitButton() {

    const t = useTranslations()
    const [hovered, setHovered] = useState<boolean | null>(null)

    return (
        <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false)
                setTimeout(() => {
                    if (hovered)
                        setHovered(null)
                }, 350)
            }}
            className="relative w-full text-white bg-dark-gray hover:bg-primary rounded-md py-5 cursor-pointer overflow-hidden group"
        >
            {t("submit")}
            <Image
                src="/icons/more/send.svg"
                alt="send"
                width={50}
                height={50}
                className={clsx(
                    "absolute -bottom-full left-[50%] opacity-0 duration-300",
                    hovered === true
                    && "bottom-2 opacity-100 left-[75%]",
                    hovered === false
                    && "bottom-full left-[90%]"
                )}
            />
        </button>
    )
}