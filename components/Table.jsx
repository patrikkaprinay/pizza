import { AnimatePresence, motion } from 'framer-motion'
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
      <table className="w-full lg:w-3/5 divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {props.columns.map((col) => (
            <th
              key={col.id}
              scope="col"
              className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${
                col.center == false ? 'text-left' : 'text-center'
              } ${col.id == 1 ? 'xs:table-cell hidden' : ''}`}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.meals.map((item) => (
          <React.Fragment key={item.id}>
            <tr
              key={item.id}
              onClick={() => {
                if (opened.includes(item.id)) {
                  setOpened((oldArray) => [
                    ...oldArray.filter((id) => id != item.id),
                  ])
                } else {
                  setOpened((oldArray) => [...oldArray, item.id])
                }
              }}
              className={`hover:cursor-pointer hover:bg-gray-100 ${
                opened.includes(item.id) ? 'bg-gray-200' : ''
              } transition duration-150`}
            >
              <td className="px-6, py-4 whitespace-nowrap items-center justify-center hidden xs:flex">
                <div className="">{item.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                      <p>
                        <span className="font-light xs:hidden">
                          {formatNumber(item.id) + '|'}
                        </span>
                        {item.title}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 hidden md:block">
                      {item.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-md">
                <span className="text-gray-600">{item.big}€</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600 text-center">
                {item.small}€
              </td>
            </tr>
            {opened.includes(item.id) && (
              <tr className="overflow-hidden">
                <td colSpan="4">
                  <div className="h-full w-full bg-gray-50 px-6 py-2 text-gray-700 text-sm">
                    {item.ingredients}

                    {' ' + item.allergens}
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
