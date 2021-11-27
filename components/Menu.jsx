import Table from './Table'
import { meals, columns } from '../menu_items'

const Menu = () => {
  return (
    <div
      id="menu"
      className="py-20 md:py-24 container mx-auto sm:px-4 flex items-center justify-center flex-col"
      style={{ minHeight: '100vh' }}
    >
      <h2 className="font-m-plus text-6xl text-center sm:text-left mb-4">
        Menu
      </h2>
      <Table meals={meals} columns={columns} />
    </div>
  )
}

export default Menu
