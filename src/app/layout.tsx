import type { Metadata } from 'next'
import 'aos/dist/aos.css';
import { Inter } from 'next/font/google'
import './globals.css'
import AOSProvider from '@/components/AOSProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elites Roots - Deep Roots. Pure Nutrition. Global Vision.',
  description: 'A proudly Bihar-born brand, deeply rooted in Mithila and North Bihar - the heartland of the world\'s finest foxnuts (makhana). Premium quality, naturally grown, rich in protein and antioxidants.',
  keywords: 'elites roots, fox nuts, makhana, bihar makhana, mithila, darbhanga, indian superfood, healthy snacks, protein rich, traditional indian food, lotus seeds, crunchy snacks, gluten free, natural snacks, bihar farmers',
  authors: [{ name: 'Elites Roots' }],
  creator: 'Elites Roots',
  publisher: 'Elites Roots',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eliteroots.com'),
  openGraph: {
    title: 'Elites Roots - Deep Roots. Pure Nutrition. Global Vision.',
    description: 'A proudly Bihar-born brand bringing the world\'s finest foxnuts from Mithila and North Bihar. Deep Roots. Pure Nutrition. Global Vision.',
    url: 'https://eliteroots.com',
    siteName: 'Elites Roots',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elites Roots - Premium Fox Nuts (Makhana) from Bihar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elites Roots - Deep Roots. Pure Nutrition. Global Vision.',
    description: 'A proudly Bihar-born brand bringing the world\'s finest foxnuts from Mithila and North Bihar.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  )
}
