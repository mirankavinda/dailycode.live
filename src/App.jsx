import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './Screens/Home/HomeScreen'
import { ThemeContext } from './context/ThemeContext'
import { createBrowserRouter } from 'react-router-dom'
import AddNewScreen from './Screens/NewCodeTip/AddNewScreen'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeScreen/>
  },
  {
    path:'new',
    element:<AddNewScreen/>
  }
])

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className='flex flex-col items-center p-4 md:p-10'
    data-theme={theme}
    >
      <div className='max-w-2xl w-full items-center'>
        <HomeScreen />
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
