'use client'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react';
import { inter } from './Navbar';
export default function LanguageSwitcher() {
  const router = useRouter();
  const [position, setPosition] = React.useState("bottom")
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
    router.refresh();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <img width="48" height="48" src="https://img.icons8.com/color/48/usa-circular.png" alt="usa-circular" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${inter.className} w-32 z-1200`}>
        <DropdownMenuGroup>
          <DropdownMenuLabel></DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem

              onClick={() => changeLanguage('az')} value="AZ"><img width="24" height="24" src="https://img.icons8.com/emoji/48/azerbaijan-emoji.png" alt="azerbaijan-emoji" /> AZ</DropdownMenuRadioItem>
            <DropdownMenuRadioItem

              onClick={() => changeLanguage('en')} value="EN"><img width="24" height="24" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" />EN</DropdownMenuRadioItem>
            <DropdownMenuRadioItem

              onClick={() => changeLanguage('ru')} value="RU"><img width="24" height="24" src="https://img.icons8.com/emoji/48/russia-emoji.png" alt="russia-emoji" />RU</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}