import React from "react"
import ZeeB from './ZEEB-removebg-preview.png'
import newslogo from './logo.jpg'
import business from './Businessworld_(logo).png'
import digpu from './Digpu-News-Logo.png'
import CFO from './CFO-removebg-preview.png'
import hindustan from './Hindustan_Times_Logo.png'
import indiapress from './IndiaPress-removebg-preview.png'
import Ani from './Ani.png'
import Midday from './miday.png'
import Marquee from "react-fast-marquee"
import tribute from './tribute.webp'
import "./style.css"
function Marqueee() {
    return (
        <div className="card1" >   
        <Marquee  direction="right" pauseOnHover="true" speed={60.45}>
        <a href="https://www.zeebiz.com/agencies/1-click-payroll-a-new-age-payroll-financing-solution-200339" className="image-link">
            <img src={ZeeB} className="marqueeimg2" alt="ZeeBusiness"></img></a>
        
        <a href="https://english.newstracklive.com/news/what-is-payroll-financing-how-can-it-benefit-growing-businesses-sc18-nu346-1251534-1.html" className="image-link">
            <img src={newslogo} className="marqueeimg1" alt="NewsTrack"></img></a>
                
        <a href="https://www.businessworld.in/article/What-Is-This-New-Buzz-Around-Payroll-Financing-/16-09-2022-446873/" className="image-link">
            <img src={business} className="marqueeimg3" alt="BWBusinessWorld"></img></a>
        
        <a href="https://digpu.com/press-releases/cash-flow-problems-faced-by-businesses" className="image-link">
            <img src={digpu} className="marqueeimg1" alt="Digpu"></img></a>
        
        <a href="https://cfo.economictimes.indiatimes.com/news/your-payroll-funding-is-1-click-away/93129189" className="image-link">
            <img src={CFO} className="marqueeimg5" alt="CFO"></img></a>
        
        <a href="https://www.hindustantimes.com/brand-stories/payroll-financing-and-its-need-in-today-s-competitive-market-101664259677442.html" className="image-link">
            <img src={hindustan} className="marqueeimg4" alt="HindustanTimes"></img></a>
        
        <a href="https://indiapressrelease.com/featured/consequences-of-running-payroll-late-and-how-1-click-capital-can-help/" className="image-link">
            <img src={indiapress} className="marqueeimg6" alt="IndiaPress"></img></a>

        <a href="https://www.mid-day.com/brand-media/article/how-1-click-capital-can-help-msmes-in-todays-competitive-market-23253338" className="image-link">
            <img src={Midday} className="marqueeimg6" alt="Midday"></img></a>

        <a href="https://www.aninews.in/news/business/business/1click-capital-a-new-financial-crisis-solution20220415124818/" className="image-link">
            <img src={Ani} className="marqueeimg6" alt="AniNEws"></img></a>

        <a href="https://www.tribuneindia.com/news/brand-connect/how-1-click-capital-help-businesses-grow-and-succeed-451919" className="image-link">
            <img src={tribute} className="marqueeimg6" alt="tribuneindia"></img></a>

        </Marquee>
        </div>
    )
}

export default Marqueee