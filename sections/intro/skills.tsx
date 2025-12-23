import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import prisma, { prismaConfig } from "@/lib/prisma";
import Image from "next/image";

export default async function Skills() {

    const skills = await prisma.skill.findMany(prismaConfig);

    return (
        <div>
            <section>
                <LetterAnimation title="love" className="text-center" />

                <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-10 max-md:space-y-7">

                    {skills.map(({ id, name, color, image }, i) =>
                        <ToAnimation key={id} to="none" position={1 + (0.5 * i)}>
                            <div className="relative flex justify-center items-center w-37 h-37 shadow dark:shadow-black bg-white dark:bg-gray transition-all duration-300 rounded-[50%] hover:rounded-lg group">
                                <Image src={process.env.SKILLS_IMAGES_HOST + image} alt={name} width={100} height={100} className="group-hover:-translate-y-12" />
                                <span
                                    className="absolute place-content-center -z-10 opacity-0 group-hover:translate-y-8 group-hover:z-10 group-hover:opacity-100 font-medium h4"
                                    style={{ color }}
                                >
                                    {name}
                                </span>
                            </div>
                        </ToAnimation>
                    )}

                </div>

            </section>
        </div>
    )
}
