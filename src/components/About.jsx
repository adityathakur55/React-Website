import React from 'react'

function About() {
  return (
    <div className='w-full  bg-[#CDEA68]  text-black'>
        <h1 data-scroll data-section data-scroll-speed=".2" className='pl-20 pt-28  pr-56 text-[3.2vw] leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.

        </h1>
        <div className='w-full border-t-[1px] py-20 pt-10 mt-12 -mb-4 border-[#a1b562] flex'>
            <div className='w-1/2 px-20'>
                <h1 className='font-sans'>What you can expect:</h1>
            </div>
            <div className='w-[36vw] px-20 mr-8' >
                 <h1 className=' text-[1.4vw] text-sm px-20 font-sans'> We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                 </h1>
                 <h1 className=' text-[1.4vw] text-sm mt-20 px-20 font-sans'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                 </h1>
            </div>
        </div>
        <div className='w-full min-h-[75vh] flex gap-5 border-t-[1px] pt-6 mt-1 border-[#a1b562]'>
            <div className='w-1/2 px-20'>
                <h1 className='text-5xl '>Our approach:
                </h1>
                <button className='px-10 py-6 bg-zinc-900 mt-8 rounded-full text-white uppercase flex items-center gap-5'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-[#ceea689b] mr-20'>
               <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About