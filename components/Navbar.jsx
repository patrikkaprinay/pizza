import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-gray-300 h-16">
      <div className="container h-full mx-auto grid grid-cols-5">
        <div className="col-span-1 flex items-center text-3xl">
          <p className="w-max font-praise">Pizza Milano</p>
        </div>
        <div className="col-span-3 flex justify-center items-center flex-row gap-8">
          <div className="font-sans">
            <Link href="/menu">Menu</Link>
          </div>
          <div className="font-sans">
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default Navbar
