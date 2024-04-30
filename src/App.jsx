import { useState } from 'react'
import { Home } from 'react-ionicons'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Board from './pages/Boards'


function App() {
  

  return (
    <>
      <div className='underline'>
      <Navbar/>
      <div className='flex'>

      <div>
        <Sidebar/>
        </div>
        <div>
        <Board/>
        </div>
        </div>
        
       </div>
    </>
  )
}

export default App
