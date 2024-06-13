import React, { useEffect, useState } from 'react'

function Eyes() {
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
    <div  className='w-full h-screen overflow-hidden  '>
        <div  className='w-full h-full relative bg-cover bg-center -mt-8 bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]'>
            <div className='absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
               <div className='flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100'>
                   <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-3xl' >PLAY</div>
                     <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9 '>
                        <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                     </div>
                   </div>
               </div>
               <div className='flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100'>
                  <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                   <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-3xl' >PLAY</div>
                    <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9 '>
                        <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                    </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes 