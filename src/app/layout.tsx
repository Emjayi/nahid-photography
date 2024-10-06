import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { ImageCacheProvider } from '@/contexts/ImageCacheContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Nahid Shahriarpour',
    template: 'Nahid Shahriarpour | %s'
  },
  description: 'Nahid Shahriarpour is a professional photographer specializing in capturing moments that tell stories.',
  keywords: ['photography', 'photographer', 'Nahid Shahriarpour', 'portfolio', 'images'],
  authors: [{ name: 'Nahid Shahriarpour' }],
  creator: 'Nahid Shahriarpour',
  publisher: 'Nahid Shahriarpour',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nahid Shahriarpour | Professional Photographer',
    description: 'Explore the captivating world of photography through the lens of Nahid Shahriarpour.',
    url: 'https://nahid-photography.vercel.app/',
    siteName: 'Nahid Shahriarpour Photography',
    images: [
      {
        url: 'https://nahid-photography.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nahid Shahriarpour Photography Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahid Shahriarpour | Professional Photographer',
    description: 'Discover the art of visual storytelling through Nahid Shahriarpour\'s photography.',
    creator: '@alirezarefaei',
    images: ['https://nahid-photography.vercel.app/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageCacheProvider>
          <div className="cursor-dot"></div>
          <div className="cursor-outline"></div>
          <Navbar />
          <main className="prevent-select bg-[#DBDFE2] min-h-[100dvh]">{children}</main>
        </ImageCacheProvider>
      </body>
    </html>
  )
}