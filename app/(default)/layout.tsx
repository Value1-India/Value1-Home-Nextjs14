'use client'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import ScrollToTop from '@/components/ui/Scroll2Top'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: false,
      disable: false,
      mirror:true,
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow layout-frame">

        <PageIllustration />

        {children}

      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
