import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const font = Nunito({subsets:['latin']})

export const Metadata = {
  title: 'Aribnb',
  description: 'Airbnb clone',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal/>
          {/*<Modal actionLabel='Submit' title='Hello World' isOpen  />*/}
          <ToasterProvider/>
          <Navbar/>
        </ClientOnly>
        
        {children}</body>
    </html>
  )
}
