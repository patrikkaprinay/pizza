import Head from 'next/head'
import Contact from '../components/Contact'
import Info from '../components/Info'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
      <main className="pt-44">
        <div className="container mx-auto">
          <Head>
            <title>Pizza Milano</title>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
          </Head>
          <div className="flex justify-center items-center flex-col bg-gray-300 py-8 bg-opacity-90 rounded-lg w-4/5 md:w-3/5 mx-auto md:py-16">
            <h1 className="text-center font-praise text-7xl sm:text-8xl">
              Pizza Milano
            </h1>
            <p className="text-xl md:text-2xl w-4/6 mx-auto text-center">
              Pizzeria Milano ponúka široký výber najlepšej talianskej pizze vo
              Veľkých Úľanoch a rozvoz do blízkeho okolia.
            </p>
            <button className="px-4 py-3 text-lg md:text-xl bg-yellow-300 rounded-md shadow-sm mt-4">
              <a href="#menu">Menu</a>
            </button>
          </div>
        </div>
      </main>
      <Menu />
      <Contact />
      <Info />
    </div>
  )
}
