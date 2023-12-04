import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar"
import styles from './layout.styles.module.css';

const inter = Bitter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CALISMOVE®',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className={styles.wrapper}>
          {children}
        </div>
      </body>
    </html>
  )
}
