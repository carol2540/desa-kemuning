import { Inter } from 'next/font/google'
import { MainNews, SubNews, Banner, About, Produk, Faq } from '@/components/pages/Home'
import { useAuth } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <>
      <MainNews />
      <SubNews />
      <Banner />
      <About />
      <Produk />
      <Faq />
    </>
  )
}
