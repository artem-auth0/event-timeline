import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Event Stream | Real-time Updates',
  description:
    'Stay informed with real-time event updates and signals from various sources. Track and monitor events as they happen.',
  keywords: 'events, real-time, monitoring, signals, updates',
  authors: [{ name: 'Artem Zozulia' }],
  openGraph: {
    title: 'Event Stream | Real-time Updates',
    description: 'Stay informed with real-time event updates and signals from various sources.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
