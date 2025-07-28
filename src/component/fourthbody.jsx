import React from 'react'
import presentation2 from '../assets/fouthbox/presentation2.png'
import qa from '../assets/fouthbox/qa.png'

const fourthbody = () => {
  return (
    <div className='flex flex-wrap items-center justify-center p-15 gap-4.5'>
        {/* for 1st box.  */}
      <div className='flex flex-wrap gap-5 rounded-2xl border border-black items-center h-42.5 w-auto'>
        <img className='h-20 flex items-center w-20 pl-8' src={presentation2} alt="" />
        <div className='p-2 pl-1'>
            {/* all containt. */}
            <h1 className='font-bold text-2xl font-poppins p-2 h-auto'>New Traning Every <br /> Months in Different Fields</h1>
            <div className='font-poppins p-2 pt-0 h-auto'>Opportunity to add new trainings <br /> uploaded every month to your <br /> account at no additional cost!</div>
        </div>
      </div>
        {/* for 2nd box. */}
        <div className='flex flex-wrap gap-5 rounded-2xl border border-black items-center h-42.5 w-auto'>
        <img className='h-20 flex items-center w-20 pl-8' src={qa} alt="" />
        <div className='p-2 pl-1'>
            {/* all containt. */}
            <h1 className='font-bold text-2xl font-poppins p-2 h-auto'>Live Q&A with All Trainers</h1>
            <div className='font-poppins p-2 pt-0 h-auto'>You can ask your questions by <br /> participating in the live question and <br /> answer activities.</div>
        </div>
      </div>
        {/* for 3rd box. */}
        <div className='flex flex-wrap gap-5 rounded-2xl border border-black items-center h-42.5 w-auto'>
        <img className='h-20 flex items-center w-20 pl-8' src={presentation2} alt="" />
        <div className='p-2 pl-1'>
            {/* all containt. */}
            <h1 className='font-bold text-2xl font-poppins p-2 h-auto'>+70 Training</h1>
            <div className='font-poppins p-2 pt-0 h-auto'>More than 60 trainings prepared by <br /> the “best” in their field!</div>
        </div>
      </div>
    </div>
  )
}

export default fourthbody
