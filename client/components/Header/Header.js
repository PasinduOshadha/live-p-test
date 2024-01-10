"use client"

import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect} from "react";

// components
import { Button, buttonVariants } from "../ui/button"

function Header() {


  const [scrollClass, setScrollClass] = useState('py-3');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if the user has scrolled 120px and update the class accordingly
      if (scrollY >= 120) {
        setScrollClass('py-2');
      } else {
        setScrollClass('py-4');
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  return (
    <header className="shadow fixed top-0 left-0 right-0 bg-white z-10">
      <div className={`flex flex-row justify-between max-w-[1920px] mx-auto px-4 transition-all duration-300 ${scrollClass}`}>
        <div className="left-col flex gap-x-5 items-center">
          <Image src={'/images/header-logo.jpeg'} width={130} height={40} alt="oneli live logo" />

          <nav>
            <ul className="list-none flex flex-row gap-x-6 text-sm">
              <li>
                <a className="text-[#222] menu-item hover:text-red-500 transition-all" href="#">トップページ</a>
              </li>
              <li>
                <a className="text-[#222] menu-item hover:text-red-500 transition-all" href="#">ライバー</a>
              </li>
              <li>
                <a className="text-[#222]menu-item hover:text-red-500 transition-all" href="#">イベント</a>
              </li>
              <li>
                <a className="text-[#222] menu-item hover:text-red-500 transition-all" href="#">ランキング</a>
              </li>
            </ul>
          </nav>

          <Link href={'#'} className={`gap-2 text-theme-red hover:bg-white hover:text-theme-red/85 ${buttonVariants({ variant: "ghost" })}`}>
            <Image src={'/images/video-icon.svg'} width={24} height={24} alt="video button icon" />
            <span>配信中</span>
          </Link>
        </div>

        <div className="right-col">
          <div className="flex flex-row gap-x-3">

            <Link href="#" className={`font-bold text-[15px] min-w-[100px] rounded-sm ${buttonVariants({ variant: "outline" })}}`}>会員登録</Link>
            <Link href="#" className={`bg-theme-blue text-white font-bold text-[15px] min-w-[100px] rounded-sm hover:text-white hover:bg-blue-950 ${buttonVariants({ variant: "outline" })}}`}>ログイン</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header