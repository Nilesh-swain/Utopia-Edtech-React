import React from 'react'
import Ellipse from '../assets/ellipse1.png'
import Ellipse2 from '../assets/ellipse2.png'

const secondbody = () => {
    return (
        <div className='h-60 w-full flex justify-between items-center relative'>
            <img className='absolute top-0 left-0' src={Ellipse2} alt="" />
            <div className='flex flex-col gap-4 pl-150'>
                <p className='text-black flex justify-center items-center font-bold font-poppins text-3xl'>Start your journey today.</p>
                <button className='bg-black text-white flex items-center justify-center rounded-2xl border p-2 border-zinc-900 hover:bg-zinc-800 cursor-pointer'>Explore Classes</button>
            </div>
            <img className='absolute right-0 buttom-0 pt-25' src={Ellipse} alt="" />
        </div>
    )
}

export default secondbody



