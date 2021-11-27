import Table from './Table'
import { meals, meal_columns, drinks, drink_columns } from '../data/menu_items'
import { MdRestaurant } from 'react-icons/md'

const Menu = () => {
  return (
    <div id="menu" className="pt-16 -mt-16">
      <div
        className="py-20 md:py-24 container mx-auto sm:px-4"
        style={{ minHeight: '100vh' }}
      >
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-roboto-s font-semibold text-6xl text-center sm:text-left mb-4 flex justify-center items-center flex-col">
            <MdRestaurant className="w-6 h-6" />
            Menu
          </h2>
          <div className="px-4 text-center bg-yellow-200 py-6 mb-5 shadow-sm">
            <p className="text-orange-500 uppercase text-lg font-bold">
              Novinka
            </p>
            <p>
              Pri objednávke pízz si možete <br /> zakúpiť rôzne druhy vín:
            </p>
            <p>biele, červené, ružové a ovocné víno.</p>
          </div>
          <Table items={meals} columns={meal_columns} />
          <div className="px-4 text-center text-gray-500 mt-2 md:w-3/5 xl:w-2/5">
            <p className="text-sm">Zoznam alergénov:</p>
            <p className="text-xs">
              1 - obilniny obsahujúce lepok 2 - kôrovce 3 - vajcia 4 - ryby 5 -
              arašidy 6 - sójové semená 7 - mlieko 8 - orechy 9 - zeler 10 -
              horčica 11 - sézamové semená 12 - oxid uhličitý a síričitany 13 -
              vlčí bôb 14 - mäkkýše
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="font-roboto-s font-semibold text-4xl text-center sm:text-left mb-4">
            Nápojový lístok
          </h2>
          <Table items={drinks} columns={drink_columns} />
        </div>
      </div>
    </div>
  )
}

export default Menu
