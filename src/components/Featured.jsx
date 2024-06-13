import React from 'react'

function Featured() {
  return (
    <div  className='w-full py-20'>
        <div data-scroll data-section data-scroll-speed=".1" className='w-full px-20 border-b-[1px] pt-8 border-zinc-400 pb-8'>
            <h1 className='text-7xl tracking-tight'>Featured projects</h1>
        </div>
        <div data-scroll data-section data-scroll-speed=".4" >
        <div className='px-20'>
         <div className='flex gap-[45vw]'>
           <div className='flex items-center  -mb-6'>
               <div className='w-2 h-2 rounded-full bg-white flex items-center gap-16 '> 
                  <div className='text-2xl font-mono uppercase ml-4 '>fyde</div>
               </div>
           </div>
           <div className=' -mb-6 '>
               <div className='w-2 h-2 rounded-full bg-white flex items-center gap-16 '> 
                  <div className='text-2xl font-mono uppercase ml-4 '>Vise</div>
               </div>
           </div>
         </div>

            <div className='cards-1 w-full flex gap-5 mt-10'>
                <div className='cardcontainer w-1/2 h-[75vh] overflow-hidden'>
                   <div className='card w-full h-full rounded-2xl bg-green-600'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                   </div>
                </div>
                <div className='cardcontainer w-1/2 h-[75vh]  overflow-hidden'>
                   <div className='card w-full h-full rounded-2xl bg-green-600'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                   </div>
                </div>
            </div>
         <div className='flex mt-4 gap-48'>
            <div className='flex gap-2 '>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>audit
              </button>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>copywriting
              </button>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>sales deck
              </button>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>slides design
              </button>     
            </div>
            <div className='flex gap-2'>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>agency
              </button>
              <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>company presentation
              </button>
            </div>
         </div>
        </div>
        <div data-scroll data-section data-scroll-speed=".1" p>
         <div className='px-24'>
         <div className='flex gap-[45vw]   mt-24 '>
           <div className='flex items-center  -mb-40'>
               <div className='w-2 h-2 rounded-full bg-white flex items-center gap-16 '> 
                  <div className='text-2xl font-mono uppercase ml-4 '>trawa</div>
               </div>
           </div>
           <div className='flex items-center -mb-40  '>
               <div className='w-2 h-2 rounded-full bg-white flex items-center gap-16 ml-20 '> 
                  <div className=' text-2xl font-mono uppercase ml-4'>premium </div>
               </div>
           </div>
         </div>
            <div className='cards-2 w-full flex gap-5 mt-28'>
                <div className='cardcontainer w-1/2 h-[75vh] overflow-hidden'>
                   <div className='card w-full h-full rounded-2xl bg-green-600'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                   </div>
                </div>
                <div className='cardcontainer w-1/2 h-[75vh]  overflow-hidden'>
                   <div className='card w-full h-full rounded-2xl bg-green-600'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                   </div>
                </div>
                
            </div>
            <div className='flex mt-4 gap-52'>
              <div className='flex gap-2 '>
                <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>brand identity
                </button>
                <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>design research
                </button>
                <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>investor deck
                </button>
              </div>

              <div  className=' '>
                <button className='px-4 py-2 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>branded template
                </button>
              </div>
            </div>
        </div>
         </div>
        
         
            

            <div  className='flex items-center justify-center'>
              <button className='px-7 py-4 bg-zinc-200 mt-52 rounded-full text-black uppercase flex items-center gap-8'>view all case studies
                    <div className='w-2 h-2 bg-black rounded-full'></div>
              </button>
        </div>
        </div>
    </div>
  )
}

export default Featured