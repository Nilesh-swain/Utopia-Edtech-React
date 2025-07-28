import React from 'react'
import stars from '../assets/sisthbox/stars.png'

const sisthbody = () => {
    return (
        <div>
            <div className='flex items-center justify-center pt-10 h-auto w-150'>
                <h1 className='text-3xl font-bold font-poppins'>Happy Customer Reviews</h1>
                <div>
                    {/* for box1. */}
                    <div className='flex flex-col bg-zinc-700'>
                        <div>
                            <img src={stars} alt="" />
                            {/* addall img.  */}
                        </div>
                        <p className='p-5'>Quality products and 5 star service, the service is done with joy, and the way we are treated are the best things we can have in our trade. I really liked the service and the differentiated value.</p>
                        <div>
                            <p>Sonia</p>
                            {/* here also img.  */}
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sisthbody
