import { useState } from 'react'

import './App.css'
import { Routes,Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen w-screen'>
    <Routes>

   {/* //public routes */}
    <Route path='/sign-in' element={<SigninForm />} />
    
{/* private routes */}
    <Route index element={<Home/>} />


    </Routes>
    </main>
  )
}

export default App
