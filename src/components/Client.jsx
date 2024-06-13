import React from 'react'


function client() {
  return (
    <div data-scroll data-section data-scroll-speed="-.4" className='w-full mb-[50vh] '>
        <div className='w-full px-20 border-b-[1px]  border-zinc-400 pb-8'>
            <h1 className='text-7xl tracking-tight'>Client's reviews</h1>
        </div>
        <div className='flex px-10 pt-10'>
            <div className='w-[20vw] h-[70vh] '>
                <h1 className='text-2xl ml-12'>Karman Ventures</h1>
                
            </div>
            <div className='w-[20vw] h-[70vh] '>
                <h1 className='text-2xl ml-24'>Services</h1>
                <div className='flex items-center justify-center flex-col  mt-20'>
                    <button className='px-1 py-1 rounded-full text-white border-2 border-white uppercase flex items-center gap-8'>investor deck
                    </button>
                    <button className='px-1 py-1 rounded-full text-white border-2 border-white uppercase flex items-center gap-8 mt-8'>sales deck
                    </button>
                </div>
                
            </div>
            <div className='w-[50vw] h-[70vh] '>
                <h1 className='text-2xl ml-36' >William Barnes</h1>
                <div className='ml-32 flex-col mt-16'>
                  <img className='w-[12vw] rounded-2xl ' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                  <p className='w-[35vw] h-[44vh] font-sans mt-8'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
            </div>
            <div className='w-[20vw] h-[70vh] '>
                <h1 className='text-2xl ml-28 uppercase font-mono'>Read</h1>
            </div>
        </div>
</div>
  )
}

export default client