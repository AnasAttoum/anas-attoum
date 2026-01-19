import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import Photo from "@/components/photo/photo";
import { AnasAttoum2 } from "@/lib/images-hosts";
import { useTranslations } from "next-intl";

export default function About() {

    const t = useTranslations();

    return (
        <section>
            <LetterAnimation title="bit" />
            <div className="grid grid-cols-3 gap-5">
                {/* Left */}
                <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative max-lg:order-2">
                    <ToAnimation to="none" order={2}>
                        <Photo src={AnasAttoum2!} />
                    </ToAnimation>
                    {/* <div className="animated-small-box" /> */}
                </div>

                {/* Right */}
                <div className="col-span-3 lg:col-span-2 lg:p-10 flex flex-col justify-center gap-12 max-lg:order-1">
                    <ToAnimation to="left" order={3}>
                        <h4 className="h4 text-gray text-justify leading-relaxed">{t("about-me")}</h4>
                    </ToAnimation>
                </div>
            </div>

        </section>
    )
}
