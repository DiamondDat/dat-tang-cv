import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dat Tuong Tang — Senior Backend Engineer',
  description: 'Senior Backend Engineer specializing in Ruby on Rails, distributed systems, APIs, SQL, and data platforms.',
}

export const viewport: Viewport = {
  themeColor: '#034694',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
