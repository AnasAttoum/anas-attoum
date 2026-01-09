"use client";

import { useEffect, useMemo, useState } from "react";
import { Project } from "@/app/generated/prisma/client";
import { useRouter } from "@/lib/localization/navigation";
import { paths } from "@/lib/paths";
import ProjectCard from "@/components/cards/project-card";
import FilterChip from "@/components/buttons/filter-chip/filter-chip";

type Props = {
    initialProjects: Project[];
    types: string[];
    initialType?: string;
}

export default function AllProjects({
    initialProjects,
    types,
    initialType
}: Props) {

    const router = useRouter();
    const [currentType, setCurrentType] = useState(initialType ?? null);

    const filtered = useMemo(() => {
        if (!currentType) return initialProjects;
        return initialProjects.filter(p => p.type === currentType);
    }, [currentType, initialProjects]);

    useEffect(() => {
        const url = currentType
            ? {
                pathname: paths.projects,
                query: { type: currentType }
            }
            : paths.projects;
        router.push(url, { scroll: false });
    }, [currentType, router]);

    return (
        <>
            {/* filters */}
            <div className="flex flex-wrap justify-center gap-5 my-10">
                <FilterChip
                    active={!currentType}
                    label="all"
                    onClick={() => setCurrentType(null)}
                />
                {types.map((el) => (
                    <FilterChip
                        key={el}
                        active={currentType === el}
                        label={el + "s"}
                        onClick={() => setCurrentType(el)}
                    />
                ))}
            </div>

            {/* projects */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-10 max-md:space-y-7">
                {filtered.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </>
    );
}
