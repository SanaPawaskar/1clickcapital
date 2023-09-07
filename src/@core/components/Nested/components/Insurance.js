import React from 'react'
import './Secondpage.css'
import Button3 from './3button'
import ScrollToTop from '../../../../scroltop'
function Insurance() {
  return (
    <>
      <helmet>
   <title>Insurance funding with 1 Click Capital |1 Click Capital</title>
    <meta name="description" content="Get quick and easy capital insurance funding with 1 Click Capital’s 1 Click Insurance."/>
    <link rel="canonical" href="https://1clickcapital.com/products/1-click-insurance-funding" />
    <link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
   </helmet>
    <div className="main-product-page">
    <div className="heading-box">
   <span className="Common-word-product">1 Click</span><h1 className="product-name">  Insurance Funding</h1>
   <div className="rectline1"></div>
    </div>
          <Button3/>
          <h2 className="Common-word-product2"> HOW IT WORKS</h2>
        <div className="rectline2"></div>
        <div className="para1">
   <h4 className='para1-feature-head'>Loan against Lapsed Policy :</h4> 
   <p className='para1-feature-data'>To fund the premium of policy holders whose policy has lapsed and to enable them to renew their lapsed policy.</p>
   <h6 className='para1-head'>Features :</h6>
   <p className='para1-data'>Loan tenure 3 months to 1 year Assignment of policy to NBFC Declaration of Good Health </p>
   <h4 className='para1-feature-head'>Loan against Existing Policy : </h4>
   <p className='para1-feature-data'>To fund the future premium of policy holders whose policy is in existence till a percentage of their surrender value.</p>
   <h6 className='para1-head'> Features :</h6>
   <p className='para1-data'>Loan tenure 3 months to 1 year Assignment of policy to NBFC Declaration of Good Health </p>
   <h4 className='para1-feature-head'>Loan for purchase of New Policy :</h4> 
   <p className='para1-feature-data'>To fund new policy holders interested in enrolling for a new policy by funding finances for their premiums.</p>
    <h6 className='para1-head'>Features :</h6> 
    <p className='para1-data'>Loan tenure – 3 months – 1 year Assignment of policy to NBFC Rate of Interest – 1.25%  per month for both traditional and ULIP policies Processing Fee – 3% + GST</p>
      </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default Insurance
