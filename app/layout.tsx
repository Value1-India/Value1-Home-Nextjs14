import './css/style.css'

import { Inter, Rubik } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap'
})

export const metadata = {
  title: 'Value1',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} font-inter antialiased bg-black-800 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden gold-background">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 