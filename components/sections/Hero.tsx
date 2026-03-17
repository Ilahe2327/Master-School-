'use client'
import { useTranslations } from "next-intl"
import Image from 'next/image'
import React from 'react'
import { inter, rasingFont, roboto } from '../layout/Navbar'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
const HeroSection = () => {
    const t = useTranslations("hero")
    return (
        <div id='hero' className="hero relative h-auto flex items-center justify-center">
            {/* <div className=''></div> */}
            <div className='container mx-auto '>
                <div className='flex flex-col lg:flex-row items-center mt-30 justify-center text-white '>
                    <div className={`${roboto.className} h-auto lg:mt-10 p-4 lg:w-2/4 lg:mx-auto w-full flex flex-col items-center justify-center`}>
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                            className={`${inter.className} font-extrabold 
                            hidden md:block w-3/4 lg:w-full mx-auto 
                            py-2 xl:text-[92px] text-7xl lg:pl-5 xl:pl-3 lg:text-left text-center`}
                            style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'textShine 3s linear infinite'
                            }}
                        >
                            {t("title")}
                            {/* Peşəkar təhsil, Parlaq gələcək */}
                        </motion.h1>
                        <h1 className={`${inter.className} font-extrabold 
                             w-full md:hidden lg:p-2 lg:mt-50 xl:text-8xl h-auto py-3 text-5xl mx-2 md:text-left text-center mt-30 md:mt-30 `} style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'textShine 3s linear infinite'
                            }}>
                             {t("title")}
                        </h1>
                    </div>
                    <div className={`${roboto.className} h-auto lg:mt-10 p-10 lg:w-2/4 w-full flex flex-col items-center justify-center`}>
                        <p className='text-center text-2xl'>
                           {t("description")}
                        </p>
                        <div className='mt-7 flex gap-4'>
                            <Button className='bg-white p-5 font-extrabold cursor-pointer text-blue-950' style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                animation: 'textShine 3s linear infinite',
                            }}>{t("buttons.about")}</Button>
                            <Button className='bg-white cursor-pointer p-5 font-extrabold text-blue-950' style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                animation: 'textShine 3s linear infinite',
                            }}>{t("buttons.contact")} <ArrowRight /></Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HeroSection