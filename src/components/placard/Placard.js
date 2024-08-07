import React from 'react'
import LeftPlacard from './LeftPlacard';
import RightPlacard from './RightPlacard';

const Placard = () => {
 
  return (
    <section id='home' className='w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black'> 
      <LeftPlacard />
      <RightPlacard />
       
    </section>
  )
}

export default Placard