import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const font = Nunito({subsets:['latin']})

export const Metadata = {
  title: 'Aribnb',
  description: 'Airbnb clone',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
