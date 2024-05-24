import React from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { db } from './../../../../utils/index'
import { eq } from 'drizzle-orm';
import { DailyTips } from '../../../../utils/schema';
import { upvote } from '../../../Service';

// idea iteam

function CodeTipsItem({codetips, index, refreshData}) {
  
  const upVoteHandler = async() => {
    
    if(upvote(codetips.id))
    {
      const result = await db.update(DailyTips)
      .set({
      vote:codetips.vote + 1
    })
    .where(eq(DailyTips.id, codetips.id))
    .returning({id:DailyTips.id});

    if(result)
    {
      refreshData();
    }
    }
}

  const downVoteHandler = async() => {
    const result = await db.update(DailyTips)
    .set({
      vote:codetips.vote - 1
    })
    .where(eq(DailyTips.id, codetips.id))
    .returning({id:DailyTips.id});

    if(result)
    {
      refreshData();
    }
  }

  return (
    <div className='my-10 p-5 border shadow-lg rounded-lg'>
        <div className='flex gap-8'>
            <h2 className='flex gap-2'><span>{index+1}. </span>{codetips?.content}</h2>

            <div className='flex flex-col items-center gap-2'>
                <ThumbsUp className='h-4 w-4 text-current hover:text-orange-500 cursor-pointer'
                onClick={()=>upVoteHandler()}
                />

                <h2 className='text-md rounded-md p-2 font-bold'>{codetips.vote}</h2>

                <ThumbsDown className='h-4 w-4 text-current hover:text-blue-500 cursor-pointer'
                onClick={()=>downVoteHandler()}
                />
            </div>
        </div>
        <h2 className='mt-4 text-gray-400 text-sm flex gap-5'>
            <span></span>
            By @{codetips.username} on {codetips.createdAt}</h2>
    </div>
  )
}

export default CodeTipsItem