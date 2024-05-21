import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { CirclePlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigation = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex flex-row justify-between items-center p-4  border rounded-lg'>
      <button className='btn btn-primary btn-sm md:btn-md'
      onClick={()=>navigation('/new')}
      >
        <CirclePlus className='h-4 w-4'/>Code Tip</button>

      <h2 className='font-bold text-xl md:text-3xl cursor-pointer'
      onClick={()=>navigation('/')}
      >
        LineBreak</h2>

      <div className='items-center'>
        <label className="flex cursor-pointer gap-2" onChange={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input type="checkbox" checked={theme === 'dark'} className="toggle theme-controller" />

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  )
}

export default Header