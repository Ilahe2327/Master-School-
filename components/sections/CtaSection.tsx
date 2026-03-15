'use client'
import React from 'react'
import { Button } from '../ui/button'
import { inter } from '../layout/Navbar'
import { ArrowRight } from 'lucide-react'

const CtaSection = () => {
    return (
        <div style={{
            width: '100%',
            background: "linear-gradient(to bottom, transparent, #152542),           radial-gradient(ellipse at center, transparent 40 %, #152542 100 %)"
        }}>
            <div className='flex flex-col items-center justify-center p-10 sm:p-15 lg:p-15 gap-4 lg:w-2/3 w-full mx-auto'>
                <h1 className={`${inter.className} font-black text-3xl sm:4xl md:text-5xl xl:text-6xl text-center w-full text-white`}>Öyrənməyə Başlamağa Hazırsınız?</h1>
                <p className={`${inter.className} text-center text-lg md:text-xl text-white`}>Kurslar, qeydiyyat və ya tərəfdaşlıq imkanları haqqında məlumat almaq üçün indi bizimlə əlaqə saxlayın.</p>
                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth"
                })} className={`${inter.className} bg-white cursor-pointer font-bold bt-3 p-6 text-blue-900 text-lg md:text-xl`}>Bizimlə əlaqə <ArrowRight strokeWidth={3} /></Button>
            </div>
        </div >
    )
}

export default CtaSection