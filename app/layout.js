import { Navbar } from '@/components/Navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Footer } from '@/components/Footer/page'

const inter = Inter({ subsets: ['latin'] })
const Comfortaa = localFont({
  src: '../public/assets/fonts/Comfortaa.ttf',
  display: 'swap',
  variable: '--font-comfortaa',
})

const Teko = localFont({
  src: '../public/assets/fonts/Teko.ttf',
  display: 'swap',
  variable: '--font-teko',

})

export const metadata = {
  title: 'Class Action Education',
  description: 'Redefining the way we learn. Engaging, dynamic live & recorded online classes for learners aged 4 - 18 yrs, taught by industry-leading experts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Comfortaa.variable} ${Teko.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
