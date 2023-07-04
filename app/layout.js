import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Class Action Education',
  description: 'Redefining the way we learn. Engaging, dynamic live & recorded online classes for learners aged 4 - 18 yrs, taught by industry-leading experts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
