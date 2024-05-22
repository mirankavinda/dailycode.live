import React from 'react'
import CodeTipsItem from './CodeTipsItem'

function CodeList({codeTipsList, refreshData}) {
  return (
    <div>
        {codeTipsList.map((codetips, index)=>(
            <CodeTipsItem codetips={codetips} key={index} 
            refreshData={refreshData}
            index={index} />
        ))}
    </div>
  )
}

export default CodeList