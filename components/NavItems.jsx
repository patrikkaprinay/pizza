import { IoMdCall } from 'react-icons/io'
import { MdRestaurant } from 'react-icons/md'

const NavItems = (props) => {
  return (
    <>
      <a href="#menu" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-lg">
          <MdRestaurant />
          Menu
        </p>
      </a>
      <a href="#kontakt" onClick={props.hideNav}>
        <p className="w-full flex justify-center items-center flex-row gap-2 py-4 md:py-0 hover:cursor-pointer text-lg">
          <IoMdCall />
          Kontakt
        </p>
      </a>
    </>
  )
}

export default NavItems
