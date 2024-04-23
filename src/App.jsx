import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  

  return (
    <>
      <div className='underline'>
        <Sidebar/>
        <Navbar/>
       </div>
    </>
  )
}

export default App
