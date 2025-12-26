import { ProjectFindManyArgs } from "@/app/generated/prisma/models";
import ProjectCard from "@/components/cards/project-card";
import prisma, { prismaConfig } from "@/lib/prisma";

export default async function Projects() {

    const projects = await prisma.project.findMany(prismaConfig as ProjectFindManyArgs);

    return (
        <section>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-10 max-md:space-y-7">

                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}

            </div>
        </section>
    )
}
