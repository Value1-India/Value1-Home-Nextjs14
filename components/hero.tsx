'use client'

import HeaderCarousal from "./HeaderCarousal"

export default function Hero() {


  return (
    <section >
      <div className="max-w-full mx-auto md:px-4 px-3">

        {/* Hero content */}
        <div className="relative pt-40 pb-4">

          <HeaderCarousal />
        </div>

      </div>
    </section>
  )
}
