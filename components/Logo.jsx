import { IoMdPizza } from 'react-icons/io'

const Logo = (props) => {
  return (
    <p
      className={`font-praise flex flex-row justify-center ${
        props.start ? 'items-start' : 'items-center'
      }`}
    >
      <IoMdPizza style={{ width: 27 }} />
      Pizzéria Milano
    </p>
  )
}

export default Logo
