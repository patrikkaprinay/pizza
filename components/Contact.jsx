import { IoMdCall } from 'react-icons/io'

const Contact = () => {
  const number = '0948 604 555'
  return (
    <div className="h-80 bg-gray-200" id="kontakt">
      <div className="flex items-center justify-center h-full flex-col gap-4 text-6xl font-m-plus">
        <h2 className="mb-4 font-semibold font-roboto-s">Kontakt</h2>
        <a
          href={`tel:${number}`}
          className="flex space-x-4 text-xl items-center bg-yellow-400 px-4 py-2 rounded-md shadow-md transform\
           duration-300 hover:bg-yellow-500 font-regular font-sans"
        >
          <IoMdCall className="mr-2" />
          {number}
        </a>
      </div>
    </div>
  )
}

export default Contact
