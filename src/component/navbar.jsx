import React from 'react'
import logo from '../assets/logo.png' // Assuming you have a logo image in assets
import search from '../assets/search.png' // Assuming you have a search icon in assets

const navbar = () => {
    return (
        <>
            <div className='bg-zinc-950 h-18 p-4 pl-30 flex item-center '>
                <img className='h-8 pt-1 flex items-center cursor-pointer' src={logo} alt="" />


                <div className='flex items-center justify-between text-white ml-80 gap-7 '>
                    <div className='flex justify-center items-center cursor-pointer hover:text-zinc-300 transition duration-100'>Instructors</div>
                    <div className='flex justify-center items-center cursor-pointer  hover:text-zinc-300 transition duration-100'>All Categories</div>
                    <div className='flex justify-center items-center cursor-pointer  hover:text-zinc-300 transition duration-100'>View Plans</div>
                </div>

                <div className='flex items-center justify-end ml-auto gap-5 mr-10'>
                    <img className='cursor-pointer hover:bg-zinc-800 transition duration-300' src={search} alt="" />
                    {/* <div className='h-10 w-18 flex items-center p-3.5 text-white rounded border border-white '>Login</div> */}
                    <button className='h-10 w-18 flex items-center p-3.5 text-white rounded border border-white cursor-pointer hover:bg-zinc-800 transition duration-500'>Login</button> 
                    <button className='h-10 w-20 flex items-center p-2.5 text-zinc-950 rounded border border-white bg-white cursor-pointer hover:bg-zinc-400 transition duration-200'>Register</button>
                </div>
            </div>
        </>
    )
}

export default navbar
