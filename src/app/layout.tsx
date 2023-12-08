import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { Bitter } from 'next/font/google';
import Navbar from "./components/Navbar";
import './globals.css';
import styles from './layout.styles.module.css';
import { metadata as _metadata } from "./metadata";
import RootLayoutClient from "./components/RootLayoutClient";

const font = Bitter({ subsets: ['latin'] })

export const metadata = _metadata

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
      <body className={font.className}>
        <RootLayoutClient />
        <Navbar />
        <div className={styles.wrapper}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
