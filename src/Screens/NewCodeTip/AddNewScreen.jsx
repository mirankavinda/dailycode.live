import React, { useEffect, useState } from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'
import { db } from '../../../utils';
import { DailyTips } from '../../../utils/schema';
import moment from 'moment';

function AddNewScreen() {

  const [codetips,setCodeTip] = useState();
  const [username,setUsername] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [exisitingUser, setExisitingUser] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('username'))
    {
      setUsername(localStorage.getItem('username'));
      setExisitingUser(true);
    }
  })

  const onSavehandler=async() => {
    // logic to save data
    const result = await db.insert(DailyTips)
    .values({
      content:codetips,
      username:username,
      createdAt:moment().format('DD MMM yyyy')
    }).returning({id:DailyTips.id})

    if(result)
    {
      localStorage.setItem('username', username);
      console.log("Insert Data")
      // setUsername('')
      setCodeTip('')
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }

  return (
    <div>
      <Header/>

      {showAlert&& <div role="alert" className="alert alert-success mt-5 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="white" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className='text-white'>Congratulation! Your Coding Tips added successfully</span>
      </div>}

      <button className='btn mt-7'> <ChevronLeft/> Back</button>
      <h2 className='font-bold text-2xl mt-5'>Help the beginners to write a better code </h2>
      <div className='flex flex-col mt-7 gap-2'>
        <label>Your Code Tip *</label>
        <textarea
        value={codetips}
        onChange={(event) => setCodeTip(event.target.value)}
        className="textarea textarea-bordered border-primary" placeholder="Share your coding tips"></textarea>
      </div>
      
      {!exisitingUser&& <div className='flex flex-col mt-7 gap-2'>
        <label className='flex justify-between'>Your Username *
          <span className='flex items-center gap-2 text-sm'><Info className='h-4 w-4'/>No Account Needed</span>
        </label>
        <input type="text" 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username" className="input input-bordered w-full border-primary"/>
      </div>}

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