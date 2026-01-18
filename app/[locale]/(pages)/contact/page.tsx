import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import SocialLinks from "@/components/social-links/social-links";
import { getTranslations } from "next-intl/server"
import Form from "./form/form";

export default async function Contact() {

    const t = await getTranslations();

    return (
        <section className="mt-28!">
            <LetterAnimation title="contact-me" />

            <div className="grid grid-cols-2 gap-20 items-stretch">

                <ToAnimation to="bottom" className="relative col-span-2 lg:col-span-1 mx-5 md:mx-10">
                    <div className="h-full flex flex-col gap-10 justify-evenly bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-xl dark:shadow-black rounded-xl p-3 md:p-10">
                        <h3 className="h3 text-primary text-center font-semibold">{t.rich("lets-connect", { br: () => <br /> })}</h3>
                        <p className="text-gray">{t.rich("drop-message", { br: () => <br /> })}</p>
                        <SocialLinks className="mt-0!" />
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
