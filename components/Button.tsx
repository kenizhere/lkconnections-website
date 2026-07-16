import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children } : ButtonProps) => {
  return (
    <button className="bg-red-500 hover:bg-white text-white hover:text-red-500 font-bold min-w-[150px] rounded-2xl px-10 py-2 transition-colors duration-300">
        {children}
    </button>
  )
}

export default Button