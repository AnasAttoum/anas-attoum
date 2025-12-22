import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import Photo from "@/components/photo/photo";
import { useTranslations } from "next-intl";

export default function About() {

    const t = useTranslations();

    return (
        <section className="grid grid-cols-3 gap-5">

            {/* Left */}
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative max-md:order-2">
                <ToAnimation to="none" position={1.5}>
                    <Photo src="/images/anas-attoum-2.jpg" />
                </ToAnimation>
                {/* <div className="animated-small-box" /> */}
            </div>

            {/* Right */}
            <div className="col-span-3 lg:col-span-2 lg:p-10 flex flex-col justify-center gap-12 max-md:order-1">
                <LetterAnimation title="bit" />
                <ToAnimation position={1}>
                    <p className="h4 text-gray text-justify leading-relaxed">{t("aboutMe")}</p>
                </ToAnimation>

            </div>

        </section>
    )
}
