import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Racing_Sans_One, Roboto, Archivo_Black } from "next/font/google"
import { Inter } from 'next/font/google'
import { MenuIcon } from 'lucide-react'
import MobileMenu from './MobileMenu'

export const rasingFont = Racing_Sans_One({
  variable: "--font-racing",
  subsets: ["latin"],
  weight: '400'
});
export const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ['latin-ext'],
  weight: '400'
})

export const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin-ext'], // ← latin-ext Azərbaycan simvollarını əhatə edir
})
export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '600'],
  style: ["normal", "italic"]
})
const NavbarSection = () => {
  return (
    // <div className=''>
    <div className={`flex h-auto  text-xl shadow-[4px 5px 2px #ffffff] font-extrabold text-white ${roboto.className} rounded-b-4xl `}>
      <div className='container mx-auto flex justify-evenly items-center '>
        <div className="fixed inset-0 -z-10" />
        <div className='hidden lg:flex w-3/8 space-x-10 justify-center items-center'>
          <Link href={'#hero'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Ana Səhifə</Link>
          <Link href={'#aboutSection'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Haqqımızda</Link>
          <Link href={'#services'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Xidmətlər</Link>
        </div>
        <div className='lg:w-1/8 w-full container flex mx-5 justify-between items-center py-1'>
          <Image src={'/masterschool.png'}
            alt='Master School Icon'
            width={599}
            height={416}
            className='lg:w-[230px] w-[220px] lg:h-[130px] h-[130px]'
          />
          <MobileMenu />
        </div>
        <div className='hidden lg:flex  w-3/8 space-x-10 justify-center items-center'>
          <Link href={'#mentors'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Müəllimlər</Link>
          <Link href={'#branch'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Filiallar</Link>
          <Link href={'#contact'} className={`text-white font-semibold ${roboto.className} transition-text-shadow duration-500 hover:text-shadow-[1px_1px_2px_#ffffff]
                hover-underline
                `}>Əlaqə</Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarSection