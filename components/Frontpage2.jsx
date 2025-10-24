"use client"
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
const Frontpage2 = () => {
  const txt = "Safeguarding-";
  const txt2 = "Childhood";
  const txt3 = "Child rights are the basic human rights specifically given to children to ensure theirsafety development and dignity. These rightsare recognized worldwide by the UNCRC";
  const word3 = txt3.split(" ");
  const words1 = txt.split("");
  const words2 = txt2.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  const delayedContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 1.6, staggerChildren: 0.1 }, // 👈 delay start
  },
  };
  const delayed2Container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 3, staggerChildren: 0.1 }, // 👈 delay start
  },
};
 const item = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

  return (
    <main className='bg-[#000000] flex flex-row h-205 w-full rounded-b-2xl'>
          <section className=' h-full w-1/2 flex flex-col'>
              <h1 className='text-8xl font-semibold mt-20 ml-20 '>
          <motion.div variants={container} initial="hidden" animate="visible" className='block pb-7'>
             {words1.map((word, i) => (
                  <motion.span key={i} variants={item} className='text-[#DBE3E8]'>{word }</motion.span>
              ))}
                  </motion.div>
                  <motion.div variants={delayedContainer} initial="hidden" animate="visible" className='block pb-7 '>
             {words2.map((word, i) => (
                  <motion.span key={i} variants={item} className='text-[#DBE3E8]'>{word }</motion.span>
              ))}
                  </motion.div>
        </h1> 
        <p className=' pl-20 py-14 text-[#FFFFFF] w-10/11 font-semibold text-2xl'>
        Child rights are the basic human rights specifically given to children to ensure their safety, development, and dignity. These rights are recognized worldwide by the UNCRC (United Nations Convention on the Rights of the Child).
           
        </p>
       <Link href="\pages\childrights">
        <motion.button
  initial={{ y: 10 }}
  animate={{ y: 0 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }} className='bg-[#DBE3E8] h-17 text-2xl text-black py-3 flex justify-center it w-1/3 rounded-xl ml-20 mt-10 font-bold  items-center border border-[#000000] hover:border-transparent hover:opacity-95 hover:bg-grey-200' >Children Rights <ArrowRight className='p-0' /></motion.button>
</Link >
          </section>
      <section className=' h-full w-1/2 flex justify-center items-center'>
        <Image src="/banimg.png" alt="img" width={800} height={800} className='rounded-lg pr-6' />
      </section>
    </main>
  )
}

export default Frontpage2
