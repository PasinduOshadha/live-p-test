"use client"

import Link from "next/link"
import Image from "next/image"
import './Contributor.css'

// components
import { buttonVariants } from "@/components/ui/button"




function Contributor(props) {

  const {contributorName, contributorAvatar, isSubscribed} = props;

  // setting up a fallback avatar url
  const avatarDP = contributorAvatar !== '' ? contributorAvatar : '/images/contributor-dp.svg';

  return (
    <div className="contributor-card">

      <Image className="my-1" src={avatarDP} height={80} width={80} alt="contributor avatar" loading="lazy" />

      <h3 className="contributor-name">長い名前のライバー長い名前のライバー</h3>

      <Link className={`min-w-[130px] h-[32px] rounded ${buttonVariants({ variant: "outline" })} ${isSubscribed ? 'bg-theme-blue text-white' : ''}`} href={'#'}>フォロー</Link>
    </div>
  )
}

export default Contributor