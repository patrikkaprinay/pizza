import Table from './Table'

const Menu = () => {
  const data = [
    {
      id: 1,
      title: 'Margerita',
      small: '4,10',
      big: '3,50',
      allergens: '(1, 7)',
    },
    {
      id: 2,
      title: 'Šunková',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 3,
      title: 'Šunková s kuracím mäsom',
      small: '5,50',
      big: '4,80',
      allergens: '(1, 7)',
    },
    {
      id: 4,
      title: 'Salámová',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 5,
      title: 'Šunkovo-Šampiňónová',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 6,
      title: 'Vegetariánska',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 7,
      title: 'Tuniaková',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 4, 7)',
    },
    { id: 8, title: 'Hawai', small: '4,50', big: '3,80', allergens: '(1, 7)' },
    {
      id: 9,
      title: 'Klobásová',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 10,
      title: 'Slaninová',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 11,
      title: 'Syrová',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 12,
      title: 'Pizza Milano',
      small: '5,50',
      big: '4,80',
      allergens: '(1, 3, 7)',
    },
    {
      id: 13,
      title: 'Kuracia',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 14,
      title: 'Pálivá',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 15,
      title: 'Nivová s olivami',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 16,
      title: 'Bryndzová',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 17,
      title: 'Prosciutto ',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 18,
      title: 'Špenátová so slaninou',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 3, 7)',
    },
    {
      id: 19,
      title: 'Špenátová so šunkou',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 20,
      title: 'Sedliacka',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 21,
      title: 'Šunková s artičokmi',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 22,
      title: 'Šunkovo-salámová',
      small: '5,10',
      big: '4,40',
      allergens: '(1, 7)',
    },
    {
      id: 23,
      title: 'Ovocná pizza',
      small: '4,50',
      big: '3,80',
      allergens: '(1, 7)',
    },
    {
      id: 24,
      title: 'Mexická pizza',
      small: '4,80',
      big: '5,50',
      allergens: '(1, 7)',
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
      className="py-20 md:py-24 container mx-auto sm:px-4 flex items-center justify-center flex-col"
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
