import Head from 'next/head'

const Welcome = () => {
  return (
    <main className="">
      <div className="container mx-auto">
        <Head>
          <title>Pizzéria Milano — Veľké Úľany</title>
          <meta
            name="description"
            content="Pizzeria Milano ponúka široký výber najlepšej talianskej pizze vo Veľkých Úľanoch a rozvoz do blízkeho okolia."
          />
          <meta
            name="keywords"
            content="Pizzéria, Pizzéria Milano, Velke Ulany, pizza"
          />
          <meta name="author" content="kpty" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <div className="px-3 md:w-max py-12 md:px-24 flex justify-center items-center flex-col bg-gray-300 bg-opacity-90 xs:rounded-lg mx-auto md:py-16">
          <h1 className="text-center font-praise text-7xl sm:text-8xl mb-5">
            Pizzéria Milano
          </h1>
          <p className="text-xl md:text-2xl md:w-96 mx-auto text-center">
            Pizzeria Milano ponúka široký výber najlepšej talianskej pizze
            <br /> vo Veľkých Úľanoch a rozvoz do blízkeho okolia.
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
