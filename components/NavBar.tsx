import React from 'react'

const NavBar = () => {
  return (
    <header className="bg-red-500 shadow-md py-4 px-8 sticky top-0 z-50">
      <nav className="flex items-center justify-between ">
        <div className="text-2xl font-bold text-white">LKConnections</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-red-500">Home</a></li>
          <li><a href="#" className="text-white hover:text-red-500">About</a></li>
          <li><a href="#" className="text-white hover:text-red-500">Services</a></li>
          <li><a href="#" className="text-white hover:text-red-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar