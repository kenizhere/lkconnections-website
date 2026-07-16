import Button from '@/components/Button'
import React from 'react'
import HotLaptopCard from '@/components/HotLaptopCard'
import { exampleLaptops } from '@/lib/constants'


const page = () => {
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold py-5 line-height-2">LKCONNECTIONS</h1>
        <p className="text-2xl">Dịch vụ chất lượng cao...</p>
        <div className="flex items-center justify-center mt-8 gap-5">
          <Button><a href="">Tìm laptop</a></Button>
          <Button><a href="">Laptop Gaming</a></Button>

        </div>
      </section>

      <section className="min-h-screen py-2 bg-gray-100">
        <h1 className="text-center text-6xl text-black font-bold mt-20 line-height-2">LAPTOP ĐANG HOT</h1>
        <div className="flex justify-center flex-wrap gap-8 mt-10 px-3">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {exampleLaptops.map((Laptop) => (
              <li key={Laptop.name}>               
                <HotLaptopCard {...Laptop} />
              </li>
            ))}
          </ul>
        </div>
      </section>
  </main>
  )
}

export default page
