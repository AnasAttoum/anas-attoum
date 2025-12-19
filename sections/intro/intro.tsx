import Photo from "@/components/photo/photo";

export default function Intro() {
    return (
        <section className="grid grid-cols-3 gap-5 h-dvh relative max-lg:top-30">

            {/* Left */}
            <div className="col-span-3 lg:col-span-2 flex flex-col justify-center gap-12">
                <div className="h1">
                    Hallo, Ich bin <span className="text-primary font-semibold">Anas Attoum</span>
                    <br />
                    Ein Front-End Webentweckler
                </div>

                <div className="h2 w-fit">
                    Lass uns zusammenarbeiten <span className="inline-block h-3 w-3 bg-primary rounded-full" />
                    <div className="h-1 w-[50%] bg-primary mt-3" />
                </div>

                <a href="https://drive.google.com/file/d/1B4xQ9jc5EQa4NA9YpPLpz-vFqYE62ivw/preview" target="_blank" rel="noreferrer" className="primaryBtn">Show CV</a>
            </div>

            {/* Right */}
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center relative">
                <Photo src="/images/anas-attoum-1.jpg"/>
                <div className="animated-box"/>
            </div>
        </section>
    )
}
