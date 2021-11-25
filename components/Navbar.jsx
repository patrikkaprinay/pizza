import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdPizza } from 'react-icons/io'

const Navbar = () => {
  const [opened, setOpened] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setOpened(false)
    })
  }, [])

  return (
    <motion.div className={`bg-gray-300 ${opened ? 'pt-4 pb-2' : 'py-4'}`}>
      <div className="container h-full sm:mx-auto grid grid-cols-5 px-4">
        <div className="col-span-4 md:col-span-1 flex items-center text-3xl">
          <p className="w-full font-praise">
            <Link href="/">
              <p className="flex flex-row">
                <IoMdPizza style={{ width: 27 }} />
                Pizza Milano
              </p>
            </Link>
          </p>
        </div>
        <div className="md:col-span-3 md:flex justify-center items-center flex-row gap-8 hidden">
          <div className="font-sans">
            <Link href="/menu">Menu</Link>
          </div>
          <div className="font-sans">
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div
          className="col-span-1 md:hidden flex justify-end items-center hover:cursor-pointer"
          onClick={() => setOpened((e) => !e)}
        >
          <BiMenu className="text-3xl" />
        </div>
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="col-span-12 overflow-hidden"
            >
              <Link href="/menu">
                <p className="w-full flex justify-center items-center flex-col py-4 hover:cursor-pointer">
                  Menu
                </p>
              </Link>
              <Link href="/kontakt">
                <p className="w-full flex justify-center items-center flex-col py-4 hover:cursor-pointer">
                  Kontakt
                </p>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Navbar
