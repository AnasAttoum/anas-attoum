"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

type Props = {
    title: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function LetterAnimation({ title }: Props) {
    const ref = useRef(null);
    const t = useTranslations();

    useEffect(() => {
        if (!ref.current) return;

        gsap.set(ref.current, { transition: "none" });

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    // toggleActions: "play none none reverse",
                    // markers: true
                },
            });

            tl.fromTo(
                ref.current,
                { letterSpacing: "20px", opacity: 0, immediateRender: false },
                {
                    letterSpacing: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "none",
                },
                .5
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return <div ref={ref} className="h2 font-medium opacity-0">{t(title)}</div>;
}