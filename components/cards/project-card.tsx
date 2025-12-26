import { Project } from "@/app/generated/prisma/client"
import ToAnimation from "../gsap/to-animation";
import { projectsHost } from "@/lib/images-hosts";
import { Link } from "@/lib/localization/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
    project: Project;
    index: number;
}

export default async function ProjectCard({ project, index }: Props) {
    const { name, image, technologies } = project;
    const t = await getTranslations();

    return (
        <ToAnimation className="col-span-2 md:col-span-1" to={index % 2 === 0 ? "bottom" : "top"}
            position={index % 4 === 0 ? 0 : index % 4 === 1 ? .5 : index % 4 === 2 ? 1 : 1.5}
        // position={1 + (0.5 * index)}
        >
            <div className="relative w-full min-h-40 aspect-2/1 rounded-md overflow-hidden group text-white">
                <Image
                    src={projectsHost + image}
                    alt={name}
                    fill
                    unoptimized
                />

                {/* blur effect */}
                <div className="absolute inset-0 group-hover:backdrop-blur-sm">
                    <div className="absolute top-0 w-[50%] h-0 opacity-0 bg-gray/20 group-hover:h-full group-hover:opacity-100" />
                    <div className="absolute bottom-0 right-0 w-[50%] h-0 opacity-0 bg-gray/20 group-hover:h-full group-hover:opacity-100" />
                </div>

                <h3 className="h3 relative font-semibold text-center z-10 -top-3 group-hover:top-3 group-hover:md:top-7 group-hover:lg:top-9 xl:top-10 tracking-widest opacity-0 group-hover:opacity-100">{name}</h3>
                <div className="relative flex justify-center items-center w-full h-full -mt-10 -z-10 group-hover:z-10">
                    <Link href={`/${name.toLowerCase().replaceAll(" ", "-")}`} className="primaryBtn py-1! lg:py-3! mt-5! opacity-0! group-hover:opacity-100! right-10 group-hover:right-0">{t("more-details")}</Link>
                </div>
                <div className="text-xs lg:text-sm absolute text-center! line-clamp-1 z-10 -bottom-3 group-hover:bottom-6 group-hover:md:bottom-8 group-hover:lg:bottom-9 opacity-0 group-hover:opacity-100 px-3 w-full">{technologies.join(" | ")}</div>
            </div>
        </ToAnimation>
    )
}