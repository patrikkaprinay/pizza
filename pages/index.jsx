import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Head>
          <title>Pizza Milano</title>
        </Head>
        <div className="grid grid-cols-2">
          <div className=" h-80 relative">
            <Image src="/pizza.jpeg" layout="fill" />
          </div>
          <div className="">a</div>
        </div>
      </div>
    </div>
  )
}
