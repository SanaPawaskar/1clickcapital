import React, {useRef, useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"
import "@styles/base/components/_card.scss"
// import {  } from "react"
// import Heading from "../../@core/components/headingeffect"
import { NavLink } from "react-router-dom"
// import Rectangle from './rectangle.png'
import { gsap } from "gsap"
import ButtonsFin from '../../views/about/fintech.png'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import "./style.css"
function About() {
  window.scrollTo(0, -30)
  const [click, setClick] = useState(false)
  const ref1 = useRef()
  function scroll () {
    ref1.scrollIntoView()
    setClick(!click)
  }
  function HeadingAbout() {
    const headingref = useRef(null)
    useEffect(() => {
      const wordmark = document.querySelector('.wordmark-title-about')
      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: document.querySelector('.container-gsap-about'),
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
          repeat:0
        }
      })
      tl.from(wordmark, {
        width: "0px"
      })
      tl.to(wordmark, {
        width: "300px"
      })
    }, [])
    return (
        <div class="container-gsap-about" ref={ headingref } id="container-about">
          <div class="wordmark-title-about"></div>
          {/* <div class="title-rect1-about"></div>
          <div class="title-rect2-about"></div> */}
          {/* <img className="rectangle-titlesvg-about" src={Rectangle}/> */}
        </div>
    )
  }
   
        return (
            <div className="card" ref={ref1}>
              <HeadingAbout/>
              <div className='headings-aboutus'>
                <p className='text1underline'> Breaking New Ground Every Day </p>
                <p className='text2center'> Listening to the Financial Needs of Businesses and Simplifying Payroll Funding for Digital India.</p>
              </div>
              <div className='text1underline'>
  <p>Our MISSION</p>
  </div>
  <div className='text2center'>
    <p className='text2center-p'>To create a business friendly way of leveraging capital to help
       individuals and institutions amid financial crises</p>
    </div>
    <img className='Buttonfin' src={ButtonsFin} alt="button"></img>
            {/* <div className='text3Bold'>
              <p> India’s first ever digital portal to offer payroll funding, making every business owner’s dream<br></br>
               possible through everyday capital realities.</p>
            </div>
            <div className='text4'>
              <p>1 Click Capital is on a mission to change the way businesses in our country access the funding they need to pay their employees and sustain<br>
              </br> their business.</p></div> */}
        
              <div className='text5'>
                {/* <p>
                In these unprecedented times we know how difficult it is for organizations to survive and thrive; every business needs financial flexibility to adapt quickly to the rapidly changing environment and unlock full advantages of the opportunities 
                presented to them in real time.<br></br>
                The threat of COVID grew into the MSME sector like fuel. Companies started collapsing one after another and during the same time it became difficult for
        banks to provide loans without prior networks. <br></br>
        We wanted to challenge the status quo of the financial market and reimagine the way lending capital and everything related to it happened in this country.<br>
        </br>Our long enriched journey in the financial sector gave birth to this dream but it was the pandemic that revived us. Our thirst to solve the credit crisis in the
        MSME sector was finally taking shape.<br>
        </br>Creating a cutting edge novel product in an unpredictable market wasn’t an easy feat but the immense bond and respect we brothers shared for each other
        and the expert industry advice we received from our mentors turned our dream into a reality.<br>
        </br>We have since tied up with over 400 corporates and around 3750 individuals whom we have seamlessly financed and helped to revolutionize their journeys.
                </p> */}
                 <button className="read-button">
               <NavLink
               exact
               to="/about-us"
               onClick={scroll}
                className="read-more"
             >
              Read more
             </NavLink></button>
              </div>
              </div>
        )
    }

export default  About