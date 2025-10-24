import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight} from 'lucide-react'
const Learningcorner = () => {
  return (
      <main className='h-140 w-full flex flex-col justify-top  bg-white'>
       <section className=' h-20 flex justify-center items-center mt-5'> 
      <h2 className='text-5xl p-5 font-bold'>Learning Corner</h2>
          </section>
          <section className='grid grid-cols-4 gap-4 mt-10 mx-5'>
        <div className='bg-blue-200 h-100 flex flex-col justify-evenly items-center px-4 rounded-3xl pt-4 pb-2'>
           <Image src="/Education.jpg" alt="Logo" width={130} height={50} className="rounded-lg" />
          <h1 className='font-bold text-2xl text-center '>Right to Education Corner</h1>
          <p className='font-semibold '>Helping children understand that every child has the right to go to school and learn.Encourages literacy, knowledge, and creativity.Builds the value of equal opportunities in education, no matter gender, background, or ability.</p>
          <Link href="\pages\educationrights">
            <button  className='inline-flex font-bold hover:scale-102 transition-transform duration-200 hover:opacity-90 '>Read More <ArrowRight/></button>
            </Link>
              </div>
              <div className='bg-blue-200 h-100 flex flex-col  justify-evenly items-center px-4 rounded-3xl pt-4'>
            <Image src="/Healthcartoon.png" alt="Logo" width={120} height={10} className="rounded-lg" />
          <h1 className='font-bold text-2xl text-center '>Right to Health & Protection Corner</h1>
          <p className='font-semibold'>Teaching children that they have the right to good health, clean water, nutritious food, and safety.Encourages habits like handwashing, eating healthy, and knowing about safety rules.</p>
          <Link href="\pages\healthcorner">
            <button className='inline-flex font-bold hover:scale-102 transition-transform duration-200 hover:opacity-90 '>Read More <ArrowRight /></button>
            </Link>
              </div>
              <div className='bg-blue-200 h-100 flex flex-col justify-evenly items-center px-4 rounded-3xl pt-4'>
          <Image src="/Expression.webp" alt="Logo" width={150} height={50} className="rounded-lg" />
          <h1 className='font-bold text-2xl text-center'>Right to Expression Corner</h1>
          <p className='font-semibold'>Helping children know they have the right to express their thoughts, ideas, and feelings freely.Encourages creativity through art, music and role-play.Builds self-confidence and respect for each other’s voices.</p>
          <Link href="\pages\expresscorner">
            <button className='inline-flex font-bold hover:scale-102 transition-transform duration-200 hover:opacity-90 '>Read More <ArrowRight /></button>
            </Link>
              </div>
              <div className='bg-blue-200 h-100 flex flex-col   justify-evenly items-center px-4 rounded-3xl pt-4'>
            <Image src="/Play.jpg" alt="Logo" width={130} height={50} className="rounded-lg" />
          <h1 className='font-bold text-2xl text-center'>Right to Play & Protection from Exploitation Corner</h1>
          <p className='font-semibold'>Teaching children that play is not just fun, but also a right essential for growth .Reminds that children should not be forced into child labor or harmful activities.Encourages teamwork and joy through games </p>
          <Link href="\pages\playand">
            <button className='inline-flex font-bold hover:scale-102 transition-transform duration-200 hover:opacity-90 '>Read More <ArrowRight /></button>
            </Link>
              </div>
              
          </section>
    </main>
  )
}

export default Learningcorner
