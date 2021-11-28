import { IoMdCall } from 'react-icons/io'
import { MdDeliveryDining, MdRestaurant } from 'react-icons/md'
import { HiClock } from 'react-icons/hi'

const NavItems = (props) => {
  return (
    <>
      <a href="#menu" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-md hover:text-gray-600 transition duration-200">
          <MdRestaurant />
          Menu
        </p>
      </a>
      <a href="#kontakt" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-md hover:text-gray-600 transition duration-200">
          <IoMdCall />
          Kontakt
        </p>
      </a>
      <a href="#hodiny" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-md hover:text-gray-600 transition duration-200">
          <HiClock />
          Otvaracie Hodiny
        </p>
      </a>
      <a href="#cennik" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-md hover:text-gray-600 transition duration-200">
          <MdDeliveryDining />
          Cenník pre donášku
        </p>
      </a>
      <a
        onClick={() => {
          props.hideNav
          document
            .querySelector('#kontakt')
            .scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-md hover:text-gray-600 transition duration-200">
          <MdDeliveryDining />
          Test
        </p>
      </a>
    </>
  )
}

export default NavItems
