import {React} from "react"
import "@styles/base/components/_card.scss"
import Form from "../../@core/components/form"
// import { Card } from "reactstrap"
 import './main.css'
import Effect from "../../@core/components/m_effect"
//  import  Recsvg  from "@src/assets/images/pages/rectangle.svg"
// import Register from "../../@core/components/Registration"
//  import topsvg from "./Group 80.png"
// import topsvg from "./rectangle.png"
 
// import { useEffect } from "react"

const MainPage = () => {
  window.scrollTo(0, -30)
//   useEffect(() => {
    
//     const element = document.getElementById('home')
//       // 👇 Will scroll smoothly to the top of the next section
//       element.scrollIntoView({ behavior: 'smooth', top :"-200px" })
  
// }, [])
  return (
    <>
      <div className="homecard" id="home">
        <div className="row">
          <div className="column">
          {/* <img className="topsvg" src={topsvg}>
            </img> */}
            <div className="company-motto">
              <div className="motto1">
                <p>Hamesha</p>
                <p>Aapke</p>
                <p>Saath</p>
              </div>
              <Effect />
            <p className="motto2-top">Listening to the Financial Needs of Business and Simplifying Payroll Financing for Digital India</p>
            </div>
          </div>
          <div className="column">
            <div className="main-form">
              <Form />
            </div>
          </div> 
          <p className="motto2-bottom">Listening to the Financial Needs of Business and Simplifying Payroll Financing for Digital India</p>
        </div>
      </div>
      
    </>
  )
}

export default MainPage
