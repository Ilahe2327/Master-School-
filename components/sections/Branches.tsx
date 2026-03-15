'use client'
import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { inter, roboto } from "../layout/Navbar"
import { komanda } from "@/data/publicData/images"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { branches } from "@/data/branchData/data"

const BranchesSection = () => {
  const autoplay = React.useRef(Autoplay({ delay: 3000 }))
  return (
    <div id="branch" className='flex flex-col items-center'>
      <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`font-black sm:text-6xl text-4xl my-3   uppercase ${inter.className}`}
          style={{
            background: 'radial-gradient(circle, #091057, #070F2B, #091057, #091057)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'textShine 6s linear infinite'  // burda sadəcə animation timing
          }}
        >
          Filiallarımız
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Şəhərin müxtəlif nöqtələrində sizə xidmət göstəririk
        </motion.p>
      </div>
      <div className="w-[70%] mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            autoplay.current
          ]}
        >
          <CarouselContent className="-ml-1">
            {branches.map((branch, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"><Link href={`/filiallar/${branch.slug.toLowerCase().replace(' ', '-')}`}>
                <div className="w-full">
                  <Card className=" text-white" style={{
                    // background: 'radial-gradient(ellipse at top, #070F2B, #070F2B, #070F2B,#070F2B)'
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)'
                  }}>
                    <CardContent className="w-full flex flex-col aspect-square items-center justify-center space-y-8">
                      <p className={`${roboto.className} text-center max-h-6 font-bold text-4xl  drop-shadow-[0_0_17px_rgba(255,255,255,0.8)]
  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]`} >{branch.title}</p>
                      <p className={`${roboto.className} text-center max-h-6 font-bold text-xl`}>
                        {branch.telefon[0]}
                      </p>
                    </CardContent>
                  </Card>

                </div>
              </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white  border-none text-blue-900 cursor-pointer " />
          <CarouselNext className="bg-white border none text-blue-900 tet-2xl cursor-pointer" />
        </Carousel>
      </div>


    </div>
  )
}

export default BranchesSection