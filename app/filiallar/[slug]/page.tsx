'use client'

import BranchMap from '@/components/BranchMap'
import { inter } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { branchData, branches } from '@/data/branchData/data'
import { BadgeCheck, MapPin, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React, { useRef, useState } from 'react'


interface BranchDetailProps {
    params: Promise<{ slug: string }>
}

const FilialDetail = (props: BranchDetailProps) => {
    const { slug } = React.use(props.params)
    console.log('slug:', slug)
    const branchDetail = branches.find(branch => branch.slug.toLowerCase().replace(' ', '-') === slug)
    if (!branchDetail) {
        notFound()
    }
    const [active, setActive] = useState(0)
    const sectionRef = useRef<HTMLDivElement | null>(null); //scroll üçün

    return (
        <>
            <div className='flex flex-col container mx-auto w-full text-taupe-900 '>
                <div className={`${inter.className} flex flex-col my-20 items-center justify-center gap-5`}>
                    <h1 className='text-7xl font-extrabold'>{branchDetail.title} Filialı</h1>
                    <p className='flex text-black gap-1' ><MapPin />  MasterSchool Təhsil Mərkəzi</p>
                </div>
                <div className='flex w-full h-auto p-10 bg-white rounded-2xl mt-10'>
                    <div className='w-1/2 p-15'>
                        <div className={`w-full flex flex-col justify-center items-start gap-3 text-xl ${inter.className}`} >
                            <h1 className='text-4xl text-blue-900 font-extrabold w-full text-center'>{branchDetail.title} filialı</h1>
                            <div className='mt-10 flex flex-col gap-2'>
                                <p><b>Telefon:</b> {branchDetail.telefon[0]} {branchDetail.telefon[1]} </p>
                                <hr />
                                <p><b>Şəhər :</b> {branchDetail.city}</p>
                                <hr />
                                <p><b>Ünvan :</b> {branchDetail.unvan}</p>
                                <hr />
                                {branchDetail.poct ? <p><b>Poçt : </b>{branchDetail.poct} <hr /></p> : ''}

                                <p><b>Fasilə :</b> {branchDetail.fasile}</p>

                                {branchDetail.index ? <p><hr /><b>Indeks :</b> {branchDetail.index} </p> : ''}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2  flex flex-col gap-2'>
                        <div className='w-full'>
                            <Image src={branchDetail.images[0].image} alt={'Əsas filial şəkli'} width={branchDetail.images[0].width} height={branchDetail.images[0].height} className='w-full h-[500px] rounded object-cover' />
                        </div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto my-20 flex'>
                    <div className='w-1/2'>
                        <Image src={branchDetail.images[1].image} alt={'Miniatur1'} width={branchDetail.images[1].width} height={branchDetail.images[1].height} className='w-[950px] h-[500px] object-cover rounded-2xl border-4' />
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <div className={`${inter.className} bg-white py-10 px-20 rounded-2xl`}>
                            <div className='w-full p-5 flex justify-center items-center'> <PhoneCall size={80} /></div>
                            <p className=' text-2xl my-3 font-black text-center'>Əlavə sualınız var?</p>
                            <Button className='text-2xl bg-[#3572EF] p-7 mt-3 cursor-pointer hover:bg-[#285acd]'>Bizimlə əlaqə saxla</Button>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] mx-auto my-20 flex flex-col  gap-5'>
                    <div ref={sectionRef} className='w-[80%] mx-auto my-10 bg-transparent border-4 border-white rounded-2xl'>
                        <div className='w-full bg-[#3572EF] p-5 pl-10 text-2xl text-white font-bold rounded-2xl'>
                            <h1>{branchData[active].title}</h1>
                        </div>
                        <div className='px-30 py-10 text-white'>
                            <ul>
                                {
                                    branchData[active].items.map((item, index) => (
                                        <li key={index} className='text-xl flex gap-2 font-bold'><BadgeCheck />{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-between '>
                        <div className='w-1/2 flex mr-5 flex-col items-center justify-center'>
                            <div className={`${inter.className} bg-[#ffffff] w-full py-5 px-3 mx-auto rounded-2xl`}>
                                {
                                    branchData.map((data, index) => (
                                        <Button key={data.id} onClick={() => {
                                            setActive(index);
                                            sectionRef.current?.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        }} className={`bg-[#eaf6ff] text-taupe-900 mx-auto p-6 w-[95%] text-left flex items-center justify-start cursor-pointer ${active == data.id - 1 ? 'border-[#3572EF] border-2 shadow-2xl' : ''} `}>{data.title}</Button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-1/2 flex items-start'> <Image src={branchDetail.images[2].image} alt={'Miniatur2'} width={branchDetail.images[2].width} height={branchDetail.images[2].height} className='w-[950] h-[500px] object-cover rounded-2xl border-4' /></div>
                    </div>
                </div>

            </div >
            <div style={{
                width: '100%', height: '50vh'
            }}>

                <BranchMap lat={branchDetail.lat} lng={branchDetail.lng} />
            </div>
        </>
    )
}

export default FilialDetail