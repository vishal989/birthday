import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen bg-black ' 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-800'
          onClick={() => setColor("red")}>
            red
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-800'
          onClick={() => setColor("blue")}>
            blue
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-800'
          onClick={() => setColor("green")}>
            green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
