import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingcards'
import { testimonials } from '@/Data'
import { companies } from '@/Data'
const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading text-4xl font-bold text-white text-center'>
        Kind words from { ' '}
        <span className='text-purple-300'>Satisfied Users</span>
      </h1>
      <div className='flex flex-col items-center  mt-10 md:mt-16'>
        
           <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:md-10'>
          {companies.map(({id,name,img,nameImg})=>
            (
              <div key={id} className='flex max-w-32 gap-2 md:max-w-60 '>
                <img src={img} alt={name}
                className='md:w-10 w-5' />
                <img src={nameImg} alt={name}
                className='md:w-24 w-20' />

              </div>
            )
          )}
        </div>
        
       
      </div>
    </div>
  )
}

export default Clients
