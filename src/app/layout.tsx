"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DisplayValuesProvider } from './context/DisplayContext'

const inter = Inter({ subsets: ['latin'] })

 const metadata: Metadata = {
  title: 'React Periodic Table',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisplayValuesProvider> 
          {children}
        </DisplayValuesProvider>
       </body>
    </html>
  )
}
