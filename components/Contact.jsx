import { IoMdCall } from 'react-icons/io'

const Contact = () => {
  return (
    <div className="h-80 bg-gray-200" id="kontakt">
      <div className="flex items-center justify-center h-full flex-col gap-4 text-6xl font-m-plus">
        <h2>Kontakt</h2>
        <div className="flex space-x-4 text-xl items-center">
          <IoMdCall />
          <h3>0948 604 555</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
