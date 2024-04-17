import { Inter } from 'next/font/google'
import Navbar from '@/Componnets/Basics/Navbar/Navbar'
import Headcontent from '@/Componnets/Homepages/Headcontent'
import Stangersections from '@/Componnets/Homepages/Stangersections'
import Videocallingsection from '@/Componnets/Homepages/Videocallingsection'
import Interestsection from '@/Componnets/Homepages/Interestsection'
import Findfriend from '@/Componnets/Homepages/Findfriend'
import Footer from '@/Componnets/Basics/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <Navbar/>
      <Headcontent/>
      <Stangersections/>
      <Videocallingsection/>
      <Interestsection/>
      <Findfriend/>
      <Footer/>
    </main>
  )
}
