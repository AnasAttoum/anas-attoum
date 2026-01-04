"use client";

import SubmitButton from "@/components/buttons/submit-button/submit-button";
import ToAnimation from "@/components/gsap/to-animation";
import { toasterError, toasterSuccess } from "@/components/toaster/toaster";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

export default function Form() {

  const t = useTranslations();

  const sendEmail = (
    e: FormEvent<HTMLFormElement>,
    textSuccess: string,
    textError: string,
  ) => {
    try {
      e.preventDefault();
      if (
        process.env.NEXT_PUBLIC_SERVICE_ID &&
        process.env.NEXT_PUBLIC_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.currentTarget,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
      toasterSuccess(textSuccess);

      e.currentTarget.reset();
    } catch (error) {
      console.error("error: ", error);
      toasterError(textError);
    }
  };

  return (
    <ToAnimation to="top" order={2} className="col-span-2 lg:col-span-1">
      <form onSubmit={(e) => sendEmail(e, t("toaster.success"), t("toaster.error"))} className="flex flex-col gap-5">

        <div>
          <label htmlFor="name" className="h4">
            {t("name")}
          </label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email" className="h4">
            {t("email")}
          </label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="message" className="h4">
            {t("message")}
          </label>
          <textarea id="message" name="message" rows={5} />
        </div>

        <SubmitButton />

      </form>
    </ToAnimation>
  )
}
