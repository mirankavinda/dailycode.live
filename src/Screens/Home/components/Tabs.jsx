import React, { useState } from 'react'
import { TrendingUp, Clock, ThumbsUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

function Tabs() {

    const [activeTab, setActiveTab] = useState(0)
    const params = useLocation();

    

  return (
    <div role="tablist" className="tabs tabs-boxed">

        <a role="tab" href='#tranding'
        className="tab"> <TrendingUp className='h-4 w-4 mr-2'/> Tranding</a>

        <a role="tab" href='#latest'
        className="tab tab-active"> <Clock className='h-4 w-4 mr-2'/> Latest</a>

        <a role="tab" href='#voted'
        className="tab"> <ThumbsUp className='h-4 w-4 mr-2'/> Voted</a>
    </div>
  )
}

export default Tabs

