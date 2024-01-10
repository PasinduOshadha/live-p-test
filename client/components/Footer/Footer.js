import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {

    const footerMenuItems = [
        {
            "menuLink": "#",
            "menuText": "トップページ"
        },
        {
            "menuLink": "#",
            "menuText": "ライバー"
        },
        {
            "menuLink": "#",
            "menuText": "イベント"
        },
        {
            "menuLink": "#",
            "menuText": "ランキング"
        },
        {
            "menuLink": "#",
            "menuText": "配信中ライブ"
        },
        {
            "menuLink": "#",
            "menuText": "ムービー"
        },
        {
            "menuLink": "#",
            "menuText": "オンラインサロン"
        },
        {
            "menuLink": "#",
            "menuText": "動画販売"
        },
        {
            "menuLink": "#",
            "menuText": "お知らせ"
        },
    ]

    return (
        <footer className="bg-theme-blue-varient-1 text-white">
            <div className="container">
                <div className="menu-wrapper py-12 lg:max-w-[480px] mx-auto">
                    <ul className="list-none flex flex-row flex-wrap justify-center gap-y-5 gap-x-5">
                        {footerMenuItems.length !== 0 &&
                            footerMenuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item?.menuLink} className="footer-link-item text-white hover:text-slate-300 transition-all duration-150 text-sm">{item?.menuText}</Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className="h-[1px] bg-white/10"></div>
            <div className="container bottom-bar py-[50px] flex flex-col items-center">
                <Image src={'/images/footer-logo.svg'} width={190} height={20} alt="footer logo" className="mb-[24px]" />
                <p className="text-[#888] text-center text-sm">Copyright &copy; {`${new Date().getFullYear()} All Rights Reserved`}</p>
            </div>
        </footer>
    )
}

export default Footer