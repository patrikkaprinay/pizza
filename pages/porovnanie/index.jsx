import Head from 'next/head'

const Comparison = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <Head>
        <title>Porovnanie</title>
      </Head>
      <div className="bg-gray-100 w-full md:w-5/6 rounded-lg py-10">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold uppercase text-gray-900">
            Nová stránka
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col px-2 md:w-4/5 text-center text-2xl text-gray-800 gap-4">
            <p>
              Dobrý deň prajem, volám sa <b>Patrik Kaprinay</b> a som študentom
              informatiky na Slovenskej technickej univerzite v Bratislave. Vo
              voľnom čase som sa rozhodol vylepšiť Vašu stránku.
            </p>
            <p>
              Nová stránka je už responzívna (prispôsobí sa podľa toho, či ju
              pozerajú na počítači alebo na mobile), bola vytvorená v prvom rade
              na mobilné zobrazenie. Vypísanie pízz do tabuľky funguje
              automaticky, informácie o pizzach, ako je názov, alergény, cena
              atď., sú uložené v samostatnom súbore, preto sú dáta ľahko
              modifikateľné a udržateľné.
            </p>
            <div className="my-12 w-3/5 mx-auto">
              <p className="text-4xl">Stránku môžete navštíviť na adrese:</p>
              <a href="/" className="text-blue-800 underline">
                nova-pizzeria-milano.netlify.app/
              </a>
              <p className="mt-8">
                V prípade ak Vás takáto verzia stránky zaujala ponúkam Vám
                spoluprácu. Kontaktovať ma môžete na tel. c. 0918 844 643,
                <br /> v case (10:00 - 12:00 17:00 - 19:00) alebo emailom:
              </p>
              <a
                href="mailto:patrik.kaprinay@gmail.com"
                className="text-blue-800 underline"
              >
                patrik.kaprinay@gmail.com
              </a>
            </div>
            <h2 className="text-4xl text-gray-900 font-bold uppercase">
              Screenshoty webovej a mobilnej verzie
            </h2>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u2.png" />
            </div>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u1.png" />
            </div>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u3.png" />
            </div>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u4.png" />
            </div>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u5.png" />
            </div>
            <div className="relative w-full my-2">
              <img className="rounded-lg" src="/comparison/u6.png" />
            </div>
            <div className="my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                <img className="rounded-2xl" src="/comparison/m-1.png" />
                <img className="rounded-2xl" src="/comparison/m-navbar.png" />
                <img className="rounded-2xl" src="/comparison/m-2.png" />
                <img className="rounded-2xl" src="/comparison/m-3.png" />
                <img className="rounded-2xl" src="/comparison/m-4.png" />
                <img className="rounded-2xl" src="/comparison/m-5.png" />
                <img className="rounded-2xl" src="/comparison/m-6.png" />
                <img className="rounded-2xl" src="/comparison/m-7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison
