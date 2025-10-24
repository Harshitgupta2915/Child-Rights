import React from 'react'
import Image from "next/image";
const Complainttype = () => {
  return (
    <section className='h-175 w-full flex flex-col justify-top  bg-white px-20'>
          <header className='h-50   w-full  py-18 '><h1 className=' text-center font-bold text-6xl'>Complaint Against</h1></header>
          <main className='flex flex-row justify-around gap-10 text-4xl mt-10'>
              <div className='justify-center items-center flex flex-col ' >
                  <div className='overflow-hidden rounded-full h-[20rem] w-[18rem]'><Image src="/childsurvival.png" 
                  alt="Child Survival" height={300} width={300} className='rounded-full hover:scale-105 transition-transform duration-300 hover:opacity-90 '></Image></div>
                  <h1 className='p-5 font-semibold  text-4xl'>Survival Rights</h1>
                  
              </div>
            <div className='justify-center items-center flex flex-col ' >
                  <div className='overflow-hidden rounded-full h-[20rem] w-[18rem]'><Image src="/childabuse.png" 
                  alt="Child Survival" width={300} height={300 } className='rounded-full hover:scale-105 transition-transform duration-300 hover:opacity-90 '></Image></div>
                  <h1 className='p-5 font-semibold  text-4xl'>Sexual Abuse</h1>
                  
              </div>
               <div className='justify-center items-center flex flex-col' >
                  <div className='overflow-hidden rounded-full h-[20rem] w-[18rem]'><Image src="/childlabour.png" 
                  alt="Child Survival" width={300} height={300  } className='rounded-full hover:scale-105 transition-transform duration-300 hover:opacity-90'></Image></div>
                  <h1 className='p-5 font-semibold text-4xl'>Child labour</h1>
                  
              </div>
               <div className='justify-center items-center flex flex-col ' >
                  <div className='overflow-hidden rounded-full h-[20rem] w-[18rem]'><Image src="/childrights.png" 
                  alt="Child Survival" width={300} height={300} className='rounded-full hover:scale-105 transition-transform duration-300 hover:opacity-90 '></Image></div>
                  <h1 className='p-5 font-semibold  text-4xl'>Other</h1>
                  
              </div>
          </main>
    </section>
  )
}

export default Complainttype
