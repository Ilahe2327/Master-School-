'use client'

import React from 'react'
import { motion } from "framer-motion"
import '../../css/About.css'
import { archivoBlack, inter, rasingFont, roboto } from '../layout/Navbar'
import Image from 'next/image'
const AboutSection = () => {
  const masterNeticeler = Array.from({ length: 9 }, (_, index) => `/masterNeticeler/img${index + 1}.webp`)
  return (
    <div id='aboutSection' className='aboutSection bg-gradient-to-b from-gray-100 to-gray-50 py-20'>
      {/* <div className='overlay'></div> */}
      <div className='container mx-auto z-50 relative flex space-x-8'>
        <div className='absolute'>
          {/* <div className="relative -z-10 top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-80 blur-[100px]"
            style={{ background: '#3b82f6' }} /> */}
        </div>

        <div className='w-1/2'>
          <div className='p-5 w-full text-white' >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className={`${rasingFont.className} text-6xl font-bold  `}
            >
              Master School – 10 illik təcrübə, yüzlərlə uğur!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className={`${roboto.className} text-xl mt-4`}
            >
              Artıq 10 ildir ki, Master School Təhsil Mərkəzi təhsildə keyfiyyətin, peşəkarlığın və uğurun ünvanıdır...
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='aboutTextCard text-blue-950 font-extrabold w-full p-10 rounded-2xl'
          >
            <h2 className={`${roboto.className} text-xl`}>
              Uğurlarımızla fəxr edirik:
            </h2>
            <ul className='pl-10'>
              <li>
                Magistratura üzrə son 6 ildə həm Azərbaycan, həm də Rus bölmələri üzrə 11 Respublika birincimiz olub.
              </li>
              <li> Həmçinin Dövlət qulluğu və Doktorantura istiqamətlərində onlarla Respublika birinciliyi qazanmışıq.</li>
            </ul>
            <p>
              Master School – bilik, zəhmət və uğurun kəsişdiyi məkan.
            </p>
          </motion.div>
        </div>
        <div className='w-1/2 aboutCardBgImage flex flex-col'>
          <h2 className={`text-3xl ${inter.className} text-center font-extrabold p-2`}>
            <span className='inline-block text-center text-yellow-300'>MAGISTRATURAYA</span> <span className='block text-white'>QƏBUL ÜZRƏ YÜKSƏK NƏTİCƏLƏRİ</span>   </h2>
          <div className='grid grid-cols-3 mx-auto space-x-5 space-y-3 mt-2'>
            {
              masterNeticeler.map((img, index) => (
                <Image key={index} src={img} alt={`master image ${index + 1}`} width={1503} height={1473}
                  className='w-35 h-35 rounded' />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection