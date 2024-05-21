import React from 'react'
import CodeTipsItem from './CodeTipsItem'

function CodeList({codeTipsList}) {
  return (
    <div>
        {codeTipsList.map((codetips, index)=>(
            <CodeTipsItem codetips={codetips} key={index} />
        ))}
    </div>
  )
}

export default CodeList