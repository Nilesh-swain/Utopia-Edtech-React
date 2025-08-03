import React from 'react'
import round from '../assets/Lastbox/round.png'

const last = () => {
  return (
    <div className='bg-zinc-900'>
      <div className='flex flex-row p-12 pl-20 pt-7.5 gap-2'>
        <img src={round} alt="" />
        <div className='font-poppins font-bold text-2xl text-white'>Utopia</div>
      </div>

      <div className='flex flex-col text-white'>
        <div className='justify-center grid grid-cols-3 gap-0.5 font-bold text-2xl pb-3 pl-20'>
          <ui>CATEGORIES</ui>
          <ui>INSTRUCTORS</ui>
          <ui>INSTRUCTORS</ui>
        </div>
        <div className='justify-center grid grid-cols-3 pl-20'>
          <ul>Competency Development</ul>
          <ul>Ergin Atman</ul>
          <ul>Ergin Atman</ul>
          <ul>Entrepreneurship</ul>
          <ul>prof. MEthew Swith</ul>
          <ul>prof. MEthew Swith</ul>
          <ul>Life Culture</ul>
          <ul>Prof. Cshew</ul>
          <ul>Prof. Cshew</ul>
          <ul>Gastronomy</ul>
          <ul>Argun  Mehta</ul>
          <ul>Argun  Mehta</ul>
          <ul>Sustainability</ul>
          <ul>Asaf savas</ul>
          <ul>Asaf savas</ul>
          <ul>Leadership</ul>
          <ul>Mario</ul>
          <ul>Mario</ul>
          <ul>Marketing</ul>
          <ul>Azgur Ali</ul>
          <ul>Azgur Ali</ul>
          <ul>Finance</ul>
          <ul>Ounce Methab</ul>
          <ul>Ounce Methab</ul>
          <ul>Health</ul>
          <ul>Egin</ul>
          <ul>Egin</ul>
          <ul>History</ul>
          <ul>Ounce Methab</ul>
          <ul>Ounce Methab</ul>
          <ul>Music</ul>
          <ul>Azgur Ali</ul>
          <ul>Azgur Ali</ul>
        </div>
        
    </div>
    </div>
  )
}

export default last