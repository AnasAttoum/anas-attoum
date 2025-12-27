import { ProjectFindManyArgs } from "@/app/generated/prisma/models";
import ProjectCard from "@/components/cards/project-card";
import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import { Link } from "@/lib/localization/navigation";
import { paths } from "@/lib/paths";
import prisma, { prismaConfig } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";

export default async function Projects() {

    const projects = await prisma.project.findMany({ ...prismaConfig as ProjectFindManyArgs, take: 4 });
    const t = await getTranslations();

    return (
        <section>
            <LetterAnimation title="did" />

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-10 max-md:space-y-7">

                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}


            </div>
            <div className="grid grid-cols-3 w-full md:gap-3">
                <div className="col-span-3 md:col-span-1 max-md:order-2 mt-8 md:mt-16">
                    <ToAnimation to="bottom" position={.5}>
                        <Link href={paths.contact} className="text-lg inline-block w-full py-5 px-10 rounded-lg text-center border border-dark-gray bg-transparent! hover:bg-dark-gray! hover:text-white">{t("contact")}</Link>
                    </ToAnimation>
                </div>
                <div className="col-span-3 md:col-span-2 max-md:order-1 mt-8 md:mt-16">
                    <ToAnimation to="top" position={1}>
                        <Link href={paths.projects} className="text-lg text-white inline-block w-full py-5 px-10 rounded-lg text-center hover:bg-primary bg-dark-gray">{t("more-projects")}</Link>
                    </ToAnimation>
                </div>
            </div>

        </section>
    )
}
