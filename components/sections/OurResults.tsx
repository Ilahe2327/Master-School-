'use client'
import * as React from "react"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { inter, roboto } from "../layout/Navbar"
import { komanda } from "@/data/publicData/images"
import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { branches } from "@/data/branchData/data"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"

const OurResults = () => {
  const resultsFirst = Array.from({ length: 8 }, (_, index) => `/neticeler/img${index + 2}.png`)
  const resultsSecond = Array.from({ length: 15 }, (_, index) => `/neticeler/img${index + 1}.png`)
  const [open, setOpen] = React.useState(false)
  const t = useTranslations('OurResults')
  return (
    <div className='flex flex-col items-center'>
      <div className={`${inter.className} text-center flex justify-center gap-3 items-center flex-col h-auto md:p-10 py-10 text-white`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`font-extrabold sm:text-6xl text-4xl mt-15  uppercase ${inter.className}`}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {t("description")}
        </motion.p>
      </div>

      <div className="grid grid-cols-8 container mx-auto gap-5 w-full">
        <div className="grid place-items-center h-auto lg:col-span-3 col-span-8 ml-3 mr-3 ">
          <Image src={'/neticeler/img1.png'} alt="Respublika ikincisi" width={1503} height={1473} className=" sm:w-[400px] sm:h-[370px] lg:w-full lg:h-auto xl:w-[450px] xl:h-[450px] rounded-2xl " />
        </div>
        <div className="col-span-8 lg:col-span-5 ml-3 mr-3 ">
          <div className="w-full place-items-center grid">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 w-full mb-5 mt-15">
              {
                resultsFirst.map((img, index) => (
                  <div key={index} className="w-full ">
                    <Image src={img} alt={`Neticeler image${index + 1}`} width={1503} height={1473}
                      className=" w-full h-full lg:w-[190px] lg:h-[160px]  rounded-xl" />
                  </div>
                ))
              }
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant={'link'} className="float-right mb-5 font-bold bg-white cursor-pointer ">{t('button')}</Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] p-6" style={{
                zIndex:'1007'
              }} >
                <DialogHeader className="w-full">
                  <DialogTitle className={`${inter.className} text-2xl md:text-3xl lg:text-4xl text-center font-bold`}>{t("title")}</DialogTitle>
                  <DialogDescription asChild>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mt-8'>
                      {
                        resultsSecond.map((img, index) => (
                          <div key={index} className="border-4 border-[#518df4] rounded-3xl overflow-hidden">
                            <Image src={img} alt={`Neticeler image${index + 1}`} width={1503} height={1473} className="w-full h-auto md:h-[240px] object-cover rounded-2xl" />
                          </div>
                        ))
                      }
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
              {/* <DialogContent className="!left-[50%] !translate-x-[-50%] w-[72vw] max-w-6xl max-h-[85vh] overflow-y-auto p-4 md:p-6">
                <DialogHeader className="w-full">
                  <DialogTitle className={`${inter.className} text-xl md:text-3xl text-center font-bold mb-4`}>
                    Abituriyent Nəticələrimiz
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mt-4 px-1">
                      {resultsSecond.map((img, index) => (
                        <div key={index} className="border-4 border-[#518df4] rounded-2xl overflow-hidden aspect-square">
                          <Image
                            src={img}
                            alt={`Neticeler image${index + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent> */}
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurResults