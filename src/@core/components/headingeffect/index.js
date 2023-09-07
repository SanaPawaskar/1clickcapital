import React from "react"
import './style.css'
import { gsap } from "gsap"
import  Recsvg  from "@src/assets/images/pages/rectangle.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
function Heading() {
    
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-award')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector('.container-gsap'),
                start: "top 60%",
                end: "bottom 20%",
                scrub: true,
                repeat:0
            }
        })
        tl.to(wordmark, {
            width: "10px"
        })
    }, [])
    return (
        <> <img class="
        rectangle-all"src={Recsvg}>
        </img>
         <div class="container-gsap" ref={ headingref } id="container">
        <div class="wordmark-title-award"></div>
        <div class="title-rect1"></div>
            <div class="title-rect2"></div>
    </div>
        </>
       
    )
  }
  export default Heading