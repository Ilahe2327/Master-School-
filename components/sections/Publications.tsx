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
import { useLocale } from "next-intl"
import { useTranslations } from "use-intl"
const Publications = () => {
    const autoplay = React.useRef(Autoplay({ delay: 3000 }))
    const locale = useLocale()
    const t = useTranslations('Publication')
    return (
        <div className='flex flex-col items-center'>
            <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className='sm:text-6xl text-4xl uppercase font-black p-2'
                    style={{
                        background: 'radial-gradient(circle, #091057, #070F2B, #091057, #091057)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'textShine 6s linear infinite'  // burda sadəcə animation timing
                    }}
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
                                    <Card className="min-h-[430px] max-h-[450px]">
                                        <CardContent className="w-full h-full flex flex-col gap-3 aspect-square items-center justify-center">
                                            <div className="publicCardContent min-h-auto max-h-auto mt-15 sm:mt-10 lg:mt-10 xl:mt-2 py-5 border rounded-2xl border-[#518df4]">
                                                <Image src={edition.image} alt="image" width={1080} height={1350} className="h-[240px] object-cover" />
                                            </div>
                                            <div className="min-h-[0px]  w-full">
                                                <p className={`${inter.className} text-center max-h-6 mb-3 font-black text-2xl`}>{edition.name?.[locale as 'az' | 'en' | 'ru'] ?? edition.name?.az}</p>
                                                <p className={`${roboto.className} text-center bg-[#518df4] p-2 px-6 w-full mt-3 rounded font-bold text-sm sm:text-sm xl:text-lg`}>
                                                    {edition.description?.[locale as 'az' | 'en' | 'ru'] ?? edition.description?.az}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer" />
                    <CarouselNext className="cursor-pointer" />
                </Carousel>
            </motion.div>
        </div >
    )
}

export default Publications