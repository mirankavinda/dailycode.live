import React, { useState } from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'

function AddNewScreen() {

  const [codetips,setCodeTip] = useState();
  const [username,setUsername] = useState();

  const onSavehandler=() => {
    // logic to save data

  }

  return (
    <div>
      <Header/>

      <button className='btn mt-7'> <ChevronLeft/> Back</button>
      <h2 className='font-bold text-2xl mt-5'>Help the beginners to write a better code </h2>
      <div className='flex flex-col mt-7 gap-2'>
        <label>Your Code Tip *</label>
        <textarea 
        onChange={(event) => setCodeTip(event.target.value)}
        className="textarea textarea-bordered border-primary" placeholder="Share your coding tips"></textarea>
      </div>

      <div className='flex flex-col mt-7 gap-2'>
        <label className='flex justify-between'>Your Username *
          <span className='flex items-center gap-2 text-sm'><Info className='h-4 w-4'/>No Account Needed</span>
        </label>
        <input type="text" 
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username" className="input input-bordered w-full border-primary"/>
      </div>

      <button className='btn w-full btn-primary mt-7'
      disabled={!(codetips && username)}
      onClick={()=>onSavehandler()}
      >
        Share<Send className='h-4 w-4'/>
        </button>
    </div>
  )
}

export default AddNewScreen