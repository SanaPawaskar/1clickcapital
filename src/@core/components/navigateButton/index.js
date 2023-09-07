import React, { useEffect, useRef } from "react"
import './style.css'
import Arrow from './Group 206.png'

function navigateButton () {
    const ref1 = useRef()
       function handleScroll() {
        const position = window.pageYOffset
     
        if (position >= 525) {
          
            ref1.current.style.display = "Block"
        } else {
            ref1.current.style.display = "none"
        }
       }
       
      useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    function navigateToTop() {
        window.scrollTo(0, 0)
    }
    return (
     <img ref={ref1} onClick={navigateToTop} className="arrow-up-navigate" src={Arrow} alt="MovetoTop"/>
    )
}

export default navigateButton