import Table from './Table'

const Menu = () => {
  return (
    <div
      id="menu"
      className="py-24 container mx-auto sm:px-4 flex items-center justify-center flex-col"
      style={{ minHeight: '90vh' }}
    >
      <h2 className="font-m-plus text-6xl text-center sm:text-left mb-4">
        Menu
      </h2>
      <Table />
    </div>
  )
}

export default Menu
