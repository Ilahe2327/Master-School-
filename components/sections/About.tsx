'use client'

import React from 'react'
import { motion } from "framer-motion"
import '../../css/About.css'
import { archivoBlack, inter, rasingFont, roboto } from '../layout/Navbar'
import Image from 'next/image'
const AboutSection = () => {
  const masterNeticeler = Array.from({ length: 9 }, (_, index) => `/masterNeticeler/img${index + 1}.webp`)
  return (
    <div id='aboutSection' className='relative flex flex-col justify-center items-start px-8 w-full bg-gradient-to-b xl:mt-28 lg:mt-10 mt-0 h-auto from-gray-100 to-gray-50 py-50' style={{
      background: 'linear-gradient(to bottom,transparent, rgba(31, 62, 102, 0.1) 2% ,rgba(1, 32, 68, 0.7) 37%, rgba(19, 35, 67, 0.6) 80%,    transparent)',
      color: 'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center'

    }}>
      {/* <div className='overlay'></div> */}
      <div className='xl:container xl:mx-auto z-50 relative flex xl:flex-row flex-col space-x-8'>
        <div className='xl:w-1/2 w-full'>
          <div className='p-0 sm:p-5 text-white text-center mb-10 w-5/6 mx-auto' >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className={`${rasingFont.className} text-4xl sm:text-5xl lg:text-6xl font-bold  `}
            >
              Master School – 10 illik təcrübə, yüzlərlə uğur!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className={`${inter.className} text-lg sm:text-xl xl:mt-4 mt-8`}
            >
              Artıq 10 ildir ki, Master School Təhsil Mərkəzi təhsildə keyfiyyətin, peşəkarlığın və uğurun ünvanıdır...
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${inter.className} aboutTextCard text-blue-950 xl:text-xl sm:text-lg text-sm xl:font-extrabold w-full p-10 my-5 rounded-2xl`}
          >
            <h2 className={`${inter.className} font-extrabold`}>
              Uğurlarımızla fəxr edirik:
            </h2>
            <ul className='pl-10'>
              <li>
                Magistratura üzrə son 6 ildə həm Azərbaycan, həm də Rus bölmələri üzrə 11 Respublika birincimiz olub.
              </li>
              <li> Həmçinin Dövlət qulluğu və Doktorantura istiqamətlərində onlarla Respublika birinciliyi qazanmışıq.</li>
            </ul>
            <p className='font-extrabold'>
              Master School – bilik, zəhmət və uğurun kəsişdiyi məkan.
            </p>
          </motion.div>
        </div>
        <div className='xl:w-1/2 w-full aboutCardBgImage p-1 rounded-4xl flex flex-col'>
          <h2 className={`xl:text-3xl lg:text-4xl sm:text-3xl text-2xl ${inter.className} text-center font-extrabold p-2`}>
            <span className='inline-block text-center text-yellow-300'>MAGISTRATURAYA</span> <span className='block text-white'>QƏBUL ÜZRƏ YÜKSƏK NƏTİCƏLƏRİ</span>   </h2>
          <div className='grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 grid-cols-2  mx-auto xl:space-x-5 space-x-3 space-y-3 mt-2'>
            {
              masterNeticeler.map((img, index) => (
                <Image key={index} src={img} alt={`master image ${index + 1}`} width={1503} height={1473}
                  className='xl:w-35 xl:h-35 sm:w-32 sm:h-32 w-28 h-28 rounded' />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection