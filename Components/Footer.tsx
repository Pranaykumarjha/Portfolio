import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'
import { div } from 'motion/react-m'
const Footer = () => {
  return (
   <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
   
    <div className='flex flex-col items-center'>
        <h1 className='heading text-4xl font-bold text-white lg:max-w-[45vw]'>
            Ready to develop <span className='text-purple-400'>your project</span> to the next level ?
        </h1>
        <p className='text-base text-gray-300 md:mt-10 my-5 text-center'>
            Interested in collaborating or hiring? Let's connect and build together.
        </p>
        <a href="MailTo:pranayjha952@gmail.com">
            <MagicButton
            title='Lets get in touch'
            icon={<FaLocationArrow />}
            position='right'
            />

            
        </a>

    </div>
    <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light text-white'>CopyRight &copy; 2026 Pranay Jha. All rights reserved.</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile)=>
            (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-grey rounded-lg border border-black-300' >
                    <img src={profile.img} alt={(profile.id).toString()} width={20} height={20} />
                </div>   
            )
            
            )}

        </div>
    </div>

   </footer>
  )
}

export default Footer
