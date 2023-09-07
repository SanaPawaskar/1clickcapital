import React from 'react'
import './Secondpage.css'
import RetailForm from '../../form/reatilForm'
import ScrollToTop from '../../../../scroltop'
import Vect1 from './Vector (1).png'
import Vect2 from './Group 24bag tick.png'
import Vect from './Vector.png'
// import ScrollToTop from '../../../../scroltop'
// import Register from '../../Registration'
function Retail() {
 
  return (
    <>
    <helmet>
<title>Secure Your Retail Store Business Loan for Shopkeepers</title>
<meta name="description" content="Get the financial boost with our specialized Retail Store business loan for shopkeepers. Apply now for flexible terms tailored to your retail business needs. "/>
<link rel="canonical" href="https://www.1clickcapital.com/products/retail-loans" />
<link href="/fonts/futura-md-bt.css" rel="stylesheet"/>
</helmet>
    <div className="main-product-page">
    <div className="heading-box">
   <span className="Common-word-product">1 Click</span><h1 className="product-name"> Retail</h1>
   <div className="rectline1"></div>
    </div>
    <div className="section2-product">
       <span className="circle-product"></span>
        <div className="button-product-container">
         <div className="enroll-button">
           <span className="image-back-white"><img className="enroll-img" src={Vect} alt="ProductProfile"></img></span>
            <p className="enroll-text">Click on Registration Button and Fill Required Details.</p>
         </div>
         <div className="enroll-button">
            <span className="image-back-white"><img className="enroll-img" src={Vect1} alt="ProductBook"></img></span>
            <p className="enroll-text">Upload Important Documents</p>
         </div>
         <div className="enroll-button">
          <span className="image-back-white"><img className="enroll-img" src={Vect2} alt="ProductBag"></img></span> 
            <p className="enroll-text">Avail the Loan Selecting the EMI Option</p>
         </div>
        </div>
        <RetailForm/>
        </div>
     <div className='para1-salaryadv'>
     <p> Keeping the Indian Shopkeeper in mind, 1 Click Capital introduces 1 Click Retail,
 a shopkeeper financing solution to provide everyday financial support to all shopkeepers.</p>
     </div>
        <div className="rectline2"></div>
      <div className="para1-salaryadv">
        
        <ul>
        <li>The average Indian shopkeeper can benefit from this scheme by 
            improving their working capital enabling them to overcome their cash flow shortage.</li>
          <li>Shopkeepers face many challenges like high competition, limited access to capital, lack of technology, 
            lack of customer loyalty, the inability to scale up their business etc. </li>
          <li>1 Click Retail is a new and innovative idea to help shopkeepers with their day to day working capital, 
            and provide them with enough cash flow to deal with their financial difficulties.</li>
          <li>We provide you a 30, 45 and 60 day daily EMI option.</li>
          <li>1 Click Retail comes at a low-cost ROI with a daily 
            repayment option and is an unsecured loan that requires no collateral. </li>
        </ul>
      </div>
      </div>
      <ScrollToTop/>
      </>
  )
}

export default Retail