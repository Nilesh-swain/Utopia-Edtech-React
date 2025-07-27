import React from 'react'
import presentation2 from '../assets/fouthbox/presentation2.png'

const fourthbody = () => {
  return (
    <div flex flex-wrap>
        {/* for 1st box.  */}
      <div className='flex flex-wrap gap-5 rounded border border-black'>
        <img src={presentation2} alt="" />
        <div>
            {/* all containt. */}
            <h1>New Traning Every <br /> Months in Different Fields</h1>
            <div>Opportunity to add new trainings <br /> uploaded every month to your <br /> account at no additional cost!</div>
        </div>
      </div>
        {/* for 2nd box. */}
        <div>
            hello
        </div>
        {/* for 3rd box. */}
        <div>
                hii
        </div>
    </div>
  )
}

export default fourthbody
