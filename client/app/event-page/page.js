import React from 'react'
import Image from 'next/image'
import { PT_Serif } from "next/font/google"
import './EventPage.css'
import Link from 'next/link'

// components
import DayCounter from '@/components/DayCounter/DayCounter'
import { Button, buttonVariants } from '@/components/ui/button'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GoogleMap from '@/components/GoolgeMap/GoogleMap'



const pt_serif = PT_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-pt-sans",
  fallback: ['system-ui', 'arial']
})

function page() {

  // for testing the timer
  const seconds = 600
  const today = new Date();
  const futureDate  = new Date(today.setMonth(today.getMonth() + 1))

  console.log('futureDate:', futureDate)

  return (
    <main>
      <section className="bg-black text-white event-page-cover mb-14">
        <div className="container min-h-[500px] pt-28 pb-20 flex flex-col content-center justify-center relative">


          <h1 className={`text-center ${pt_serif.className} text-[44px] font-bold mb-2`}>Until the start...</h1>
          <p className="text-center">イベント開始まで</p>

          <DayCounter expiryTimestamp={futureDate} />
        </div>
      </section>

      <section className="mb-20">
        <div className="container mb-5">

          <div className="flex flex-row gap-x-2">
            <Image src="/images/calendar-icon.svg" width={24} height={24} alt="calendar icon" />
            <span className="start-date">{`2023/12/28 18:00`} - {`2024/01/06 21:59`}</span>
          </div>
          <h1 className="text-[48px] font-bold mb-8">イベント名が入ります。メ〜テレ「秋山歌謡祭2024」特別番組楽曲アーティストオーディション！</h1>

          <div>
            <p className="text=[#222] mb-10">イベントを数行で説明する文章がここに入ります。<br />
              人気お笑いグループ・ロバート秋山竜次の「音楽」をテーマにした、特別番組を制作！2024年3月放送予定の大注目のバラエティ番組「秋山歌謡祭」であなたのオリジナリティを発揮してみませんか？2023年放送の見逃し配信が累計450万回、YouTubeショートで1300万再生を記録！そんな人気コンテンツに起用するオリジナル楽曲をSHOWROOM限定で大募集します！バーチャルライバーの参加も大歓迎です！</p>
          </div>

          <div className="flex flex-row justify-center">
            <Button className="rounded-md w-full max-w-[360px] py-8 font-bold bg-theme-red border-b-4 border-b-[#770404] relative" varient="primary">
              <span>エントリーする</span>
              <ChevronRight className="absolute right-1 top-2/4 -translate-y-1/2" />
            </Button>
          </div>

        </div>
      </section>

      <section>
        <div className="container">
          <Tabs defaultValue="event-period" className="w-full event-info-tabs mb-12">
            <TabsList className="tab-trigger-wrapper">
              <TabsTrigger className="px-0 tab-trigger-item" value="event-period">イベント期間</TabsTrigger>
              <TabsTrigger className="px-0 tab-trigger-item" value="event-details">イベント詳細</TabsTrigger>
              <TabsTrigger className="px-0 tab-trigger-item" value="venue-details">会場詳細</TabsTrigger>
              <Link href={'#'} varient="ghost" target="_blank" className="flex flex-row gap-x-2 items-center text-[#555]">
                <span>エントリーライバー</span>
                <ExternalLink width={16} height={16} />
              </Link>
            </TabsList>
            <TabsContent value="event-period">

              <div className="table">

                <div className="table-row">
                  <div className="table-cell min-w-[110px] py-5 font-bold">イベント期間</div>
                  <div className="table-cell min-w-[110px] py-5 pl-5">2023/12/28 18:00 - 2024/01/06 21:59</div>
                </div>

                <div className="table-row">
                  <div className="table-cell min-w-[110px] py-5 font-bold">イベント詳細</div>
                  <div className="table-cell min-w-[110px] py-5 pl-5">
                    <p>イベントの詳細を説明する文章がここに入ります。<br />
                      人気お笑いグループ・ロバート秋山竜次の「音楽」をテーマにした、特別番組を制作！2024年3月放送予定の大注目のバラエティ番組「秋山歌謡祭」であなたのオリジナリティを発揮してみませんか？2023年放送の見逃し配信が累計450万回、YouTubeショートで1300万再生を記録！そんな人気コンテンツに起用するオリジナル楽曲をSHOWROOM限定で大募集します！バーチャルライバーの参加も大歓迎です！
                    </p>
                  </div>
                </div>

                <div className="table-row">
                  <div className="table-cell min-w-[110px] py-5 font-bold">会場詳細</div>
                  <div className="table-cell min-w-[110px] py-5 pl-5">
                    <div className="mb-10">
                      <p><Link href={'tel:123-4567'}>〒123-4567</Link></p>
                      <p className="pb-8">東京都新宿区1-2-3 FNタワー 5F</p>

                      <p>JR新宿駅 東口 13番出口から徒歩5分</p>
                      <p>小田急新宿駅 西口 4番出口から徒歩8分</p>
                    </div>

                    {/* @TODO: google maps component implementation using lat and long */}
                    <GoogleMap />

                  </div>
                </div>

              </div>

            </TabsContent>
            <TabsContent value="event-details">

              <div className="table">
                <div className="table-row">
                  <div className="table-cell min-w-[110px] py-5 font-bold">イベント期間</div>
                  <div className="table-cell min-w-[110px] py-5 pl-5">
                    <div>
                      <p>イベントの詳細を説明する文章がここに入ります。<br />
                        人気お笑いグループ・ロバート秋山竜次の「音楽」をテーマにした、特別番組を制作！2024年3月放送予定の大注目のバラエティ番組「秋山歌謡祭」であなたのオリジナリティを発揮してみませんか？2023年放送の見逃し配信が累計450万回、YouTubeショートで1300万再生を記録！そんな人気コンテンツに起用するオリジナル楽曲をSHOWROOM限定で大募集します！バーチャルライバーの参加も大歓迎です！
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </TabsContent>
            <TabsContent value="venue-details">

              <div className="table">
                <div className="table-row">
                  <div className="table-cell min-w-[110px] py-5 font-bold">イベント期間</div>
                  <div className="table-cell min-w-[110px] py-5 pl-5">

                    <div className="mb-10">
                      <p><Link href={'tel:123-4567'}>〒123-4567</Link></p>
                      <p className="pb-8">東京都新宿区1-2-3 FNタワー 5F</p>

                      <p>JR新宿駅 東口 13番出口から徒歩5分</p>
                      <p>小田急新宿駅 西口 4番出口から徒歩8分</p>
                    </div>

                    {/* @TODO: google maps component implementation using lat and long */}
                    <GoogleMap />

                  </div>
                </div>
              </div>

            </TabsContent>
          </Tabs>

          <div className="flex flex-col items-center justify-center mb-14">

            <Button className="rounded-md w-full max-w-[360px] py-8 font-bold bg-theme-red border-b-4 border-b-[#770404] relative mb-10" varient="primary">
              <span>エントリーする</span>
              <ChevronRight className="absolute right-1 top-2/4 -translate-y-1/2" />
            </Button>

            <Link href={'#'} varient="ghost" target="_blank" className="flex flex-row gap-x-2 items-center text-theme-blue-varient-1">
              <span>エントリーライバーの一覧を見る</span>
              <ExternalLink width={16} height={16} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}

export default page