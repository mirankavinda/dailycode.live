import React from 'react'
import Header from '../Home/components/Header'

const AddNewScreen = () => {
  return (
    <div>
      <Header/>

      <button className='btn mt-7'>Back</button>
      <h2 className='font-bold text-2xl mt-5'>Help the beginners to write a better code </h2>
      <div className='flex flex-col mt-7 gap-2'>
        <label>Your Code Tip *</label>
        <textarea className="textarea textarea-bordered border-primary" placeholder="Share your coding tips"></textarea>
      </div>

      <div className='flex flex-col mt-7 gap-2'>
        <label className='flex justify-between'>Your Username *
          <span className='flex items-center gap-2 text-sm'>No Account Needed</span>
        </label>
        <input type="text" placeholder="Username" className="input input-bordered w-full border-primary"/>
      </div>

      <button className='btn w-full btn-primary mt-7'>Share</button>
    </div>
  )
}

export default AddNewScreen