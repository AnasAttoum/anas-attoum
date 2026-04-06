import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import SocialLinks from "@/components/social-links/social-links";
import { getTranslations } from "next-intl/server"
import Form from "./form/form";
import prisma, { prismaConfig } from "@/lib/prisma";
import { SocialMediaFindManyArgs } from "@/app/generated/prisma/models";
import { translate } from "@/lib/localization/translate";
import { localesType } from "@/lib/localization/routing";

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title: t("contact"),
    };
}

export default async function Contact({ params }: { params: Promise<{ locale: localesType; }> }) {
    const { locale } = await params;

    const t = await getTranslations();
    const [info, socials] = await Promise.all([
        prisma.information.findFirst(),
        prisma.socialMedia.findMany(prismaConfig as SocialMediaFindManyArgs),
    ]);

    return (
        <section className="mt-28!">
            <LetterAnimation title="contact-me" />

            <div className="grid grid-cols-2 gap-20 items-stretch">

                <ToAnimation to="bottom" className="relative col-span-2 lg:col-span-1 mx-5 md:mx-10">
                    <div className="h-full flex flex-col gap-10 justify-evenly bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-xl dark:shadow-black rounded-xl p-3 md:p-10">
                        <h3
                            className="h3 text-primary text-center font-semibold"
                            dangerouslySetInnerHTML={{ __html: translate(info, "contact_title", locale) }}
                        />
                        <div
                            className="text-gray"
                            dangerouslySetInnerHTML={{ __html: translate(info, "contact_subTitle", locale) }}
                        />
                        <SocialLinks socials={socials} className="mt-0!" />
                        <p className="text-center">{t("code-with")}</p>
                    </div>

                    <div className="primaryCircle -top-10 -left-7 md:-left-15" />
                    <div className="primaryCircle top-10 -right-7 md:-right-15" />
                    <div className="primaryCircle bottom-10 -left-7 md:-left-15" />
                    <div className="primaryCircle -bottom-10 -right-7 md:-right-15" />
                </ToAnimation>

                <Form />

            </div>

        </section>
    )
}
