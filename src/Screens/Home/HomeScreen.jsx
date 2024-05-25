import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Tabs from './components/Tabs'
import { useLocation } from 'react-router-dom'
import { db } from '../../../utils'
import { DailyTips } from '../../../utils/schema'
import { desc } from 'drizzle-orm'
import CodeList from './components/CodeList'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function HomeScreen() {

  const params = useLocation();
  const [codeTipsList, setCodeTipList] = useState([]);

  useEffect(() => {
    GetAllCodeTips();
  },[params])

  const GetAllCodeTips= async() => {
    const result = await db.select().from(DailyTips)
    .orderBy(desc(params.hash=='#tranding' || params.hash=='#voted'?DailyTips.vote:DailyTips.id))
    .limit(20);

    setCodeTipList(result);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div style={{ flex: 1, overflowY: 'auto' }}>
        <HeroSection/>
        <Tabs/>
        <CodeList codeTipsList={codeTipsList} refreshData={GetAllCodeTips}/>
        <AboutUs/>
        <Footer/>
        </div>
    </div>
  )
}

export default HomeScreen