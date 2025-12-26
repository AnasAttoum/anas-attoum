import Image from "next/image"
import ToAnimation from "../gsap/to-animation"
import { skillsHost } from "@/lib/images-hosts"
import { Skill } from "@/app/generated/prisma/client"

type Props = {
    skill: Skill;
    index: number;
}

export default function SkillCard({ skill, index }: Props) {
    const { name, color, image } = skill;
    return (
        <ToAnimation to="none" position={1 + (0.5 * index)}>
            <div className="relative flex justify-center items-center w-37 h-37 shadow dark:shadow-black bg-white dark:bg-gray transition-all duration-300 rounded-[50%] hover:rounded-lg group">
                <Image src={skillsHost + image} alt={name} width={100} height={100} className="group-hover:-translate-y-12" />
                <h4
                    className="h4 absolute place-content-center -z-10 opacity-0 group-hover:translate-y-8 group-hover:z-10 group-hover:opacity-100 font-medium"
                    style={{ color }}
                >
                    {name}
                </h4>
            </div>
        </ToAnimation>
    )
}