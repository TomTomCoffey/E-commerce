import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Foot from './components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        <Nav />
        {children}
        <Foot />
        </body>
    </html>
  )
}
