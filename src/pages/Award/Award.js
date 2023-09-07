import React from "react"
import './Award.css'
import Award1 from './images/Asset 2.png'
import Award2 from './images/awards2-02 1-2.png'
// import LogoHolder from './images/LogoHolder.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
function HeadingAward() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-award')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-award'),
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
            <div class="container-gsap-award" ref={ headingref } id="container-award">
                <div class="wordmark-title-award"></div>
                {/* <div class="title-rect1-award"></div>
                <div class="title-rect2-award"></div> */}
                {/* <img className="rectangle-titlesvg-award" src={Rectangle} alt="BigCo Inc. logo"/> */}
            </div>
    )
  }
class Award extends React.Component {
    render() {
        return (
        <div className="card">
            <HeadingAward />
            <div className="header">
                <h2 className="header-heading">Best Fintech Startup of the year 2022</h2>
                <div className="Awards-page-line"></div>
            </div>
            <div className="award-main-container">
                <div className="award-row">
                    
                    <div className="award-column" style={{cursor:"pointer"}} onClick={() => { window.open("https://startupreporter.in/business-mint-named-1-click-capital-as-best-emerging-fintech-start-up-of-the-year-2022/") } }>
                    <div className='container-pf-awards'>
                            <img className='imagesize-of-2' src={Award1}  alt="1-Click-Bussinessmint-Award"/>
                            <p className="Awards-Avnish2">BUSSINESSMINT</p>
                        </div>
                       
                    </div>
                    
                   
                    <div className="award-column"  style={{cursor:"pointer"}}  onClick={() => { window.open("https://nationwideawards.org/winners_list_view/1-Click-Capital-Best-Emerging-Fintech-start-up-of-the-year-2022") } }>
                        <div className='container-pf-awards'>
                            <img className='imagesize' src={Award2}  alt="1-Click-International-Achievers-Conference-Award"/>
                            <div className="Awards-Avnish">
                                INTERNATIONAL ACHIEVERS CONFERENCE
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default  Award