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

const OurResults = () => {
  const resultsFirst = Array.from({ length: 8 }, (_, index) => `/neticeler/img${index + 2}.png`)
  const resultsSecond = Array.from({ length: 15 }, (_, index) => `/neticeler/img${index + 1}.png`)
  const [open, setOpen] = React.useState(false)
  return (
    <div className='flex flex-col items-center'>
      <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`font-extrabold text-5xl mt-15  uppercase ${inter.className}`}
        >
          Abituriyent Nəticələrimiz
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Kursumuzun olmazsa olmazı yüksək nəticələrimiz
        </motion.p>
      </div>

      <div className="grid grid-cols-8 container mx-auto gap-5 w-full">
        <div className="grid place-items-center h-auto col-span-3">
          <Image src={'/neticeler/img1.png'} alt="Respublika ikincisi" width={1503} height={1473} className="w-[450px] h-[450px] rounded-2xl " />
        </div>
        <div className="col-span-5 ">
          <div className="w-full place-items-center grid">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full mb-5 mt-15">
              {
                resultsFirst.map((img, index) => (
                  <div key={index} className="w-full ">
                    <Image src={img} alt={`Neticeler image${index + 1}`} width={1503} height={1473} className="w-[190px] h-[160px] rounded-xl" />
                  </div>
                ))
              }
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant={'link'} className="float-right mb-5 font-bold bg-white cursor-pointer ">Hamısını göstər</Button>
                </DialogTrigger>
              <DialogContent className="w-[2600px]">
                <DialogHeader className="w-full">
                  <DialogTitle className={`${inter.className} text-4xl text-center font-bold`}>Abituriyent Nəticələrimiz</DialogTitle>
                  <DialogDescription>
                    <div className={'w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8'}>
                      {
                        resultsSecond.map((img, index) => (
                          <div key={index} className="border-4 border-[#518df4] rounded-3xl">
                            <Image src={img} alt={`Neticeler image${index + 1}`} width={1503} height={1473} className="w-[250px] h-[170px] rounded-xl" />
                          </div>
                        ))
                      }
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurResults