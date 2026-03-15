import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { inter } from './Navbar'

const Footer = () => {
  return (
    <footer className="w-full h-auto pt-10" style={{
      background: 'linear-gradient(135deg, rgba(0, 0, 4, 0.8), rgba(0, 0, 3, 0.7)'
    }}>
      <div className='container mx-auto py-12 px-4 grid grid-cols-1 place-items-start text-center sm:text-left sm:grid-cols-2 lg:grid-cols-9 gap-8'>

        <div className='lg:col-span-3'>
          <Image
            src='/logo.png'
            alt='Header Logo'
            width={170}
            height={140}
            className='rounded-xl w-[240px] object-cover lg:col-span-2 mb-5'
            style={{ objectFit: 'cover' }}
          />
          <p className='text-white text-sm w-4/5'> Biz tələbələrə müasir texnologiyaları öyrənmək və karyera inkişafını irəli aparmaq üçün lazım olan bütün vasitələri təqdim edirik.</p>
        </div>
        <div className={`lg:col-span-2 mt-10 text-taupe-50 ${inter.className} text-sm gap-2`}>
          <div className='flex flex-col gap-1'>
            <h1 className={`text-taupe-50 ${inter.className} font-semibold text-xl gap-1`}>Sürətli keçidlər</h1>
            <Link href={'#aboutSection'}>Haqqımızda</Link>
            <Link href={'#services'}>Xidmətlər</Link>
            <Link href={'#mentors'}>Müəllimlər</Link>
            <Link href={'#branch'}>Filiallar</Link>
            <Link href={'#contact'}>Əlaqə</Link>
          </div>
        </div>
        <div className={`lg:col-span-2 mt-10 text-taupe-50 ${inter.className} text-sm gap-2`}>
          <div className='flex flex-col w-[80%] gap-1'>
            <h1 className={`text-taupe-50 ${inter.className} font-semibold text-xl gap-1`}>Əlaqə
            </h1>
            <Link href={'#'}>070 710 33 43</Link>
            <Link href={'#'}>info@masterschool.az</Link>
            <Link href={'#'}>Nizami küç. 203B, AF Business House (Əsas filial)</Link>
            <Link href={'#'}>08:30 - 20:00</Link>
          </div>
        </div>
        <div className={`lg:col-span-1 mt-10 place-content-between  text-taupe-50 ${inter.className} text-sm gap-10`}>
          <h1 className={`text-taupe-50 ${inter.className}  font-semibold text-xl mb-3 gap-3`}>Sosial</h1>
          <div className='flex flex-row gap-4'>
            <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Facebook /></Link>
            <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Instagram /></Link>
            <Link href={'#'} ><Twitter className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]' /></Link>
            <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Linkedin /></Link>
            <Link href={'#'} className='rounded-xl hover:shadow-[2px_2px_3px_#597be6]'><Github /></Link>
          </div>
        </div>

      </div>
      <div className='container mx-auto py-4 text-center text-sm border-t border-gray-700'>
        <div className={`flex flex-col md:flex-row justify-end text-amber-50 ${inter.className}`}>

          <div >
            2026 MilliSoft. Bütün hüquqlar qorunur.{" "}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer