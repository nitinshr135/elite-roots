import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Roots - Premium Fox Nuts | Healthy Indian Snacking',
  description: 'Discover the finest quality Fox Nuts (Makhana) - a traditional Indian superfood. High protein, low calorie, crunchy snacks perfect for healthy snacking. Products coming soon!',
  keywords: 'fox nuts, makhana, indian snacks, healthy snacking, protein rich, traditional indian food, lotus seeds, crunchy snacks, gluten free, natural snacks',
  authors: [{ name: 'Elite Roots' }],
  creator: 'Elite Roots',
  publisher: 'Elite Roots',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eliteroots.com'),
  openGraph: {
    title: 'Elite Roots - Premium Fox Nuts | Healthy Indian Snacking',
    description: 'Discover the finest quality Fox Nuts (Makhana) - a traditional Indian superfood. High protein, low calorie, crunchy snacks perfect for healthy snacking.',
    url: 'https://eliteroots.com',
    siteName: 'Elite Roots',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Fox Nuts (Makhana) - Healthy Indian Snacking',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Roots - Premium Fox Nuts | Healthy Indian Snacking',
    description: 'Discover the finest quality Fox Nuts (Makhana) - a traditional Indian superfood.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
