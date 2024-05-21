import React from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

// idea iteam

function CodeTipsItem({codetips, index}) {
  return (
    <div className='my-10 p-5 border shadow-lg rounded-lg '>
        <div className='flex gap-8'>
            <h2 className='flex gap-2'><span>{index+1}. </span>{codetips?.content}</h2>

            <div className='flex flex-col items-center'>
                <ThumbsUp className='h-4 w-4 text-current hover:text-orange-500 cursor-pointer'/>
                <h2 className='text-lg rounded-md p-1'>{codetips.vote}</h2>
                <ThumbsDown className='h-4 w-4 text-current hover:text-blue-500 cursor-pointer'/>
            </div>
        </div>
        <h2 className='mt-4 text-gray-400 text-sm flex gap-5'>
            <span></span>
            By @{codetips.username} on {codetips.createdAt}</h2>
    </div>
  )
}

export default CodeTipsItem