import React, { useEffect, useState } from 'react'
import { TrendingUp, Clock, ThumbsUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

function Tabs() {
    
    const [activeTab, setActiveTab] = useState(0)
    
    return (
    
    <div role="tablist" className="tabs tabs-boxed">

        <a role="tab" href='#tranding'
        onClick={()=> setActiveTab(0)}
        className={`tab ${activeTab === 0 && 'tab-active'}`}> <TrendingUp className='h-4 w-4 mr-2'/> Tranding</a>

        <a role="tab" href='#latest'
        onClick={()=> setActiveTab(1)}
        className={`tab ${activeTab === 1 && 'tab-active'}`}> <Clock className='h-4 w-4 mr-2'/> Latest</a>

        <a role="tab" href='#voted'
        onClick={()=> setActiveTab(2)}
        className={`tab ${activeTab === 2 && 'tab-active'}`}> <ThumbsUp className='h-4 w-4 mr-2'/> Voted</a>
        
    </div>
  )
}

export default Tabs

