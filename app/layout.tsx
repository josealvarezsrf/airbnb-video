import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({subsets:['latin']})

export const Metadata = {
  title: 'Aribnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal/>
          <RegisterModal/>
          {/*<Modal actionLabel='Submit' title='Hello World' isOpen  />*/}
          <ToasterProvider/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        
        {children}</body>
    </html>
  )
}
