import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'JM SEMEDO | Construção e Comércio',
  description: 'Empresa líder em construção civil, reformas, reabilitação e acabamentos. Transformamos os seus sonhos em realidade com qualidade e profissionalismo.',
  keywords: ['construção civil', 'reformas', 'reabilitação', 'acabamentos', 'JM SEMEDO', 'construção'],
  icons: {
    icon: '/images/LOGOW.png',
    apple: '/images/LOGOW.png',
  },
}

export const viewport = {
  themeColor: '#E31E24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
