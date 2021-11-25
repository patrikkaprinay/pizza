import Link from 'next/link'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdPizza } from 'react-icons/io'
import NavItems from './NavItems'

const Navbar = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div
      className={`bg-gray-300 ${opened ? 'pt-4 pb-2' : 'py-4'} fixed w-full`}
    >
      <div className="container h-full sm:mx-auto flex justify-between items-center px-4">
        <div className="col-span-4 md:col-span-2 flex items-center text-3xl">
          <p className="w-full font-praise">
            <a href="#" className="flex flex-row">
              <IoMdPizza style={{ width: 27 }} />
              Pizza Milano
            </a>
          </p>
        </div>
        <div className="md:col-span-3 md:flex justify-center items-center flex-row gap-8 hidden">
          <NavItems />
        </div>
        <div
          className="col-span-1 md:hidden flex justify-end items-center hover:cursor-pointer"
          onClick={() => setOpened((e) => !e)}
        >
          <BiMenu className="text-3xl" />
        </div>
      </div>
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="col-span-12 overflow-hidden"
          >
            <NavItems hideNav={() => setOpened(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
