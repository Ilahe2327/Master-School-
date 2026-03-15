// 'use client'
import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { inter } from './Navbar'

const MobileMenu = () => {
    return (
        <div className='block lg:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='w-15' variant={'ghost'}><Menu className='size-8' /></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className={`${inter.className} font-semibold text-2xl text-center mt-4 uppercase text-[#2d64b6]`}>Master School</SheetTitle>
                        <SheetDescription className='mt-10 flex text-[17px] flex-col gap-3 uppercase'>
                            <SheetClose asChild>
                                <Link href={'/#hero'} className={`text-[#2d64b6] font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]
                hover-underline
                `}>Ana səhifə</Link></SheetClose>
                            <SheetClose asChild>
                                <Link href={'/#aboutSection'} className={`text-[#2d64b6] font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[6px_2px_3px_#597be6] 
              hover-underline
                `} >Haqqımızda</Link></SheetClose>
                            <SheetClose asChild>
                                <Link href={'/#services'} className={`text-[#2d64b6] p-0 font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Xidmətlər</Link></SheetClose>
                            <SheetClose asChild>
                                <Link href={'/#mentors'} className={`text-[#2d64b6] font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Müəllimlər</Link></SheetClose>
                            <SheetClose asChild>
                                <Link href={'/#branch'} className={`text-[#2d64b6] font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Filiallar</Link></SheetClose>
                            <SheetClose asChild>
                                <Link href={'/#contact'} className={`text-[#2d64b6] font-semibold ${inter.className} transition-text-shadow duration-500 hover:text-shadow-[2px_2px_3px_#597be6]  hover-underline`}>Əlaqə</Link></SheetClose>
                        </SheetDescription>
                    </SheetHeader>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileMenu