import React from 'react'
import './Feature.css'
import '../Product/style.css'
import F1 from './images/Group 159.png'
import F2 from './images/Group 167 (1).png'
import F3 from './images/Group 168.png'
import F4 from './images/Group 169.png'
import F5 from './images/Group 170.png'
import F6 from './images/Group 171.png'
// import Rectangle from './images/rectangle.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
function HeadingFeature() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-feature')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-feature'),
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
    function simpleFeature() {
        const width = window.innerWidth
        if (width < 500) {
            const nodeList = document.querySelectorAll(".Feature-comp")
            for (let i = 0; i < nodeList.length; i++) {
              const rect = nodeList[i].getBoundingClientRect()
              const pos = rect.top.toFixed()   
              const height = window.screen.availHeight
              if (pos < height / 2  && pos > 140) {
                nodeList[i].classList.replace('zoomout1', 'zoomin1')
              } else {
                nodeList[i].classList.replace('zoomin1', 'zoomout1')
              }
            }
          }  
        }
       
        useEffect(() => {
            window.addEventListener('scroll', simpleFeature)
        
            return () => {
                window.removeEventListener('scroll', simpleFeature)
            }
        }, [])
    return (
            <div class="container-gsap-feature" ref={ headingref } id="container-feature">
                <div class="wordmark-title-feature"></div>
                {/* <div class="title-rect1-feature"></div>
                <div class="title-rect2-feature"></div> */}
                {/* <img className="rectangle-titlesvg-feature" src={Rectangle} /> */}
            </div>
    )
  }
function Featuresanimation() {
    return (
        <div className="card">
            <HeadingFeature />
            <div className='Feature-main'>
             <div  className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F1}  alt="1-Click-Limited-paperwork"></img>
                <p className='Feature-text'>1 Click Capital recognizes the value of your time and resources, so we ask for minimal
                        paperwork to process your application.</p>
             </div>
             <div className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F2} alt="1-Click-Speed-and-Ease"></img>
                <p className='Feature-text'>Uncertainty is undoubtedly the most formidable 
                        foe of preparation. It is our aim to bring clarity to your application within
                        48 hours of submission.</p>
             </div>
             <div className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F3} alt="1-Click-24x7-Utilisation"></img>
                <p className='Feature-text'>You can use your funds any time of the  day or night 24x7 as soon as your limit
                        is generated in the 1 Click System</p>
             </div>
             <div className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F4} alt="1-Click-Low-Cost"></img>
                <p className='Feature-text'>Interest rates are as low as 1.5 percent, you just pay for the funding you use.</p>
             </div>
             <div className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F5} alt="1-Click-Immediate-Access"></img>
                <p className='Feature-text'>Enjoy immediate access to funds as soon as you’ve been approved.
                        All you have to do is ask for it</p>
             </div>
             <div className='Feature-comp zoomout1 '>
                <img className='Feature-image' src={F6} alt="1-Click-Quick-Approval"></img>
                <p className='Feature-text'>We aim to process your application within 48 hours for your convenience and ease.</p>
             </div>
            </div>
        </div>     
    )
}

export default Featuresanimation
