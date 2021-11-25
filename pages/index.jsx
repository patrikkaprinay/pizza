import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Head>
          <title>Pizza Milano</title>
        </Head>
        <div className="flex justify-center items-center flex-col">
          <h1 className="pt-32 text-center font-praise text-8xl sm:text-10xl">
            Pizza Milano
          </h1>
          <p className="text-xl md:text-2xl w-4/6 mx-auto text-center">
            Pizzeria Milano ponúka široký výber najlepšej talianskej pizze vo
            Veľkých Úľanoch a rozvoz do blízkeho okolia.
          </p>
          <button className="px-4 py-3 text-lg md:text-xl bg-yellow-300 rounded-md shadow-sm mt-4">
            <Link href="/menu">Menu</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
