import Logo from './Logo'

const Footer = () => {
  return (
    <div className="h-70 bg-gray-300 w-full flex justify-center items-center pb-1">
      <div className="container mx-auto text-center">
        <div className="w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-y-0 divide-gray-500 py-4 sm:py-10">
          <div className="text-4xl py-8 flex justify-center items-center flex-col">
            <Logo />
            <div className="text-lg mt-5 text-gray-500">
              <p>Leninová 166/10</p>
              <p>Veľké Úľany, 925 22</p>
              <p>Reklamačná linka:</p>
              <p>0904 270 546</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col py-4 md:py-8 row-span-full sm:row-auto border-b border-gray-500">
            <div className="flex flex-col items-center sm:items-start text-lg">
              <a
                className="hover:text-gray-500 transition duration-200"
                href="#"
              >
                Úvod
              </a>
              <a
                className="hover:text-gray-500 transition duration-200"
                href="#menu"
              >
                Menu
              </a>
              <a
                className="hover:text-gray-500 transition duration-200"
                href="#kontakt"
              >
                Kontakt
              </a>
              <a
                className="hover:text-gray-500 transition duration-200"
                href="#hodiny"
              >
                Otváracie hodiny
              </a>
              <a
                className="hover:text-gray-500 transition duration-200"
                href="#cennik"
              >
                Cenník pre donášku
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://kpty.xyz"
          className="text-gray-400 hover:text-gray-500 transition duration-300 font-josefin"
        >
          &copy; kpty
        </a>
      </div>
    </div>
  )
}

export default Footer
