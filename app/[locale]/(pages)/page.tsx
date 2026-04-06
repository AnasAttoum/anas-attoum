import { ProjectFindManyArgs, SkillFindManyArgs, SocialMediaFindManyArgs } from "@/app/generated/prisma/models";
import { localesType } from "@/lib/localization/routing";
import prisma, { prismaConfig } from "@/lib/prisma";
import About from "@/sections/about";
import Intro from "@/sections/intro";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";

export default async function Home({ params }: { params: Promise<{ locale: localesType; }> }) {
  const { locale } = await params;

  const [info, skills, projects, socials] = await Promise.all([
    prisma.information.findFirst(),
    prisma.skill.findMany(prismaConfig as SkillFindManyArgs),
    prisma.project.findMany({ ...prismaConfig as ProjectFindManyArgs, take: 4 }),
    prisma.socialMedia.findMany(prismaConfig as SocialMediaFindManyArgs),
  ]);

  return (
    <>
      <Intro info={info!} socials={socials} locale={locale} />
      <About info={info!} locale={locale} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </>
  );
}
