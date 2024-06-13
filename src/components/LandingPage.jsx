import { duration } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function landingpage() {
  
  return (
    <div data-scroll data-section data-scroll-speed="-.2"  className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-40 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
            return <div className='masker'>
              <div className='w-fit flex items-center'>
                <div>
                  {index===1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1 ], duration: 1 }} className='mt-[1vw] bg-cover  bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]   w-[8vw] rounded-md h-[4.7vw] bg-red-500'> </motion.div>)}
                </div>
                <h1 className='uppercase text-[6.6vw] leading-[6vw] tracking-tighter font-regular'>{item}</h1>
              </div>
            <div></div>
        </div>
          }
          )}
            
        </div>
        <div className='border-t-2 border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to the IPO"].map((item, index)=> ( 
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))}
          <div className='start'>
          <div className='px-5 py-2 border-2 rounded-full font-light text-md uppercase'>Start the project</div>
          </div>
        </div>
        

    </div>
  )
}

export default landingpage