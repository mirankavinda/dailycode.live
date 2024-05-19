import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './Screens/Home/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center p-4 md:p-10'>
      <div className='max-w-2xl w-full items-center'>
        <HomeScreen />
      </div>
    </div>
  )
}

export default App
