'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { inter } from '../layout/Navbar'
import { useTranslations } from 'next-intl'
const Partners = () => {
    const t = useTranslations('Partners')
    return (
        <div className='flex flex-col items-center w-[90%] mx-auto min-h-[80vh]'>
            <div className={`${inter.className} text-center flex justify-center gap-3 items-center flex-col h-auto md:p-10 py-10 mx-2 text-white`}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className={`font-extrabold sm:text-6xl text-4xl mt-15 uppercase ${inter.className}`}
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
            {/* <div className={`${inter.className}  col-span-9 text-center `}>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className='sm:text-6xl text-3xl uppercase font-black p-2'
                    style={{
                        background: 'radial-gradient(circle, #091057, #070F2B, #091057, #091057)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'textShine 6s linear infinite'  // burda sadəcə animation timing
                    }}
                >
                    
                </motion.p>
                <p className={`${inter.className} text-white text-center p-4 w-4/5`}>Keyfiyyətli təhsil təcrübəsini təmin etmək üçün sənayenin öndə gedən qurumları və universitetləri ilə əməkdaşlıq edirik.</p>
            </div> */}
            <div className='col-span-9 flex flex-col sm:flex-row sm:gap-13 justify-center items-center gap-3'>
                <div className='w-full flex justify-center items-center'>
                    <Image
                        src="/emekdas/bdu.webp"
                        alt="BDU"
                        width={800}
                        height={800}
                        className=" z-20 w-45 h-45 md:w-52 md:h-52 object-cover  dark:brightness-40"
                    />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Image
                        src="/emekdas/unec.webp"
                        alt="BDU"
                        width={800}
                        height={800}
                        className=" z-20 w-45 h-45 md:w-52 md:h-52 object-cover rounded-full dark:brightness-40"
                    />
                    {/* <h1>UNEC</h1> */}
                </div>
            </div>
        </div>
    )
}

export default Partners