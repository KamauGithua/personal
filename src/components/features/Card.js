import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, desc, icon }) => {
  return (
    <div className='w-full h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-72 overflow-hidden'>
        <div className='flex flex-col gap-10 h-full translate-y-16 group-hover:translate-y-0 transition-transform-500'>
          <div className='w-10 h-8 flex flex-col justify-between'>
            {
              icon ? <span className='text-5xl text-designColor'>{icon}</span> : <>
                <span className='w-full h-[2px] rounded-lg bg-designColor'></span>
                <span className='w-full h-[2px] rounded-lg bg-designColor'></span>
                <span className='w-full h-[2px] rounded-lg bg-designColor'></span>
                <span className='w-full h-[2px] rounded-lg bg-designColor'></span>
              </>
            }

          </div>
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
            <p className='base'>{desc}</p>
            <span className='text-2xl text-designColor'><FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card