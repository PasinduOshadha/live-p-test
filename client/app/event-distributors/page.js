"use client"

import Link from "next/link"
import { useState } from "react"

// components
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Contributor from "@/components/Contributor/Contributor"
import { Skeleton } from "@/components/ui/skeleton"

function page() {

    const [isLoading, setIsLoading] = useState(false)

    const eventContributorsDummyData = {
        _id: '23232',
        title: 'Sample Event',
        participants: [
            {
                id: '001',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '002',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: true
            },
            {
                id: '003',
                name: '長い名前のライバー長い名前のライバー',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '004',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '005',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: true
            },
            {
                id: '006',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '007',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '008',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: true
            },
            {
                id: '009',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: true
            },
            {
                id: '010',
                name: '長い名前のライバー長い名前のライバー',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '011',
                name: 'めいちゃん',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
            {
                id: '012',
                name: '長い名前のライバー長い名前のライバー',
                avatar: '/images/contributor-dp.svg',
                isSubscribed: false
            },
        ],
        createdAt: '2023-12-21',
        updatedAt: '2032-12-22'
    }

    return (
        <main className="bg-[#f5f5f5]">
            <div className="container pt-28 py-20">

                <div className="flex flex-col py-8">
                    <Link href={'#'} className="flex items-center mb-4">
                        <ChevronLeftIcon height={16} width={16} />
                        <span className="text-[13px] text-theme-blue font-bold">イベント詳細ページへ戻る</span>
                    </Link>
                    <h1 className="text-theme-blue text-[27px] font-bold">エントリーライバー</h1>
                </div>

                {isLoading &&

                    <div className="flex container w-full px-0 mb-10 justify-between">
                        <Skeleton className="w-[calc(20%-16px)] h-[200px] rounded bg-slate-200" />
                        <Skeleton className="w-[calc(20%-16px)] h-[200px] rounded bg-slate-200" />
                        <Skeleton className="w-[calc(20%-16px)] h-[200px] rounded bg-slate-200" />
                        <Skeleton className="w-[calc(20%-16px)] h-[200px] rounded bg-slate-200" />
                        <Skeleton className="w-[calc(20%-16px)] h-[200px] rounded bg-slate-200" />
                    </div>
                }
                {/* depending on the contributors count, adjust the flex alignment class (justify-start || space-beween) */}
                <div
                    className={`contributor-list flex flex-wrap gap-x-4 gap-y-6 ${eventContributorsDummyData?.participants.length % 2 === 0 ? 'space-beween' : 'justify-start'}`}>


                    {eventContributorsDummyData?.participants.length !== 0 &&

                        eventContributorsDummyData?.participants?.map(item => (
                            <Contributor
                                key={item.id}
                                contributorName={item.name}
                                contributorAvatar={item.avatar}
                                isSubscribed={item.isSubscribed}
                            />
                        ))}

                </div>

            </div>
        </main>
    )
}

export default page