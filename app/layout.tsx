import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Footer } from './components/Footer'
import { Phone } from './components/Phone'
import { ToastProvider } from './components/ToastProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Pahlavan General Contracting Inc (PGC Drywall Specialists)',
  description:
    'Specializing in professional drywall hanging, taping, mudding, and finishing, we deliver smooth, seamless results that stand the test of time—whether it`s a new custom home, a commercial build-out, a basement renovation, or a quick repair.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        <Footer />

        <Phone />

        <ToastProvider />

        <div id="modal" />
      </body>
    </html>
  )
}
