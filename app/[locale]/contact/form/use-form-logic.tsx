import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toasterError, toasterSuccess } from "@/components/toaster/toaster";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useFormLogic() {

    const t = useTranslations();

    const formSchema = z.object({
        name: z
            .string()
            .min(1, t("validation.required")),

        email: z
            .email(
                {
                    error: (issue) =>
                        issue.input === ""
                            ? t("validation.required")
                            : t("validation.invalid-email"),
                }),

        message: z
            .string()
            .min(1, t("validation.required")),
    });
    type FormValues = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        defaultValues: { name: "", email: "", message: "" },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (_: FormValues, e?: React.BaseSyntheticEvent) => {
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                e?.target,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            );

            reset();
            toasterSuccess(t("toaster.success"));
        } catch (error) {
            console.error("error: ", error);
            toasterError(t("toaster.error"));
        }
    }

    return {
        t,
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting,
    }
}
