import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeffrey Chou - Software Engineer',
  description: 'Jeffrey Chou is a software engineer from the Bay Area. Thanks for visiting!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
