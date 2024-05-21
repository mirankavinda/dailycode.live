import React from 'react'

// idea iteam

function CodeTipsItem({codetips}) {
  return (
    <div className='my-10'>
        <div className='p-5 border shadow-lg rounded-lg'>
            <h2>{codetips?.content}</h2>
        </div>
    </div>
  )
}

export default CodeTipsItem