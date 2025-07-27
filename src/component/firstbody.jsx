import React from 'react';
import background from '../assets/background.png';
import newImg from '../assets/new.png';
import line from '../assets/line.png';

const FirstBody = () => {
    return (
        <div className="relative h-screen w-full bg-cover bg-center " style={{ backgroundImage: `url(${background})` }}>
            {/* <div className='absolute inset-50 bg-black bg-opacity-20'></div> */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}></div>
            <div className='relative flex z-20'>
                {/* Left Container */}
                <div className='text-white flex items-center justify-center flex-col w-full h-full px-5 py-12 pt-20'>
                    {/* Your left-side content */}
                    <div className='text-[60px] flex-col font-bold justify-center pl-8 font-Libertinus'>Learn from the Best, <br />Become Your Best</div>
                    <div className='flex justify-start items-start pr-20 pt-3.5 text-[20px] font-poppins'>Start, switch, or advance your career with more than <br /> 5,800 courses, Professional Certificates, and degrees <br /> from world-class universities and companies.</div>
                    <img className='flex justify-center pr-54 p-3.5 pt-4' src={line} alt="" />
                    <div className='pt-10 flex justify-items-start text-[25px] font-Libertinus pr-38'>What brings you to Utopia today?</div>
                    <div className=' text-[18px] pr-75 font-poppins'>Choose a many as you want.</div>
                    {/* there is boxes here. */}
                    <div className='grid grid-cols-3 mt-4 pl-17 font-poppins gap-x-2 pt-4 gap-y-1.5'>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Professional Skills</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 haver:scale-105 hover:-translate-y-1'>Musician</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 mr-auto transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Become a Professional Tutor</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Become a Great Musician</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Become</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Become a Chef</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Designing Skills</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Designing Skills</div>
                        <div className='w-full h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm cursor-pointer hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:-translate-y-1'>Others</div>
                    </div>
                </div>
                {/* Right Container */}
                <div className='flex items-end justify-end w-full pt-6 pr-30 pb-3'>
                    {/* Your right-side content */}
                    <img src={newImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FirstBody;
