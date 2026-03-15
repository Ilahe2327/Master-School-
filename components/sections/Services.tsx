'use client'
import React, { ReactNode, useState } from 'react'
import { inter, rasingFont } from '../layout/Navbar';
import { motion } from "framer-motion"
import { PiGraduationCap } from "react-icons/pi";
import { RiGovernmentFill } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { RiEnglishInput } from "react-icons/ri";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { RiGovernmentLine } from "react-icons/ri";

interface Card {
  icon: ReactNode,
  title: string,
  desc: string,
  color: string
}

const cards: Card[] = [
  {
    icon: <PiGraduationCap className='text-white text-6xl' />,
    title: "Magistratura",
    desc: "Magistratura hazırlığı 3 fənn üzrə tədris edilir:Məntiq, İnformatika,Xarici dil.Hər fənn həftədə 2 dəfə olmaqla 90 dəqiqə keçirilir. Həftəsonları tələbələr üçün mükafatlı SINAQ İMTAHANI keçirilir. Magistraturaya qəbul imtahanında yüksək bal toplayacaq tələbələr pul mükafatları əldə edirlər...",
    color: "#4E71FF",
  },
  {
    icon: <RiGovernmentLine className='text-white font-black text-6xl' />,
    title: "Dövlət Qulluğu",
    desc: "Həftədə 2 dəfə, 90 dəqiqə olmaqla keçirilir. Hər həftə sonu sınaq imtahanları təşkil edilir.",
    color: "#4E71FF",
  },
  {
    icon: <PiCertificateBold className='text-white text-6xl'/>,
    title: "MİQ və Sertifikasiya",
    desc: "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    color: "#4E71FF",
  },
  {
    icon: <PiStudentBold className='text-white text-6xl'/>,
    title: "Abituriyent",
    desc: "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    color: "#4E71FF",
  },
  {
    icon: <FaSchool className='text-white text-6xl'/>,
    title: "Məktəbəqədər"
    ,
    desc: "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    color: "#4E71FF",
  },
  {
    icon:<RiEnglishInput className='text-white text-6xl'/>,
    title: "İELTS",
    desc: "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir. Dərs saatından əlavə həftədə 2 dəfə, 1.5 saatdan 3 saata qədər davam edən danışıq klublarımız olur. Hər ayın sonu ay üzrə keçirilmiş dərslərin imtahanı keçirilir.",
    color: "#4E71FF",
  },
];
const ServicesSection = () => {

  return (
    <div className='relative'>
      <div className="fixed inset-0 -z-10 gradientShift" />
      <div className={`${inter.className} flex justify-center gap-3 items-center flex-col h-auto p-10 text-white`}>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className='text-7xl font-black p-2'
          style={{
            background: 'radial-gradient(circle, #091057, #070F2B, #091057, #091057)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'textShine 6s linear infinite'  // burda sadəcə animation timing
          }}
        >
          XIDMƏTLƏRİMİZ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`font-extrabold text-5xl ${inter.className} mt-7`}
        >
          NƏ TƏKLİF EDİRİK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Tələbələrimizə ən yaxşı təhsil xidmətlərini təqdim edirik
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration:0.8, delay: 0.05 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 container mx-auto mt-15 w-full'
        style={{
          transition: 'all ease-in-out 0.09'
        }}
      >
        {cards.map((card, i) => (
          <GlassCard key={i} card={card} />
        ))}
      </motion.div>
    </div>
  );
}

interface GlassCardProps {
  card: Card
}

function GlassCard({ card }: GlassCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id='services'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full min-h-60 ${hovered ? 'h-80 -scale-z-50 -translate-y-8' : 'max-h-60'}`}
      style={{
        borderRadius: 20,
        background: hovered
          ? `linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)`
          : "rgba(0,0,0,0.5)",
        // backdropFilter: "blur(80px)",
        border: hovered ? `1px solid ${card.color}88` : "1px solid rgba(255,255,255,0.1)",
        padding: 32,
        cursor: "pointer",
        transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 30px 60px ${card.color}33` : "0 4px 20px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='mx-auto' style={{ fontSize: 40, marginTop: 20 }}>
          {card.icon}
        </div>
        <h3 className={`${inter.className} font-extrabold text-2xl text-white mt-3`}>{card.title}</h3>
      </div>
      <div style={{
        overflow: "hidden",
        maxHeight: hovered ? 170 : 0,
        opacity: hovered ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.7, margin: 0, minHeight: hovered ? 90 : 0 }}>
          {card.desc}
        </p>
      </div>
    </div>
  );
}
export default ServicesSection