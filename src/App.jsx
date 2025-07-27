import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import FirstBody from './component/firstbody'
import SecondBody from './component/secondbody'
import ThirdBody from './component/thirdbody'
import FourthBody from './component/fourthbody'

const App = () => {
  return (
    <div>
      <Navbar />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody/>
    </div>
  )
}

export default App
