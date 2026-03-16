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
import { useLocale, useTranslations } from "next-intl"

const TeamSection = () => {
    const autoplay = React.useRef(Autoplay({ delay: 3000 }))
    const t = useTranslations("Team")
    const locale = useLocale()
    return (
        <div id="mentors" className='flex flex-col items-center'>
            <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className={`font-extrabold sm:text-6xl text-4xl mt-15 text-center  uppercase ${inter.className}`}
                >
                    {t('title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    {t('description')}
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
                        {komanda.map((img, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="w-full">
                                    <Card>
                                        <CardContent className="w-full flex flex-col aspect-[4/5] items-center justify-center">
                                            <Image
                                                src={img.image}
                                                alt={`${img.name}`}
                                                width={1080}
                                                height={1350}
                                                className="w-full h-full rounded-t-xl object-cover"
                                            />
                                            <CardFooter className='w-full '>
                                                <p className={`${roboto.className} text-center max-h-6 font-bold sm:text-xl text-lg `}>{img.name?.[locale as 'az' | 'en' | 'ru'] ?? img.name?.az}</p>
                                            </CardFooter>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer p-4" />
                    <CarouselNext className="cursor-pointer p-4" />
                </Carousel>
            </div>


        </div>
    )
}

export default TeamSection