import Table from './Table'
import { meals, columns } from '../data/menu_items'

const Menu = () => {
  return (
    <div
      id="menu"
      className="py-20 md:py-24 container mx-auto sm:px-4 flex items-center justify-center flex-col"
      style={{ minHeight: '100vh' }}
    >
      <h2 className="font-roboto-s font-semibold text-6xl text-center sm:text-left mb-4">
        Menu
      </h2>
      <div className="px-4 text-center bg-yellow-200 py-6 mb-5">
        <p className="text-yellow-500 uppercase text-lg font-bold">Novinka</p>
        <p>Pri objednávke pízz si možete zakúpiť rôzne druhy vín:</p>
        <p>biele, červené, ružové a ovocné víno.</p>
      </div>
      <Table meals={meals} columns={columns} />
    </div>
  )
}

export default Menu
