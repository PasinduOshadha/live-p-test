"use client"

import { PT_Serif } from 'next/font/google'
import React from 'react'
import { useTimer } from 'react-timer-hook';


const pt_serif = PT_Serif({
    subsets: ["latin"],
    weight: ['400', '700'],
    variable: "--font-pt-sans",
    fallback: ['system-ui', 'arial']
})


function DayCounter({ expiryTimestamp }) {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn('onExpire called')
    })

    return (
        <div className="flex flex-row justify-center">
            <div className="timer-wrapper flex flex-row">

                <div className="days-wrapper min-w-[80px] mx-7">
                    <div className={`days text-[70px] font-bold ${pt_serif.className} text-center`}>
                        {/* 08 */}
                        {String(days).padStart(2, "0")}
                    </div>
                    <div className={`timer-item-text text-[24px] font-bold ${pt_serif.className} text-center`}>
                        Days
                    </div>
                </div>

                <div className="hours-wrapper min-w-[80px] mx-7">
                    <div className={`hours text-[70px] font-bold ${pt_serif.className} text-center`}>
                        {/* 15 */}
                        {String(hours).padStart(2, "0")}
                    </div>
                    <div className={`timer-item-text text-[24px] font-bold ${pt_serif.className} text-center`}>
                        Hours
                    </div>
                </div>

                <div className="minutes-wrapper min-w-[80px] mx-7">
                    <div className={`minutes text-[70px] font-bold ${pt_serif.className} text-center`}>
                        {/* 37 */}
                        {String(minutes).padStart(2, "0")}
                    </div>
                    <div className={`timer-item-text text-[24px] font-bold ${pt_serif.className} text-center`}>
                        Minutes
                    </div>
                </div>

                <div className="seconds-wrapepr min-w-[80px] mx-7">
                    <div className={`days text-[70px] font-bold ${pt_serif.className} text-center`}>
                        {/* 07 */}
                        {String(seconds).padStart(2, "0")}
                    </div>
                    <div className={`timer-item-text text-[24px] font-bold ${pt_serif.className} text-center`}>
                        Seconds
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DayCounter