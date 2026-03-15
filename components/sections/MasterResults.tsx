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
import { Button } from "../ui/button"

const MasterResults = () => {
    // const masterNeticeler = Array.from({ length: 8 }, (_, index) => { index + 1 !== 2 && `/masterNeticeler/img${index + 1}.webp` })
    const masterNeticeler = Array.from({ length: 8 }, (_, index) => `/magistrNeticeler/img${index + 2}.webp`)
    return (
        <div className='flex flex-col items-center'>
            <div className={`${inter.className} flex justify-center gap-3 text-center items-center flex-col h-auto md:p-10 py-10 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className={`font-extrabold sm:text-6xl text-4xl mt-15  uppercase ${inter.className}`}
                >
                    Magistratura Nəticələrimiz
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    Kursumuzun olmazsa olmazı yüksək magistratura nəticələrimiz
                </motion.p>
            </div>

            <div className="grid grid-cols-9 container mx-auto xl:gap-0 gap-5 w-full">
                <div className="col-span-9 lg:col-span-5 xl:col-span-6 ml-3 mr-3 flex justify-evenly h-auto gap-y-14">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-5 w-full place-content-center h-auto order-last lg:order-first">
                        {
                            masterNeticeler.map((img, index) => (
                                <div key={index} className="w-full ">
                                    <Image src={img} alt={`Neticeler image${index + 2}`} width={1503} height={1473} className="xl:w-full xl:h-auto lg:w-[160px] lg:h-[160px]  rounded-xl" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid place-items-center h-auto lg:col-span-4 xl:col-span-3 col-span-9 ml-3 mr-3 order-first lg:order-last">
                    <Image src={'/magistrNeticeler/img1.webp'} alt="Respublika ikincisi" width={1503} height={1473} className="sm:w-[400px] sm:h-[370px]  lg:w-full lg:h-auto xl:w-full xl:h-auto rounded-2xl  " />
                </div>
            </div>
        </div>
    )
}

export default MasterResults