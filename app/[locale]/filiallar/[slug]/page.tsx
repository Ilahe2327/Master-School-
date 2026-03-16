'use client'

import BranchMap from '@/components/BranchMap'
import { inter } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { branches, branchData } from '@/data/branchData/data'
import { BadgeCheck, MapPin, PhoneCall } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { type Locale } from '@/types'   // öz path-inə görə dəyiş
import { useTranslations } from 'use-intl'
interface BranchDetailProps {
    params: Promise<{ slug: string, locale: string }>  // ← locale də var
}
const FilialDetail = ({ params }: BranchDetailProps) => {
    const { slug } = React.use(params)
    console.log('SLUG:', slug)
    console.log('BRANCHES:', branches.map(b => b.slug))
    const locale = useLocale() as Locale   // ← bax bura
    const branchDetail = branches.find(branch => branch.slug.toLowerCase() === slug.toLowerCase())

    if (!branchDetail) notFound()

    const [active, setActive] = useState(0)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const t = useTranslations('filialDetail')
    return (
        <>
            <div className='flex flex-col container mx-auto w-full text-taupe-900'>
                <div className={`${inter.className} flex flex-col my-20 items-center justify-center gap-5`}>
                    <h1 className='text-6xl md:text-7xl font-extrabold'>{branchDetail.title[locale]} {t('filiali')}</h1>
                    <p className='flex text-black gap-1'><MapPin />{t('masterSchool')}</p>
                </div>

                <div className='flex lg:flex-row flex-col-reverse w-full h-auto p-10 bg-white rounded-2xl mt-10'>
                    <div className='w-full lg:w-1/2 sm:p-15 p-5'>
                        <div className={`w-full flex flex-col justify-center items-start gap-3 text-xl ${inter.className}`}>
                            <h1 className='text-4xl text-blue-900 font-extrabold w-full text-center'>{branchDetail.title[locale]} {t('filiali')}</h1>
                            <div className='mt-10 flex flex-col gap-2'>
                                <p><b>{t('telefon')}:</b> {branchDetail.telefon.join(' / ')}</p>
                                <hr />
                                <p><b>{t('seher')}:</b> {branchDetail.city[locale]}</p>
                                <hr />
                                <p><b>{t('unvan')}:</b> {branchDetail.unvan[locale]}</p>
                                <hr />
                                {branchDetail.poct && <><p><b>{t('poct')}:</b> {branchDetail.poct}</p><hr /></>}
                                <p><b>{t('fasile')}:</b> {branchDetail.fasile}</p>
                                {branchDetail.index && <><hr /><p><b>{t('index')}:</b> {branchDetail.index}</p></>}
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                        <Image
                            src={branchDetail.images[0].image}
                            alt='Əsas filial şəkli'
                            width={branchDetail.images[0].width}
                            height={branchDetail.images[0].height}
                            className='w-full h-[500px] rounded object-cover'
                        />
                    </div>
                </div>

                <div className='w-[90%] mx-auto my-20 flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <Image
                            src={branchDetail.images[1].image}
                            alt='Miniatur1'
                            width={branchDetail.images[1].width}
                            height={branchDetail.images[1].height}
                            className='w-[950px] h-[370px] lg:h-[500px] object-cover rounded-2xl border-4'
                        />
                    </div>

                    <div className='w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center'>
                        <div className={`${inter.className} bg-white w-full lg:w-4/5 py-5 lg:px-20 rounded-2xl flex flex-col justify-center items-center`}>
                            <div className='w-full p-5 flex justify-center items-center'><PhoneCall size={80} /></div>
                            <p className='text-2xl my-3 font-black text-center'>{t('sual')}</p>
                            <Link href={'/#contact'}>
                                <Button className='text-2xl bg-[#3572EF] p-7 mt-3 cursor-pointer hover:bg-[#285acd]'>{t('contact')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] mx-auto my-5 flex flex-col gap-5'>
                    <div ref={sectionRef} className='w-[80%] mx-auto my-3 md:my-10 bg-transparent border-4 border-white rounded-2xl'>
                        <div className='w-full bg-[#3572EF] p-5 pl-10 text-xl lg:text-2xl text-white font-bold rounded-2xl'>
                            <h1>{branchData[active].title[locale]}</h1>
                        </div>
                        <div className='px-5 sm:px-10 lg:px-30 py-10 text-white text-left'>
                            <ul>
                                {branchData[active].items[locale].map((item, index) => (
                                    <li key={index} className='text-sm sm:text-lg mb-2 lg:text-xl flex gap-2 font-bold'><BadgeCheck />{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-5 items-center justify-between'>
                        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
                            <div className={`${inter.className} bg-[#ffffff] w-full py-5 px-3 mx-auto rounded-2xl`}>
                                {branchData.map((data, index) => (
                                    <Button
                                        key={data.id}
                                        onClick={() => {
                                            setActive(index)
                                            sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className={`bg-[#eaf6ff] text-taupe-900 mx-auto p-6 w-[95%] text-left text-[10px] sm:text-sm lg:text-sm flex items-center justify-start cursor-pointer ${active === index ? 'border-[#3572EF] border-2 shadow-2xl' : ''}`}
                                    >
                                        {data.title[locale]}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 flex items-start'>
                            <Image
                                src={branchDetail.images[2].image}
                                alt='Miniatur2'
                                width={branchDetail.images[2].width}
                                height={branchDetail.images[2].height}
                                className='w-full h-[500px] object-cover rounded-2xl border-4'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: '50vh' }}>
                <BranchMap lat={branchDetail.lat} lng={branchDetail.lng} />
            </div>
        </>
    )
}

export default FilialDetail