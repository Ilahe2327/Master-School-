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
        <div className='flex flex-col items-center mt-15'>
            <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className='sm:text-6xl text-4xl uppercase font-black p-2'
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
            <motion.div className="sm:w-[80%] w-[90%] mx-auto px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        autoplay.current
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-1 py-5">
                        {publications.map((edition, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 transition-transform duration-300 ease-in-out hover:brightness-97 hover:scale-103 hover:z-10 ">
                                <div className="w-full cursor-pointer">
                                    <Card className="h-[450px]">
                                        <CardContent className="w-full h-full flex flex-col p-0">
                                            <div className="overflow-hidden rounded-t-xl h-[65%]">
                                                <Image
                                                    src={edition.image}
                                                    alt="image"
                                                    width={1080}
                                                    height={1350}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            <CardFooter className='w-full h-[35%] flex flex-col items-center justify-center bg-[#aaaaaa] text-white'>
                                                <p className={`${inter.className} text-center font-black text-2xl`}>
                                                    {edition.name?.[locale as 'az' | 'en' | 'ru'] ?? edition.name?.az}
                                                </p>
                                                <p className={`${roboto.className} text-center px-6 w-full mt-2 font-bold text-sm xl:text-lg line-clamp-2`}>
                                                    {edition.description?.[locale as 'az' | 'en' | 'ru'] ?? edition.description?.az}
                                                </p>
                                            </CardFooter>
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