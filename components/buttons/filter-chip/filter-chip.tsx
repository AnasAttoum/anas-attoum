import clsx from "clsx";
import { useTranslations } from "next-intl";

type Props = { label: string; active: boolean; onClick: () => void };

export default function FilterChip({ label, active, onClick }: Props) {
    const t = useTranslations();

    return (
        <div
            onClick={onClick}
            className={clsx(
                "h4 chip cursor-pointer",
                !active && "bg-gray!"
            )}
        >
            {t(label)}
        </div>
    );
}