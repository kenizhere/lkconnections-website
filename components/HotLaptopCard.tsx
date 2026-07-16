import React from 'react'

interface HotLaptopCardProps {
  image: string;
  type: string;
  brand: string;
  name: string;
  desc: string;
  price: string;
  link: string;
}

const HotLaptopCard = ({ name, image, type, brand, desc, price, link }: HotLaptopCardProps) => {
  return (
    <div className="flex flex-2 flex-col min-h-[350px] max-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative flex-2 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover"/>
        <p className="absolute text-sm top-2 right-2 bg-red-500 text-white px-2 py-1 z-10 rounded font-inter">{type}</p>
      </div>
      <div className="flex-1 p-4 text-black">
        <p className="text-sm text-gray-500">{brand}</p>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600 min-h-[60px]">{desc}</p>
        <p className="text-xl font-bold">${price}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
          View Details
        </a>
      </div>
    </div>
  )
}

export default HotLaptopCard