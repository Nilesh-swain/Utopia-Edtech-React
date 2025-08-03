import React from 'react'
import stars from '../assets/sisthbox/stars.png'
import round from '../assets/sisthbox/round.png'

const sisthbody = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center p-4 pt-7 h-auto w-280 flex-col'>
                <h1 className='text-3xl font-bold font-poppins'>Happy Customer Reviews</h1>

                <div className='p-5 flex flex-row gap-14 pt-12 '>
                    {/* for box1. */}
                    <div className='flex flex-col bg-zinc-700 rounded-2xl text-white text-xl'>
                        <div>
                            <img className='pl-5 pt-3.5 p-3' src={stars} alt="" />
                            {/* addall img.  */}
                        </div>
                        <p className='pl-5 pt-1 p-2'>Quality products and 5 star service, the service is done with joy, and the way we are treated are the best things we can have in our trade. I really liked the service and the differentiated value.</p>
                        <div className='flex justify-between'>
                            <p className='pl-5 p-1 font-poppins flex justify-center items-center-safe'>Sonia</p>
                            {/* here also img.  */}
                            <img className='pr-5' src={round} alt="" />
                        </div>
                    </div>


                    <div className='flex flex-col bg-zinc-700 rounded-2xl text-white text-xl'>
                        <div>
                            <img className='pl-5 pt-3.5 p-3' src={stars} alt="" />
                            {/* addall img.  */}
                        </div>
                        <p className='pl-5 pt-1 p-2'>Quality products and 5 star service, the service is done with joy, and the way we are treated are the best things we can have in our trade. I really liked the service and the differentiated value.</p>
                        <div className='flex justify-between'>
                            <p className='pl-5 p-1 font-poppins flex justify-center items-center-safe'>Sonia</p>
                            {/* here also img.  */}
                            <img className='pr-5' src={round} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sisthbody
