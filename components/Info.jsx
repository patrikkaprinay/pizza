import Image from 'next/image'

const Info = () => {
  const open = [
    {
      id: 1,
      name: 'Pondelok',
      from: '10:00',
      until: '21:00',
    },
    {
      id: 2,
      name: 'Utorok',
      from: '10:00',
      until: '21:00',
    },
    {
      id: 3,
      name: 'Streda',
      from: '9:00',
      until: '22:00',
    },
    {
      id: 4,
      name: 'Štvrtok',
      from: '10:00',
      until: '20:00',
    },
    {
      id: 5,
      name: 'Piatok',
      from: '10:30',
      until: '23:00',
    },
    {
      id: 6,
      name: 'Sobota',
      from: '10:00',
      until: '23:00',
    },
    {
      id: 7,
      name: 'Nedeľa',
      from: '15:00',
      until: '20:00',
    },
  ]

  const cennik = [
    {
      id: 1,
      name: 'Veľké Úľany',
      price: '0,40',
    },
    {
      id: 2,
      name: 'Jánovce',
      price: '0,60',
    },
    {
      id: 3,
      name: 'Jelka',
      price: '0,70',
    },
    {
      id: 4,
      name: 'Lenčehel',
      price: '0,80',
    },
    {
      id: 5,
      name: 'Hajmáš',
      price: '1,20',
    },
    {
      id: 6,
      name: 'Sedín',
      price: '1,50',
    },
    {
      id: 7,
      name: 'Hrubá Borša',
      price: '1,60',
    },
    {
      id: 8,
      name: 'Sládkovičovo',
      price: '1,60',
    },
  ]

  const extra = [
    {
      id: 1,
      name: 'Pri objednávke 4 a viac pízz rozvoz ZADARMO',
    },
    {
      id: 2,
      name: 'Pizza krabica a kečup ZADARMO',
    },
  ]

  return (
    <div className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-full lg:w-3/5 mx-auto h-full">
        <div className="flex items-center flex-col my-5 md:my-0" id="hodiny">
          <h3 className="text-4xl md:text-3xl font-roboto-s font-medium text-center">
            Otváracie hodiny
          </h3>
          <div className="w-full mt-4 text-xl md:text-base">
            {open.map((day) => (
              <div className="grid grid-cols-4 sm:w-2/3 mx-auto" key={day.id}>
                <div className="col-span-2 font-medium">{day.name}:</div>
                <div className="col-span-2 text-right">
                  {day.from} - {day.until}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center flex-col my-5 md:my-0" id="cennik">
          <h3 className="text-4xl md:text-3xl font-roboto-s font-medium text-center">
            Cenník pre donášku
          </h3>
          <div className="w-full mt-4 text-xl md:text-base">
            {cennik.map((village) => (
              <div
                className="grid grid-cols-4 sm:w-2/3 mx-auto"
                key={village.id}
              >
                <div className="col-span-2 font-medium">{village.name}:</div>
                <div className="col-span-2 text-right">{village.price}€</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/6 md:w-5/6 md:mx-auto md:rounded-md py-8 text-2xl md:text-xl bg-orange-700 text-white my-7 font-bold font-roboto-s">
        <div className="w-5/6 md:w-2/3 mx-auto">
          {extra.map((extra) => (
            <p className="text-center" key={extra.id}>
              {extra.name}.
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:w-2/5 mx-auto gap-2">
        <div className="w-5/6 md:w-2/3 mx-auto text-center">
          <p>Prijímame všetky typy gastro lístkov</p>
          <Image src="/gastrolistky.jpg" height={55} width={195} />
        </div>
      </div>
    </div>
  )
}

export default Info
