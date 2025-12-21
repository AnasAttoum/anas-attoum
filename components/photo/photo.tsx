import Image from "next/image";

type Props = {
    src: string;
}

export default function Photo({ src }: Props) {
    return (
        <div className="relative m-5">
            <Image
                src={src}
                alt="Anas Attoum’s picture"
                width={330}
                height={330}
                className="rounded-3xl border-8 border-secondary hover:scale-105 hover:rotate-3"
            />
            <span className="second-border" />
        </div>
    )
}