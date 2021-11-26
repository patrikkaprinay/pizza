import Table from './Table'

const Menu = () => {
  const data = [
    {
      id: 1,
      name: 'Margerita',
      description: 'rajčinový pretlak, syr',
      big: '4,50€',
      small: '5,10€',
    },
    {
      id: 2,
      name: 'Hawaii',
      description: 'rajčinový pretlak, syr, šunka, kukurica',
      big: '4,50€',
      small: '5,10€',
    },
    {
      id: 3,
      name: 'Gazdovska',
      description:
        'rajčinový pretlak, syr, šunka, slanina, kur.mäso, kukurica, niva',
      big: '3,20€',
      small: '4,20€',
    },
    {
      id: 4,
      name: 'Proscuto',
      description: 'rajčinový pretlak, syr, salám, kukurica',
      big: '3,80€',
      small: '4,40€',
    },
    {
      id: 5,
      name: 'El Funghi',
      description: 'rajčinový pretlak, syr, šampiňóny, olivy, kukurica	',
      big: '3,90€',
      small: '4,80€',
    },
    {
      id: 6,
      name: 'Salama',
      description: 'rajčinový pretlak, syr, šunka, ananás	',
      big: '4,20€',
      small: '5,10€',
    },
    {
      id: 7,
      name: 'Pepperoni',
      description: 'rajčinový pretlak, syr, kuracia mäso, cibuľa, kukurica	',
      big: '3,90€',
      small: '4,70€',
    },
  ]
  const columns = [
    {
      id: 1,
      title: 'Číslo',
    },
    {
      id: 2,
      title: 'Názov',
      center: false,
    },
    {
      id: 3,
      title: 'Veľká 450g',
    },
    {
      id: 4,
      title: 'Malá 350g',
    },
  ]
  return (
    <div
      id="menu"
      className="py-10 md:py-24 container mx-auto sm:px-4 flex items-center justify-center flex-col"
      style={{ minHeight: '100vh' }}
    >
      <h2 className="font-m-plus text-6xl text-center sm:text-left mb-4">
        Menu
      </h2>
      <Table data={data} columns={columns} />
    </div>
  )
}

export default Menu
