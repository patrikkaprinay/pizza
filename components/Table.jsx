import React, { useState } from 'react'

const Table = (props) => {
  const formatNumber = (num) => {
    if (typeof num == 'number') {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    } else {
      return 'Pass number'
    }
  }

  const [opened, setOpened] = useState([])

  return (
    <table className="w-full lg:w-4/5 divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {props.columns.map((col) => (
            <th
              key={col.id}
              scope="col"
              className={`${
                col.id == 3 || col.id == 4 ? 'px-1 sm:px-6' : 'px-6'
              } py-3 text-sm font-medium text-gray-500 uppercase tracking-wider ${
                col.center == false ? 'text-left' : 'text-center'
              } ${col.id == 1 ? 'xs:table-cell hidden px-2' : ''}`}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.items.map((item) => (
          <React.Fragment key={item.id}>
            <tr
              key={item.id}
              onClick={() => {
                if (item.description) {
                  if (opened.includes(item.id)) {
                    setOpened((oldArray) => [
                      ...oldArray.filter((id) => id != item.id),
                    ])
                  } else {
                    setOpened((oldArray) => [...oldArray, item.id])
                  }
                }
              }}
              className={`${
                item.description
                  ? 'hover:cursor-pointer hover:bg-gray-100 transition duration-150'
                  : ''
              }${
                opened.includes(item.id) && item.description
                  ? ' bg-gray-200 '
                  : ''
              }`}
            >
              <td className="px-4 py-4 whitespace-nowrap hidden xs:table-cell align-middle text-center">
                <div>{item.id}</div>
              </td>
              <td className="pl-3 pr-3 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-lg font-medium text-gray-900 whitespace-pre-wrap">
                      <div className="flex flex-row">
                        <p className="font-light xs:hidden">
                          {formatNumber(item.id)}
                        </p>
                        <p className="indent-sm xs:indent-0 pl-4 xs:pl-0">
                          <span className="font-light xs:hidden"> | </span>
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-center text-lg">
                <span className="text-gray-600">
                  {item.big ? item.big + '€' : item.amount + 'l'}
                </span>
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-lg text-gray-600 text-center">
                {item.small ? item.small : item.price}€
              </td>
            </tr>
            {opened.includes(item.id) && item.description && (
              <tr className="overflow-hidden">
                <td className="hidden sm:table-cell bg-gray-50 border-0 divide"></td>
                <td colSpan="4" className="p-0">
                  <div className="h-full w-full bg-gray-50 px-6 py-2 text-gray-700 text-sm">
                    {item.description?.ingredients}

                    {' ' + item.description?.allergens}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default Table
