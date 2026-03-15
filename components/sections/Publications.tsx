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
import { komanda, publications } from "@/data/publicData/images"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { branches } from "@/data/branchData/data"
const Publications = () => {
    const autoplay = React.useRef(Autoplay({ delay: 3000 }))
    return (
        <div className='flex flex-col items-center'>
            <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className='text-6xl uppercase font-black p-2'
                    style={{
                        background: 'radial-gradient(circle, #091057, #070F2B, #091057, #091057)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'textShine 6s linear infinite'  // burda sadəcə animation timing
                    }}
                >
                    Nəşrlərimiz
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="w-[70%] text-center"
                >
                    Burada magistr, doktorantura, dövlət qulluğu və abituriyent imtahanları üçün ən keyfiyyətli tədris vəsaitləri ilə tanış ola bilərsiniz.
                </motion.p>
            </div>
            <motion.div className="w-[70%] mx-auto">
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
                        {publications.map((edition, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="">
                                    <Card className="min-h-[430px]">
                                        <CardContent className="w-full h-full flex flex-col gap-3 aspect-square items-center justify-center">
                                            <div className="min-h-auto py-5 border rounded-2xl border-[#518df4]">
                                                <Image src={edition.image} alt="Nəşrlər" width={1080} height={1350} className="h-[240px] object-cover" />
                                            </div>
                                            <div className="min-h-[0px] w-full">
                                                <p className={`${inter.className} text-center max-h-6 mb-3 font-black text-2xl`}>{edition.name}</p>
                                                <p className={`${roboto.className} text-center bg-[#518df4] p-2 px-6 w-full mt-5 rounded font-bold text-lg`}>
                                                    {edition.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious  className="cursor-pointer" />
                    <CarouselNext className="cursor-pointer" />
                </Carousel>
            </motion.div>
        </div >
    )
}

export default Publications