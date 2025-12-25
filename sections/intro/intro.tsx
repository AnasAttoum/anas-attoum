import ToAnimation from "@/components/gsap/to-animation";
import Photo from "@/components/photo/photo";
import SocialLinks from "@/components/social-links/social-links";
import { useTranslations } from "next-intl";

export default function Intro() {

    const t = useTranslations();

    return (
        <section className="grid grid-cols-3 gap-5 relative">

            {/* Left */}
            <div className="col-span-3 lg:col-span-2 flex flex-col justify-center gap-12">
                <ToAnimation>
                    <h1 className="h1">
                        {t("hi")} <span className="text-primary font-semibold">Anas Attoum</span>
                        <br />
                        {t("front-end-dev")}
                    </h1>
                </ToAnimation>

                <ToAnimation to="top" position={1}>
                    <h3 className="h3 w-fit">
                        {t("lets-work-together")} <span className="inline-block h-3 w-3 bg-primary rounded-full" />
                        <div className="h-1 w-[50%] bg-primary mt-3" />
                    </h3>
                </ToAnimation>

                <ToAnimation to="left" position={1.5}>
                    <a href="https://drive.google.com/file/d/1B4xQ9jc5EQa4NA9YpPLpz-vFqYE62ivw/preview" target="_blank" rel="noreferrer" className="primaryBtn">{t("show-cv")}</a>
                </ToAnimation>
            </div>

            {/* Right */}
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative">
                <ToAnimation to="none" position={2}>
                    <Photo src="/images/anas-attoum-1.jpg" />
                    <SocialLinks />
                </ToAnimation>
                <div className="animated-box" />
            </div>
        </section>
    )
}
