"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    children: ReactNode;
    position?: number;
    to?: "right" | "left" | "top" | "bottom" | "none";
};

gsap.registerPlugin(ScrollTrigger);

export default function ToAnimation({ children, position = .5, to = "right" }: Props) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const fromX = to === "right"
            ? -100
            : to === "left"
                ? 100
                : 0;
        const fromY = to === "bottom"
            ? -100
            : to === "top"
                ? 100
                : 0;

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
                { x: fromX, y: fromY, opacity: 0, immediateRender: false },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "none",
                },
                position
            );
        }, ref);
        return () => ctx.revert();
    }, [position, to]);

    return <div ref={ref} className="opacity-0">{children}</div>;
}