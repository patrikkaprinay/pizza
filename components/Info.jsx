import Image from 'next/image'
import { HiClock } from 'react-icons/hi'
import { MdDeliveryDining } from 'react-icons/md'
import { extra, open, cennik } from '../data/info'

const Info = () => {
  return (
    <div className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-full lg:w-3/5 mx-auto h-full">
        <div className="flex items-center flex-col my-5 md:my-0" id="hodiny">
          <div className="flex justify-center items-center flex-col gap-2 md:gap-0">
            <HiClock className="w-6 h-6 my-1" />
            <h3 className="text-4xl md:text-3xl font-roboto-s font-medium text-center">
              Otváracie hodiny
            </h3>
          </div>
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
          <div className="flex justify-center items-center flex-col gap-2 md:gap-0">
            <MdDeliveryDining className="w-8 h-8" />
            <h3 className="text-4xl md:text-3xl font-roboto-s font-medium text-center">
              Cenník pre donášku
            </h3>
          </div>
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
      <div className="w-full lg:w-4/6 xl:w-3/6 md:w-5/6 md:mx-auto md:rounded-md py-8 text-2xl md:text-xl bg-orange-500 text-white my-7 font-bold font-roboto-s shadow-sm">
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
          <p>Prijímame všetky typy gastrolístkov</p>
          <Image
            src="/gastrolistky.jpg"
            alt="Typy gastrolistkov"
            height={55}
            width={195}
          />
        </div>
      </div>
    </div>
  )
}

export default Info
