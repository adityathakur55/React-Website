import React,{ useEffect, useState } from 'react'

function Data() {

  const [Rotate, setRotate] = useState(0)

  useEffect(()=> {
    window.addEventListener("mousemove", (e)=>{
      let mouseX= e.clientX;
      let mouseY= e.clientY;

      let deltaX= mouseX- window.innerWidth/2;
      let deltaY= mouseY- window.innerHeight/2;

      var angle= Math.atan2(deltaY, deltaX)*(180/Math.PI);
      setRotate(angle-180);

    })
  })
    

  return (
    <div  className='w-full relative min-h-full bg-[#CDEA68]  text-black p-20'>
        <div>
        <div className='aankh absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
              <div className='absolute flex gap-[45vw] -mt-12 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                   <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' >PLAY</div>
                     <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9 '>
                        <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                     </div>
                   </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                  <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                   <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' >PLAY</div>
                    <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9 '>
                        <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                    </div>
                  </div>
               </div>
              </div>
        </div>
        <div className='text h-full  flex flex-col items-center justify-center'>
            
            <div>
                <h1 className='text-[12vw] leading-none font-bold tracking-tighter uppercase'>Ready</h1>
            </div>
            <div>
                <h1 className='text-[12vw] leading-none font-bold tracking-tighter uppercase '>to start</h1>
            </div>
            <div>
                <h1 className='text-[12vw] leading-none font-bold tracking-tighter uppercase '>the project?</h1>
            </div>
        </div>
        </div>
        <div className='flex items-center justify-center'>
          <button className='px-7 py-4 bg-zinc-900 mt-8 rounded-full text-white uppercase flex items-center gap-8'>START THE PROJECT
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <h1 className='uppercase text-1xl'>or</h1>
        </div>
        <div className='flex items-center justify-center'>
          <button className='px-6 py-4 mt-4 rounded-full border-2 border-zinc-700 text-zinc-700  uppercase flex items-center gap-7'>hello@ochi.design
                    <div className='w-2 h-2 bg-zinc-700 rounded-full'></div>
          </button>
        </div>
    </div>
  )
}

export default Data