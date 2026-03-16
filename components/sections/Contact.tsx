"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { inter, roboto } from "../layout/Navbar"
import { useLocale, useTranslations } from "next-intl"

const messages = {
  az: {
    nameMin: "Ad ən az 3 hərfdən ibarət olmalıdı.",
    lastNameMin: "Soyad ən az 3 hərfdən ibarət olmalıdı.",
    emailRequired: "Email boş qalmamalıdır!",
    emailInvalid: "Düzgün email daxil edin!",
    bugTitleMin: "Başlıq azı 5 hərfdən ibarət olmalıdır!",
    bugTitleMax: "Başlıq çoxu 100 hərfdən ibarət olmalıdır!",
    bugDescMin: "Təsvir ən az 20 hərfdən ibarət olmalıdır.",
    bugDescMax: "Təsvir 500 hərfdən artıq olmamalıdır.",
  },
  en: {
    nameMin: "Name must be at least 3 characters.",
    lastNameMin: "Last name must be at least 3 characters.",
    emailRequired: "Email cannot be empty!",
    emailInvalid: "Enter a valid email!",
    bugTitleMin: "Title must be at least 5 characters.",
    bugTitleMax: "Title cannot exceed 100 characters.",
    bugDescMin: "Description must be at least 20 characters.",
    bugDescMax: "Description cannot exceed 500 characters.",
  },
  ru: {
    nameMin: "Имя должно быть не менее 3 символов.",
    lastNameMin: "Фамилия должна быть не менее 3 символов.",
    emailRequired: "Email не может быть пустым!",
    emailInvalid: "Введите корректный email!",
    bugTitleMin: "Заголовок должен быть не менее 5 символов.",
    bugTitleMax: "Заголовок не должен превышать 100 символов.",
    bugDescMin: "Описание должно быть не менее 20 символов.",
    bugDescMax: "Описание не может превышать 500 символов.",
  }
}
const ContactPage = () => {

  const t = useTranslations('contact')
  const locale = useLocale() as "az" | "en" | "ru";
  const tMessages = messages[locale];
  const bugReportSchema = React.useMemo(
    () =>
      z.object({
        name: z.string().min(3, tMessages.nameMin),
        lastName: z.string().min(3, tMessages.lastNameMin),
        email: z.string()
          .min(1, tMessages.emailRequired)
          .email(tMessages.emailInvalid),
        bugTitle: z.string()
          .min(5, tMessages.bugTitleMin)
          .max(100, tMessages.bugTitleMax),
        bugDescription: z.string()
          .min(20, tMessages.bugDescMin)
          .max(500, tMessages.bugDescMax),
      }),
    [tMessages]
  );



  type BugReportType = z.infer<typeof bugReportSchema>
  const {
    register,                        // input-ları forma bağlamaq üçün
    handleSubmit,                    // submit-i idarə edir
    formState: { errors, isSubmitting },  // xətalar və göndərmə vəziyyəti
    reset,                           // formu sıfırlamaq üçün
  } = useForm<BugReportType>({
    resolver: zodResolver(bugReportSchema),
    defaultValues: {
      name: "",
      email: "",
      bugTitle: "",
      bugDescription: "",
    },
  })
  function onSubmit(data: BugReportType) {
    emailjs.send(
      "service_dixit6m",
      "template_b7vpcgj",
      {
        user_name: data.name,
        user_lastname: data.lastName,
        user_email: data.email,
        user_bugTitle: data.bugTitle,
        user_bugDescription: data.bugDescription
      },
      "Gqsm660dq0PKd7iL3"
    )
      .then(() => {
        toast.success("Mesaj göndərildi!");
        reset();
      })
      .catch((error) => {
        toast.error("Mesaj göndərilmədi, xətalıdır!");
        console.error("Error sending email:", error);
      })
  }
  return (
    <div id="contact" className="container mx-auto my-20">
      <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto md:p-10 p-5 text-white`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className='sm:text-6xl text-5xl uppercase font-black text-center p-2'
        >
          {t('title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="w-[70%] text-center"
        >
          {t('description')}

        </motion.p>
      </div>
      <div className="w-full flex justify-start items-center my-10 rounded-2xl" style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)'
      }}>
        <Card className="w-full text-center bg-transparent flex flex-col mx-auto" >
          <CardHeader className="text-white" >
            <CardTitle className={`${roboto.className} text-4xl font-bold mt-8`}>{t('cardTitle')}</CardTitle>
            <CardDescription className={`${roboto.className} text-white text-xl`}>
              {t('cardDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>

            <div className={`${inter.className} md:hidden text-blue-900 w-full mx-auto gap-2 text-sm justify-between flex flex-col mt-10`} >
              <div className="bg-white text-lg px-7 py-3 flex flex-col rounded-2xl cursor-pointer">
                <b>{t('email')} : </b>info@masterschool.az</div>
              <div className="flex justify-between gap-2">
                <div className="bg-white w-1/2 px-7 py-3 rounded-2xl flex flex-col cursor-pointer">
                  <span><b>{t('telefon')} : </b></span>
                  070 710 33 43</div>
                <div className="bg-white w-1/2 p-5 px-7 py-3 flex flex-col rounded-2xl cursor-pointer"><b>{t("isSaatlari")} :</b> 08:30 - 20:00
                </div>
              </div>
            </div>

            <div className={`${inter.className} hidden md:flex text-blue-900 md:w-4/5 mx-auto gap-2 lg:text-lg xl:text-xl justify-between mt-10`} >
              <div className="bg-white w-1/3 lg:p-5 px-7 py-3 rounded-2xl flex flex-col xl:flex-row cursor-pointer">
                <span><b>{t('telefon')} : </b></span>
                070 710 33 43</div>
              <div className="bg-white w-1/3 lg:p-5 px-7 py-3 flex flex-col xl:flex-row rounded-2xl cursor-pointer">
                <b>{t('email')} : </b>info@masterschool.az</div>
              <div className="bg-white  w-1/3 lg:p-5 px-7 py-3 flex flex-col xl:flex-row rounded-2xl cursor-pointer"><b>{t("isSaatlari")} :</b> 08:30 - 20:00
              </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="md:w-4/5 w-full h-auto text-xl mx-auto flex flex-col items-start gap-3  ">
              <div className="w-full h-auto text-xl mx-auto flex flex-col items-start gap-3 mt-10 border-white border-3 rounded-2xl md:p-10 p-5 text-white">
                <div className="flex flex-col md:flex-row gap-3 w-full justify-center items-center">
                  <div className="flex space-x-3 w-full md:w-1/2 items-center">
                    <div className="flex flex-col w-full">
                      <input
                        {...register("name")}
                        type="text"
                        placeholder={t('name')}
                        className="border p-3 w-full"
                      />
                      {errors.name && (
                        <p className={`${inter.className} text-[#ff1c1c] text-bold text-left text-xl`}>{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-3 w-full md:w-1/2 items-center">
                    <div className="flex flex-col w-full">
                      <input
                        {...register("lastName")}
                        type="text"
                        placeholder={t('lastName')}
                        className="border p-3 w-full"
                      />
                      {errors.name && (
                        <p className={`${inter.className} text-[#ff1c1c] text-bold text-left text-xl`}>{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex space-x-3 w-full justify-center items-center">
                  <div className="flex flex-col w-full">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder={`${t('email')}*`}
                      className="border p-3 w-full"
                    />
                    {errors.email && (
                      <p className={`${inter.className} text-[#ff1c1c] text-bold text-left text-xl`}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* BUG BAŞLIĞI */}
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex- flex-col w-full">
                    <input
                      {...register("bugTitle")}
                      type="text"
                      placeholder={t('bugTitle')}
                      className="border p-3 w-full"
                    />
                    {errors.bugTitle && (
                      <p className={`${inter.className} text-[#ff1c1c] text-bold text-left text-xl`}>{errors.bugTitle.message}</p>
                    )}
                  </div>

                </div>

                {/* BUG İZAHI */}
                <div className="flex space-x-3 w-full justify-center">
                  <div className="flex- flex-col w-full">
                    <textarea
                      {...register("bugDescription")}
                      placeholder={t('bugDescription')}
                      rows={5}
                      className="border p-3 w-full"
                    />
                    {errors.bugDescription && (
                      <p className={`${inter.className} text-[#ff1c1c] text-bold text-left text-xl`}>{errors.bugDescription.message}</p>
                    )}
                  </div>

                </div>
              </div>
              <div className="flex justify-end w-full space-x-2">
                <Button
                  className={`cursor-pointer text-[#] p-5 text-blue-900  bg-white ${roboto.className}`}
                  type="button"
                  onClick={() => reset()}
                >
                  {t("buttonReset")}
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer bg-white text-blue-900  p-5 ${roboto.className}`}
                >
                  {isSubmitting ? <p>{t("buttonSending")}</p> : <p>{t('buttonSubmit')}</p>}
                </Button>
              </div>
            </form>
          </CardContent>

        </Card >
      </div>
    </div>

  )
}

export default ContactPage