import React from 'react'
import {bannerImg} from "../../assets/index"


const RightPlacard = () => {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
    <img className='w-[400px] h-[500px] z-10 rounded-full border-4 border-transparent hover:border-red-600 transition duration-500 ease-in-out transform hover:scale-110 ' src={bannerImg} alt="bannerImg" />
    </div>
  )
}

export default RightPlacard