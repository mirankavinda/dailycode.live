import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center
    shadow-lg p-4 border rounded-lg'>
      <button className='btn btn-primary btn-sm md:btn-md'>+ New Code Tip</button>
      <h2 className='font-bold text-sm md:text-2xl'>Top 20 Code Tips</h2>
      <div className='items-center'>
        {/* Icon add here */}
        <h2>Light/Dark Mode Icon</h2>
      </div>
    </div>
  )
}

export default Header