import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-section data-scroll-speed=".1"  className='w-full py-10 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[22vw] leading-none uppercase font-bold tracking-tighter -mt-14 -mb-4 pr-10'> We are Ochi  </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[22vw] leading-none uppercase font-bold tracking-tighter -mt-14 -mb-4 pr-10'> We are Ochi  </motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee