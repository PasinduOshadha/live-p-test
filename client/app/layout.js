import { Noto_Sans_JP, Inter } from "next/font/google"
import '@/styles/globals.css'
import { cn } from "@/lib/utils"

// components 
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

 const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  fallback: ['system-ui', 'arial']
})



// TODO: implement font family for EN version

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${noto_sans_jp.variable}`}>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}