import React from 'react'

const Noofcases = () => {
  return (
      <main className='h-75 w-full flex flex-col justify-top  bg-gray-900 px-20 pt-2.5 rounded-t-2xl'>
          <section className='h-50 w-full  text-center text-white'>
              <h1 className='font-bold text-4xl pt-2'>No of Cases Reported
              </h1>
          </section>
          <section className='h-50 w-full flex flex-row justify-around gap-10 text-4xl mt-10 text-white '>
              <div className='h-50'>
                  <h1 className='p-5 font-semibold text-4xl  text-white '>445+</h1>
                    <p className='text-2xl  text-white '>Per Day</p>
              </div>
              <div className='h-50'>
                  <h1 className='p-5 font-semibold  text-4xl  text-white '>13,537+</h1>
                    <p className='text-2xl  text-white '>Per Month</p>
              </div>
              <div className='h-50 justify-center align-middle text-center'>
                  <h1 className='p-5 font-semibold  text-4xl text-center  text-white '>162,449+</h1>
                    <p className='text-2xl text-center  text-white '>Per Year</p>
              </div>
          </section>
      
    </main>
  )
}

export default Noofcases
