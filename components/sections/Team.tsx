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
                    className="w-full"
                >
                    <CarouselContent className="-ml-1 py-5">
                        {komanda.map((img, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 transition-transform duration-300 ease-in-out hover:brightness-97 hover:scale-103 hover:z-10 ">
                                <div className="w-full cursor-pointer">
                                    <Card className="w-full overflow-hidden h-[450px]">
                                        <CardContent className="w-full h-full flex flex-col p-0">
                                            <Image
                                                src={img.image}
                                                alt={`${img.name}`}
                                                width={1080}
                                                height={1350}
                                                className="w-full h-85 object-cover object-top"
                                            />
                                            <CardFooter className='w-full h-[35%] flex flex-col items-center justify-center bg-[#aaaaaa] text-white'>
                                                <p className={`${roboto.className} text-center px-6 w-full mt-2 font-bold text-sm xl:text-lg line-clamp-2 `}>{img.name?.[locale as 'az' | 'en' | 'ru'] ?? img.name?.az}</p>
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