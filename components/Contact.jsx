import { IoMdCall, IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const Contact = () => {
  const number = '0948 604 222'
  const [QR, setQR] = useState(false)
  return (
    <div className="py-12 bg-gray-200" id="kontakt">
      <div className="flex items-center justify-center h-full flex-col gap-4 text-6xl font-m-plus">
        <h2 className="mb-4 font-semibold font-roboto-s flex items-center justify-center flex-col">
          <IoMdCall className="w-6 h-6" />
          Kontakt
        </h2>
        <a
          href={`tel${number}`}
          className="flex space-x-4 text-xl items-center text-gray-50 bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-md shadow-md transform\
           duration-300 font-regular font-sans"
        >
          <IoMdCall className="mr-2" />
          {number}
        </a>
        <button
          onClick={() => setQR((before) => !before)}
          className="text-sm text-gray-500 hover:text-gray-600 transition duration-300 flex items-center gap-1"
        >
          QR Code
          <IoIosArrowDown className={`${QR ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        <AnimatePresence>
          {QR && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-2 bg-white rounded-md"
            >
              <Image src="/qr.png" height={100} width={100} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Contact
