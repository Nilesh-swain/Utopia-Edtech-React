import React from 'react'
import pic from '../assets/fifthbox/pic.png'

const fifthbody = () => {
  return (
    <div className='bg-zinc-950 text-white'>
      <div className='flex flex-wrap items-center justify-center gap-7.5 p-15'>
        <img className='rounded-2xl' src={pic} alt="" />
        <div className='p-5 pr-10'>
            <h1 className='text-4xl font-bold font-poppins'>Let your team learn from </h1>  
            <h1 className='text-4xl font-bold font-poppins pt-3 pb-8'>the best names</h1>
            <button className='bg-white text-black flex items-center p-2.5 rounded cursor-pointer hover:bg-zinc-200 px-10 '>Let Us Contact  You</button>
        </div>
      </div>
    </div>
  )
}

export default fifthbody
