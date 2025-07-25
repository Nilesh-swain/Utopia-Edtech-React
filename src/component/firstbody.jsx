import React from 'react';
import background from '../assets/background.png';
import newImg from '../assets/new.png';
import line from '../assets/line.png';

const FirstBody = () => {
    return (
        <div className="relative h-screen w-full bg-cover bg-center " style={{ backgroundImage: `url(${background})` }}>
            {/* <div className='absolute inset-50 bg-black bg-opacity-20'></div> */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0.1,0.8)' }}></div>
            <div className='relative flex z-20'>
                {/* Left Container */}
                <div className='text-white flex items-center justify-center flex-col w-full h-full px-10 py-15'>
                    {/* Your left-side content */}
                    <div className='text-[60px] flex-col font-bold justify-center pl-8 font-Libertinus'>Learn from the Best, <br />Become Your Best</div>
                    <div className='flex justify-start items-start pr-20 pt-2.5 text-[20px] font-poppins'>Start, switch, or advance your career with more than <br /> 5,800 courses, Professional Certificates, and degrees <br /> from world-class universities and companies.</div>
                    <img className='flex justify-center pr-54 p-3.5' src={line} alt="" />
                    <div className='pt-5 flex justify-items-start text-[25px] font-Libertinus pr-38'>What brings you to Utopia today?</div>
                    <div className=' text-[18px] pr-75 font-poppins'>Choose a many as you want.</div>
                    {/* there is boxes here. */}
                    <div className='grid grid-cols-3 mt-4 pl-25 font-poppins gap-x-0.5 gap-y-4'>
                        <div className='w-48 h-12 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Professional Skills</div>
                        <div className='w-35 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Musician</div>
                        <div className='w-60 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm mr-auto'>Become a Professional Tutor</div>
                        <div className='w-55 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Become a Great Musician</div>
                        <div className='w-25 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Become</div>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Become a Chef</div>
                        <div className='w-42 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Designing Skills</div>
                        <div className='w-42 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Designing Skills</div>
                        <div className='w-30 h-13 flex items-center justify-center rounded-xl border p-2 text-center text-sm'>Others</div>
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
