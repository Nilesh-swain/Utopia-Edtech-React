import React from 'react'
import home from '../assets/thirdbox/home.png'
import star from '../assets/thirdbox/star.png'
import pen from '../assets/thirdbox/pen.png'
import dhand from '../assets/thirdbox/dhand.png'
import writting from '../assets/thirdbox/writting.png'
import gallery from '../assets/thirdbox/gallery.png'
import music from '../assets/thirdbox/music.png'
import vector from '../assets/thirdbox/vector.png'
import per1 from '../assets/thirdbox/pic1.png'
import per2 from '../assets/thirdbox/pic2.png'
import right from '../assets/thirdbox/right.png'
import front from '../assets/thirdbox/front.png'
import round from '../assets/thirdbox/round.png'

const thirdbody = () => {
    return (
        <div className='bg-zinc-950 w-full h-auto text-white '>
            <div className='text-center text-white pt-30 pb-5 font-Lato font-bold text-5xl'>
                <p pt-10>Here are some sources of inspirations</p>
                <p className='pt-4'>to help uplift your spirits</p>
            </div>
            {/* for a row arrangement. */}
            <div className='flex flex-wrap items-center  justify-center gap-5 p-5 pb-3.5 pt-15'>
                {/* content in side the row-1.  */}
                <div className='flex flex-wrap justify-center items-center rounded border p-3 border-white gap-2.5 cursor-pointer hover:bg-zinc-600'>
                    {/* for box-1.  */}
                    <img src={star} alt="" />
                    <div>Trending</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-3 gap-2.5 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-2.  */}
                    <img src={pen} alt="" />
                    <div>Design & Style</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-3 gap-2.5 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-3.  */}
                    <img src={dhand} alt="" />
                    <div>Business</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-3 gap-2.5 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-4.  */}
                    <img src={writting} alt="" />
                    <div>Business</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-3 gap-2.5 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-5.  */}
                    <img src={gallery} alt="" />
                    <div>Art & Entertainment</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-3 gap-2.5 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-6.  */}
                    <img src={home} alt="" />
                    <div>Home & Lifestyle</div>
                </div>

            </div>

            {/* for the 2nd row arrangement.  */}
            <div className='flex flex-wrap items-center justify-center gap-4 pt-1.5'>
                {/* content in side the row-2.  */}
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-1.  */}
                    <img src={pen} alt="" />
                    <div>Design & Style</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-2.  */}
                    <img src={home} alt="" />
                    <div>Home & Lifestyle</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-3.  */}
                    <img src={music} alt="" />
                    <div>Music</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-4.  */}
                    <img src={vector} alt="" />
                    <div>Food</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-5.  */}
                    <img src={writting} alt="" />
                    <div>Writting</div>
                </div>
                <div className='flex flex-wrap justify-center items-center rounded border p-2 gap-2 cursor-pointer hover:bg-zinc-600 bg-zinc-700 border-zinc-700'>
                    {/* for box-6.  */}
                    <img src={gallery} alt="" />
                    <div>Art & Entertainment</div>
                </div>

            </div>
            {/* it is for the man pic.  */}
            <div className='flex flex-wrap justify-center items-center gap-5 p-5 pt-18'>
                <div className='gap-5 p-10'>
                    <img className='cursor-pointer hover:border-3xl' src={right} alt="" />
                </div>
                {/* Here make that.  */}
                <div className='flex items-start h-93 bg-white w-65 rounded-xl border border-white flex-col'>
                    <img className='w-65 h-70 rounded-xl' src={per1} alt="" />
                    <h1 className='text-black font-bold font-poppins pt-1 pl-2 text-xl'>Daniel H. Pink</h1>
                    <div className='text-black font-poppins pl-2'>American writer</div>
                    <div className='text-black font-poppins pl-2'>2 hour 58 minutes</div>
                </div>
                <div className='flex items-start h-93 bg-white w-64 rounded-xl border border-white flex-col'>
                    <img className='w-65 h-70 rounded-xl' src={per2} alt="" />
                    <h1 className='text-black font-bold font-poppins pt-1 pl-2 text-xl'>Daniel H. Pink</h1>
                    <div className='text-black font-poppins pl-2'>American economis </div>
                    <div className='text-black font-poppins pl-2'>2 hour 58 minutes</div>
                </div>
                <div className='flex items-start h-93 bg-white w-65 rounded-xl border border-white flex-col'>
                    <img className='w-65 h-70 rounded-xl' src={per1} alt="" />
                    <h1 className='text-black font-bold font-poppins pt-1 pl-2 text-xl'>Daniel H. Pink</h1>
                    <div className='text-black font-poppins pl-2'>American writer</div>
                    <div className='text-black font-poppins pl-2'>2 hour 58 minutes</div>
                </div>
                <div className='flex items-start h-93 bg-white w-64 rounded-xl border border-white flex-col'>
                    <img className='w-65 h-70 rounded-xl' src={per2} alt="" />
                    <h1 className='text-black font-bold font-poppins pt-1 pl-2 text-xl'>Daniel H. Pink</h1>
                    <div className='text-black font-poppins pl-2'>American economis </div>
                    <div className='text-black font-poppins pl-2'>2 hour 58 minutes</div>
                </div>
                <div className='p-10'>
                    <img className='cursor-pointer hover:border-3xl'  src={front} alt="" />
                </div>
            </div>            
            {/* for circle animations. */}
            <div className='flex flex-wrap items-center gap-1.5 justify-center p-7.5 pb-15'>
                <img className='w-1.5 h-1.5 cursor-pointer' src={round} alt="" />
                <img className='w-1.5 h-1.5 cursor-pointer' src={round} alt="" />
                <img className='w-2.5 h-2.5 cursor-pointer' src={round} alt="" />
                <img className='w-1.5 h-1.5 cursor-pointer' src={round} alt="" />
                <img className='w-1.5 h-1.5 cursor-pointer' src={round} alt="" />
            </div>
        </div>
    )
}

export default thirdbody


