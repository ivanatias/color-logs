import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Lato } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Color-logs',
  description:
    'Prettify your Node.js console logs with some nice colors, easily.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${lato.className} bg-slate-950`}>
        <Header />
        <main className='px-4 max-w-3xl mx-auto py-10'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
