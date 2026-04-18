import { ProjectFindManyArgs } from "@/app/generated/prisma/models";
import LetterAnimation from "@/components/gsap/letter-animation";
import { ENV } from "@/lib/env";
import prisma, { prismaConfig } from "@/lib/prisma";
import AllProjects from "@/sections/all-projects";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t("projects"),
  };
}

export default async function Projects({ searchParams }: { searchParams: Promise<{ type?: string }> }) {

    const search = await searchParams;
    const { type } = search;

    const projects = await prisma.project.findMany(prismaConfig as ProjectFindManyArgs);
    const types = [...new Set(projects.map(p => p.type))].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    return (
        <section className="mt-28!">
            <LetterAnimation title="projects" className="mb-0" />

            <AllProjects
                initialProjects={projects.map((el) => ({ ...el, image: ENV.projectsHost + el.image }))}
                types={types}
                initialType={type}
            />
        </section>
    )
}
