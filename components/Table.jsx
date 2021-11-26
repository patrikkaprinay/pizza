const Table = () => {
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th
              key={col.id}
              scope="col"
              className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${
                col.center == false ? 'text-left' : 'text-center'
              }`}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-6, py-4 whitespace-nowrap flex items-center justify-center">
              <div className="">{item.id}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500 hidden md:block">
                    {item.description}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-md">
              <span className="text-gray-600">{item.big}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600 text-center">
              {item.small}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
