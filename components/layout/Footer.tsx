'use client'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { inter } from './Navbar'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  return (
    <footer className="w-full h-auto pt-10" style={{
      background: 'linear-gradient(135deg, rgba(0, 0, 4, 0.8), rgba(0, 0, 3, 0.7)'
    }}>
      <div className='container mx-auto py-12 px-4 grid place-items-center sm:place-items-start text-center sm:text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-8'>

        <div className='lg:col-span-3 col-span-1 place-content-center place-items-center'>
          <Image
            src='/logo.png'
            alt='Header Logo'
            width={170}
            height={140}
            className='rounded-xl w-[240px] object-cover lg:col-span-2 mb-5'
            style={{ objectFit: 'cover' }}
          />
          <p className={`text-white text-sm w-4/5 ${inter.className}`}> {t('footerDescription')}</p>
        </div>
        <div className={`lg:col-span-2 mt-10 text-taupe-50 ${inter.className} text-sm gap-2`}>
          <div className='flex flex-col justify-center gap-1'>
            <h1 className={`text-taupe-50 ${inter.className} font-semibold text-xl gap-1`}>{t('Quicklinks')}</h1>
            <Link href={'#aboutSection'}>{t('about')}</Link>
            <Link href={'#services'}>{t('services')}</Link>
            <Link href={'#mentors'}>{t('mentors')}</Link>
            <Link href={'#branch'}>{t('branches')}</Link>
            <Link href={'#contact'}>{t('contact')}</Link>
          </div>
        </div>
        <div className={`lg:col-span-2 mt-10 text-taupe-50 ${inter.className} text-sm gap-2`}>
          <div className='flex flex-col w-[80%] mx-auto gap-1'>
            <h1 className={`text-taupe-50 ${inter.className} font-semibold text-xl gap-1`}>{t('contact')}
            </h1>
            <Link href={'#'}>070 710 33 43</Link>
            <Link href={'#'}>info@masterschool.az</Link>
            <Link href={'#'}>{t('unvan')}</Link>
            <Link href={'#'}>08:30 - 20:00</Link>
          </div>
        </div>
        <div className={`lg:col-span-1 mt-10 place-content-between  text-taupe-50 ${inter.className} text-sm gap-10`}>
          <h1 className={`text-taupe-50 ${inter.className}  font-semibold text-xl mb-3 gap-3`}>{t('sosial')}</h1>
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
            {t('huquqQorunma')}{" "}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer