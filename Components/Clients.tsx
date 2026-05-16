import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingcards'
import { testimonials } from '@/Data'
import { companies } from '@/Data'
const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading text-4xl font-bold text-white text-center'>
        Certifications & { ' '}
        <span className='text-purple-300'>Education</span>
      </h1>
      <div className='flex flex-col items-center  mt-10 md:mt-16'>
        
           <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:md-10'>
          {companies.map(({id,name,nameImg})=>
            (
              <div key={id} className='flex items-center justify-center md:max-w-60 max-w-32'>
                <img src={nameImg} alt={name}
                className='md:h-10 h-8 w-auto brightness-0 invert' />
              </div>
            )
          )}
        </div>
        
       
      </div>
    </div>
  )
}

export default Clients
