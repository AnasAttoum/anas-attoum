import { Information } from "@/app/generated/prisma/client";
import LetterAnimation from "@/components/gsap/letter-animation";
import ToAnimation from "@/components/gsap/to-animation";
import Photo from "@/components/photo/photo";
import { ENV } from "@/lib/env";
import { localesType } from "@/lib/localization/routing";
import { translate } from "@/lib/localization/translate";

export default function About({ info, locale }: { info: Information; locale: localesType }) {

    return (
        <section>
            <LetterAnimation title="bit" />
            <div className="grid grid-cols-3 gap-5">
                {/* Left */}
                <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative max-lg:order-2">
                    <ToAnimation to="none" order={2}>
                        <Photo src={ENV.AnasAttoumHost + info.anas_attoum_2} />
                    </ToAnimation>
                    {/* <div className="animated-small-box" /> */}
                </div>

                {/* Right */}
                <div className="col-span-3 lg:col-span-2 lg:p-10 flex flex-col justify-center gap-12 max-lg:order-1">
                    <ToAnimation to="left" order={3}>
                        <h4
                            className="h4 text-gray text-justify leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: translate(info, "about", locale) }}
                        />
                    </ToAnimation>
                </div>
            </div>

        </section>
    )
}
