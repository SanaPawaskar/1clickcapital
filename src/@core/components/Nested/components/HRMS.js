import React from "react"
import "./Secondpage.css"

import Button3 from './3button'
import ScrollToTop from "../../../../scroltop"
function HRMS() {
  return (
    <>
    <helmet>
  <title>Skill Loan Scheme for Students | 1 click capital</title>
   <meta name="description" content="Improve your skills with the Skill Loan Scheme for students and access the Skills Development Fund. 1 Click Capital provides a skill development fund for growth."/>
<link rel="canonical" href="https://www.1clickcapital.com/products/skill-loan-Scheme" />
<link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
  </helmet>
    <div className="main-product-page">
          <div className="heading-box">
         <span className="Common-word-product">1 Click</span><h1 className="product-name">Skill Loan Scheme</h1>
         <div className="rectline1"></div>
          </div>
      <Button3/>
        
        <div className="rectline2"></div>
        <div className='para1-salaryadv'>
        <p>1 click capital is here to Empower your growth through education. Our skill loan offers flexible financing options to help you invest in your skills and unlock new opportunities for personal and professional development. We ensure you can pursue your educational goals without financial barriers.</p>   

     </div>
     <div className="product-ent">
      <h3>Our coverage includes:</h3>
      <ul>
        <li className='list-product'>Tuition/ course fee.</li>
        <li className='list-product'>Examination/Assessment/Laboratory fee</li>
        <li className='list-product'>Library charges</li>
        <li className='list-product'>Purchase of books, equipment, and instruments.</li>
        <li className='list-product'>Any other reasonable expenditure found necessary for completion of the course.</li>
      </ul>
     <div className="product-ent">
      <h3>Skill Loan eligibility :</h3>
      <ul>
        <li className='list-product'><strong>Nationality : </strong> Indian nationals only.</li>
        <li className='list-product'><strong>Training Institutes : </strong> ITIs, Polytechnics, recognized schools/colleges/universities, and training partners affiliated with NSDC/Sector Skill Councils, State Skill Mission, State Skill Corporation.</li>
        <li className='list-product'><strong>Preferred Outcome : </strong> Certificate/diploma/degree issued as per NSQF.</li>
        <li className='list-product'><strong>Training Courses : </strong> Aligned with NSQF, offered by mentioned training institutes.</li>
        <li className='list-product'><strong>Course Duration : </strong> No minimum duration requirement.</li>
        <li className='list-product'><strong>Minimum Age:  </strong> No specific age restriction.</li>
        <li className='list-product'><strong>Minimum Qualification : </strong>  As per NSQF guidelines set by enrolling institutions/organizations.
</li>
      </ul>
     </div>
     </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default HRMS
