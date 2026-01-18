"use client";

import SubmitButton from "@/components/buttons/submit-button/submit-button";
import ToAnimation from "@/components/gsap/to-animation";
import useFormLogic from "./use-form-logic";

export default function Form() {

  const {
    t,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  } = useFormLogic()

  return (
    <ToAnimation to="top" order={2} className="col-span-2 lg:col-span-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div>
          <label htmlFor="name" className="h4">
            {t("name")}
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <p className="errorMsg">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="h4">
            {t("email")}
          </label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="h4">
            {t("message")}
          </label>
          <textarea id="message" rows={5} {...register("message")} />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <SubmitButton loading={isSubmitting} disabled={isSubmitting} />
      </form>
    </ToAnimation>
  )
}
