import { ProjectFindManyArgs } from "@/app/generated/prisma/models";
import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import { projectsHost } from "@/lib/images-hosts";
import { Link } from "@/lib/localization/navigation";
import { paths } from "@/lib/paths";
import prisma, { prismaConfig } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Projects() {

    const projects = await prisma.project.findMany({ ...prismaConfig as ProjectFindManyArgs, take: 4 });
    const t = await getTranslations();

    return (
        <div>
            <section>
                <LetterAnimation title="did" />

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-10 max-md:space-y-7">

                    {projects.map(({ id, name, image, technologies }, i) => (
                        <ToAnimation key={id} className="col-span-2 md:col-span-1" to={i % 2 === 0 ? "bottom" : "top"} position={1 + (0.5 * i)}>
                            <div className="relative w-full min-h-40 aspect-2/1 rounded-md overflow-hidden group text-white">
                                <Image
                                    src={projectsHost + image}
                                    alt={name}
                                    fill
                                />

                                {/* blur effect */}
                                <div className="absolute inset-0 group-hover:backdrop-blur-sm">
                                    <div className="absolute top-0 w-[50%] h-0 opacity-0 bg-gray/20 group-hover:h-full group-hover:opacity-100" />
                                    <div className="absolute bottom-0 right-0 w-[50%] h-0 opacity-0 bg-gray/20 group-hover:h-full group-hover:opacity-100" />
                                </div>

                                <h3 className="h3 relative font-semibold text-center z-10 -top-3 group-hover:top-3 group-hover:md:top-7 group-hover:lg:top-9 xl:top-10 tracking-widest opacity-0 group-hover:opacity-100">{name}</h3>
                                <div className="relative flex justify-center items-center w-full h-full -mt-10 -z-10 group-hover:z-10">
                                    <Link href={`/${name.replaceAll(" ", "-")}`} className="primaryBtn py-1! lg:py-3! mt-5! opacity-0! group-hover:opacity-100! right-10 group-hover:right-0">{t("more-details")}</Link>
                                </div>
                                <div className="text-xs lg:text-sm absolute text-center! line-clamp-1 z-10 -bottom-3 group-hover:bottom-6 group-hover:md:bottom-8 group-hover:lg:bottom-9 opacity-0 group-hover:opacity-100 px-3 w-full">{technologies.join(" | ")}</div>
                            </div>
                        </ToAnimation>
                    ))}


                </div>
                <div className="grid grid-cols-3 w-full md:gap-3">
                    <div className="col-span-3 md:col-span-1 max-md:order-2 mt-8 md:mt-16">
                        <ToAnimation to="bottom">
                            <Link href={paths.contact} className="text-lg inline-block w-full py-5 px-10 rounded-lg text-center border border-[#333] bg-transparent! hover:bg-[#333]!">{t("contact")}</Link>
                        </ToAnimation>
                    </div>
                    <div className="col-span-3 md:col-span-2 max-md:order-1 mt-8 md:mt-16">
                        <ToAnimation to="top">
                            <Link href={paths.projects} className="text-lg inline-block w-full py-5 px-10 rounded-lg text-center hover:bg-primary bg-[#333]">{t("more-projects")}</Link>
                        </ToAnimation>
                    </div>
                </div>

            </section>
        </div>
    )
}
