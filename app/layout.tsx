import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Tweet',
  description: 'This is tweet app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("ルートレイアウト")
  return (
    <html lang="ja">
    <body>
      <Navbar />
      <main className="flex min-h-screen flex-col p-5">
        {children}

      </main>
    </body>
    
    </html>
  )
}
