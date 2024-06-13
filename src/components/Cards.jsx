import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-gray-400 flex items-center px-32 gap-5 py-12'>
        <div className='cardcontainer h-[70vh] w-1/2'>
           <div className='card relative rounded-2xl w-full h-full bg-[#004D43] flex items-center justify-center'>
             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy; 2019</button>
           </div>
        </div>
        <div className='cardcontainer h-[70vh] flex gap-5 w-1/2'>
            <div className='card relative w-1/2  rounded-2xl h-full bg-[#192826] flex items-center justify-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute bottom-10 px-5 py-1 rounded-full border-2 font-serif'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative w-1/2 rounded-2xl h-full bg-[#192826] flex items-center justify-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute bottom-10 px-5 py-1 rounded-full border-2 font-mono '>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards