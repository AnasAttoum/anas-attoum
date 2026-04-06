import { SocialMedia } from "@/app/generated/prisma/client";
import { ENV } from "@/lib/env";
import clsx from "clsx";
import { ClassValue } from "clsx";
import Image from "next/image";

export default function SocialLinks({ socials, className }: { socials: SocialMedia[]; className?: ClassValue }) {
    return (
        <div className={clsx("flex flex-wrap justify-center items-center mt-15 gap-5", className)}>
            {socials?.map(({ alt, href, image }) => (
                <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialBtn"
                >
                    <Image
                        src={ENV.socialsHost + image}
                        alt={alt}
                        unoptimized
                        width={30}
                        height={30}
                    />
                </a>
            ))}
        </div>
    )
}
