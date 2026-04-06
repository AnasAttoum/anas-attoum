import { Information, SocialMedia } from "@/app/generated/prisma/client";
import ToAnimation from "@/components/gsap/to-animation";
import Photo from "@/components/photo/photo";
import SocialLinks from "@/components/social-links/social-links";
import { ENV } from "@/lib/env";
import { localesType } from "@/lib/localization/routing";
import { translate } from "@/lib/localization/translate";
import { useTranslations } from "next-intl";

export default function Intro({ info, socials, locale }: { info: Information; socials: SocialMedia[]; locale: localesType }) {
    const t = useTranslations();

    return (
        <section className="grid grid-cols-3 gap-5 relative">

            {/* Left */}
            <div className="col-span-3 lg:col-span-2 flex flex-col justify-center gap-12">
                <ToAnimation>
                    <h1
                        className="h1"
                        dangerouslySetInnerHTML={{ __html: translate(info, "title", locale) }}
                    />
                </ToAnimation>

                <ToAnimation to="top" order={2}>
                    <h3 className="h3 w-fit">
                        {translate(info, "subTitle", locale)} <span className="inline-block h-3 w-3 bg-primary rounded-full" />
                        <div className="h-1 w-[50%] bg-primary mt-3" />
                    </h3>
                </ToAnimation>

                <ToAnimation to="left" order={3}>
                    <a href={translate(info, "cv", locale)} target="_blank" rel="noreferrer" className="primaryBtn">{t("show-cv")}</a>
                </ToAnimation>
            </div>

            {/* Right */}
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative">
                <ToAnimation to="none" order={4}>
                    <Photo src={ENV.AnasAttoumHost + info.anas_attoum_1} />
                    <SocialLinks socials={socials} className="max-w-90" />
                </ToAnimation>
                <div className="animated-box" />
            </div>
        </section>
    )
}
