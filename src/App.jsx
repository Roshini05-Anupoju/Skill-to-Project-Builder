import { useState } from 'react'

import './App.css'

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex min-h-screen'>
        <Sidebar />
   
   
    <div className='ml-54'>
     
      <Navbar />

      <main className='p-8'>
       <Dashboard />
      </main>
    </div>
  </div>
   
    </>
  )
}

export default App
