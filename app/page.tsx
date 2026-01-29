'use client'

import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Offer } from './components/Offer'
import { Services } from './components/Services'
import { WorkShowcase } from './components/WorkShowcase'
import { GetInTouch } from './components/GetInTouch'

import { mainImagesSrcArray } from './constants'

export default function Home() {
  return (
    <>
      <Hero />

      <Intro />

      <Offer />

      <GetInTouch />

      <WorkShowcase images={mainImagesSrcArray} main />

      <Services />
    </>
  )
}
