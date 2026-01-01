import { type Project } from "@/app/generated/prisma/client";
import { ProjectFindFirstArgs } from "@/app/generated/prisma/models";
import Back from "@/components/buttons/back/back";
import LetterAnimation from "@/components/gsap/letter-animation";
import prisma, { prismaConfigFindProject } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import Square from '@/components/icons/square';
import { projectsHost } from "@/lib/images-hosts";
import ToAnimation from "@/components/gsap/to-animation";
import { localesType } from "@/lib/localization/routing";

export default async function Project({ params }: { params: Promise<{ locale: string; projectName: string }> }) {

    const { locale, projectName } = await params;
    const project: Project | null = await prisma.project.findFirst(prismaConfigFindProject(projectName) as ProjectFindFirstArgs);
    if (!project) notFound()

    const t = await getTranslations();

    const { name, code, demo, mockup, technologies, logo, video } = project;

    return (
        <section className="mt-28!">

            <LetterAnimation title={name} className="text-primary mt-0 mb-8" withoutTranslate />

            <div className="flex justify-center items-center gap-5">
                <Square className="rotateLeft" />
                <LetterAnimation title="overview" className="my-0!" />
                <Square className="rotateRight" />
            </div>
            <div className="fixed top-0 right-0 z-20 flex items-center h-full">
                <div className="flex flex-col justify-center gap-5 max-md:bg-black/5 dark:max-md:bg-white/5 backdrop-blur-xs max-md:shadow-xl dark:max-md:shadow-black rounded-l-md">
                    <Back />

                    {code && <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col simpleBtn items-center gap-1 font-semibold text-primary hover:text-secondary rounded-none!"
                    >
                        <Image
                            src="/icons/more/code.svg"
                            alt="code"
                            width={30}
                            height={30}
                        />
                        {t("code")}
                    </a>}
                    {demo && <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col simpleBtn items-center gap-1 font-semibold text-primary hover:text-secondary rounded-none!"
                    >
                        <Image
                            src="/icons/more/demo.svg"
                            alt="demo"
                            width={30}
                            height={30}
                        />
                        {t("demo")}
                    </a>}
                </div>
            </div>

            <ToAnimation to="none" className="relative h-[60vw] md:h-[50vw] lg:h-[30vw]">
                <Image
                    src={projectsHost + mockup}
                    alt={name + " mockup"}
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </ToAnimation>

            <div className="flex flex-col gap-16">
                <div className="flex justify-center flex-wrap gap-3 pr-5">
                    {technologies.map((technology, i) =>
                        <ToAnimation key={technology} to="none" position={1 + (.3 * i)}>
                            <h4 className="h4 bg-primary rounded-md px-2 hover:scale-105">{technology}</h4>
                        </ToAnimation>
                    )}
                </div>

                <div className="grid grid-cols-2 items-stretch gap-16">
                    <ToAnimation to="bottom" position={.5} className="relative flex items-center col-span-2 md:col-span-1 max-md:h-65">
                        <Image
                            src={projectsHost + logo}
                            alt={name}
                            fill
                            className="object-contain"
                        />
                    </ToAnimation>

                    <ToAnimation to="top" position={1} className="col-span-2 md:col-span-1 ">
                        <h4 className="h4 border-primary border-dashed border-2 px-5 py-10 text-gray" dangerouslySetInnerHTML={{ __html: project?.[`description_${locale as localesType}`] }}></h4>
                    </ToAnimation>
                </div>

                <ToAnimation>
                    <iframe src={video} width="100%" height="480" title={name} allowFullScreen style={{ maxWidth: '100%', height: 'auto', aspectRatio: '480/229' }}></iframe>
                </ToAnimation>
            </div>
        </section>
    )
}
