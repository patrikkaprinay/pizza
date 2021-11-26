import Logo from './Logo'

const Footer = () => {
  return (
    <div className="h-70 bg-gray-300 w-full flex justify-center items-center">
      <div className="container mx-auto">
        <div className="w-4/5 md:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-x sm:divide-y-0 divide-gray-500 py-4 sm:py-10">
          <div className="text-2xl py-8 flex justify-center items-center">
            <Logo />
          </div>
          <div className="flex justify-center items-center flex-col py-4 md:py-8">
            <div className="flex flex-col items-center sm:items-start">
              <a href="#">Úvod</a>
              <a href="#menu">Menu</a>
              <a href="#kontakt">Kontakt</a>
              <a href="#hodiny">Otváracie Hodiny</a>
              <a href="#cennik">Cenník</a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400">&copy; kpty</p>
      </div>
    </div>
  )
}

export default Footer
