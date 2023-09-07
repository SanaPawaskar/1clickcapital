import React from "react"
import "./Secondpage.css"
import Button3 from './3button'
import ScrollToTop from "../../../../scroltop"
function Entertement() {
  return (
    <>
      <helmet>
   <title>Entertainment and production financing |1 Click Capital</title>
    <meta name="description" content="Production financing or finance production is a financial services offered to OTT channels in order to fund their upcoming project by setting up an Escrow account"/>
    <link rel="canonical" href="https://1clickcapital.com/products/1-click-entertainment-and-production-financing" />
    <link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
   </helmet>
    <div className="main-product-page">
    <div className="heading-box">
   <span className="Common-word-product">1 Click</span><h1 className="product-name">Entertainment & Production Financing</h1>
   <div className="rectline1"></div>
    </div>
       <Button3/>
       <h2 className="Common-word-product2"> HOW IT WORKS</h2>
        <div className="rectline2"></div>
      <div className="para1-ent">
        <ul>
          <li className='list-product'>This is the age of entertainment, an era where we are surrounded by content left right and center.</li>
          <li className='list-product'>IF you are ready to bring your script to life and get those cameras rolling on your next project you might want to think of getting an Entertainment & Production Financing (E&PF). </li>
          <li className='list-product'>E&PF helps you map out the best financial plan and solidifying the right funding option for you.</li>
        </ul>
</div>       
     <div className="product-ent">
      <h3>How E&PF Works?</h3>
      <ul>
        <li className='list-product'>For setting up an E&PF we start by signing a term sheet based on the credit approval of the project.</li>
        <li className='list-product'>Then we set up Escrow accounts which is confirmed by the OTT.</li>
        <li className='list-product'>After the agreement is signed, the disbursal sequences happens through the Escrow.</li>
        <li className='list-product'>The payments of the proposed contracts is received through the Escrow.</li>
        <li className='list-product'>The commercial structure is decided according to each product.</li>
      </ul>
     <div className="product-ent">
      <h3>Eligibility for E&PF:</h3>
      <ul>
        <li className='list-product'>Contract with any top 5 OTT Platforms.</li>
        <li className='list-product'>Experience of more than 3 years OR 3 completed projects.</li>
        <li className='list-product'>Proposed project profitability and cash flows.</li>
      </ul>
     </div>
     <div className="product-ent">
      <h3>Documentation required for E&PF:</h3>
      <ul>
        <li className='list-product'>Company Financials of 3 years.</li>
        <li className='list-product'>Company Profile with details of earlier finished projects.</li>
        <li className='list-product'>1 year Bank Statement.</li>
        <li className='list-product'>GST returns.</li>
        <li className='list-product'>Compatible KYC documents.</li>
        <li className='list-product'>Proposed Project P&L and cash flow.</li>
      </ul>
     </div>
     </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default Entertement
