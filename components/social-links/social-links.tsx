import clsx from "clsx";
import { ClassValue } from "clsx";
import Image from "next/image";
import Link from "next/link";

const links = [
    { alt: "Anas Attoum’s github", src: "/icons/social/github.svg", href: "https://github.com/AnasAttoum" },
    { alt: "Anas Attoum’s linkedin", src: "/icons/social/linkedin.svg", href: "https://www.linkedin.com/in/anas-attoum" },
    { alt: "Anas Attoum’s email", src: "/icons/social/email.svg", href: "mailto:AnasAttoum.12321@gmail.com" },
    { alt: "Anas Attoum’s phone", src: "/icons/social/call.svg", href: "tel:+963951-931-846" },
]

export default function SocialLinks({ className }: { className?: ClassValue }) {
    return (
        <div className={clsx("flex justify-center items-center mt-15 gap-5", className)}>
            {links.map(({ alt, href, src }) => (
                <Link key={alt} href={href} className="inline-block simpleBtn bg-light hover:bg-gray! shadow-md">
                    <Image
                        src={src}
                        alt={alt}
                        width={30}
                        height={30}
                    />
                </Link>
            ))}
        </div>
    )
}
