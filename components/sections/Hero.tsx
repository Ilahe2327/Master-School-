'use client'

import Image from 'next/image'
import React from 'react'
import { inter, rasingFont, roboto } from '../layout/Navbar'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
const HeroSection = () => {
    return (
        <div id='hero' className="relative h-auto py-30 flex items-center justify-center">
            <div className=''></div>
            <div className='container mx-auto '>
                <div className='flex items-start mt-0 justify-start text-white'>
                    <motion.h1
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 40 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className={`${inter.className} font-extrabold w-1/2 text-8xl p-2 text-left `}
                    style={{
                        background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'textShine 3s linear infinite'
                    }}
                    >
                        Peşəkar təhsil,Parlaq gələcək
                    </motion.h1>
                    <div className={`${roboto.className} h-auto mt-10 p-10 w-1/2 flex flex-col items-center justify-center`}>
                        <p className='text-center text-2xl'>
                            Sənaye peşəkarları tərəfindən hazırlanmış ən müasir kurslarla karyeranızı dəyişdirin. Öz tempinizdə öyrənin və arzularınıza nail olun.
                        </p>
                        <div className='mt-7 flex gap-4'>
                            <Button className='bg-white p-5 font-extrabold cursor-pointer text-blue-950' style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                animation: 'textShine 3s linear infinite',
                            }}>Haqqımızda</Button>
                            <Button className='bg-white cursor-pointer p-5 font-extrabold text-blue-950' style={{
                                background: 'linear-gradient(90deg, #f0f9ff, #93c5fd, #ffffff, #f0f9ff)',
                                backgroundSize: '200% auto',
                                animation: 'textShine 3s linear infinite',
                            }}>Əlaqə <ArrowRight /></Button>
                        </div>
                    </div>

                </div></div>
        </div>

    )
}

export default HeroSection