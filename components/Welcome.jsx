import Head from 'next/head'

const Welcome = () => {
  return (
    <main className="py-44">
      <div className="container mx-auto">
        <Head>
          <title>Pizza Milano</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <div className="md:w-max py-12 md:px-24 flex justify-center items-center flex-col bg-gray-300 bg-opacity-90 rounded-lg mx-auto md:py-16">
          <h1 className="text-center font-praise text-7xl sm:text-8xl mb-5">
            Pizza Milano
          </h1>
          <p className="text-xl md:text-2xl md:w-96 mx-auto text-center">
            Pizzeria Milano ponúka široký výber najlepšej talianskej pizze vo
            Veľkých Úľanoch a rozvoz do blízkeho okolia.
          </p>
          <a
            href="#menu"
            className="px-6 py-2 text-lg md:text-xl text-gray-50 bg-orange-700 hover:bg-orange-800 rounded-md shadow-sm mt-4"
          >
            Menu
          </a>
        </div>
      </div>
    </main>
  )
}

export default Welcome
