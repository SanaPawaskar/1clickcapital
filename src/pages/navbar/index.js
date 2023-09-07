// ** Horizontal Menu Components
import React from "react"
// import HorizontalNavMenuItems from "./HorizontalNavMenuItems"
import './style.css'
import { gsap } from "gsap"
import svg from './Group 188logo.png'
const {useLayoutEffect, useRef } = React
const Logo = () => {
  const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       gsap.fromTo(".navsvg", { x:"-100"}, {x:"50", duration:1})
     }, app)
     return () => ctx.revert()
   }, [])
  return (
    <div ref={app} className="navsvg-div">
      <img   src={svg} className="navsvg"  alt="1-Click-Capital-Logo"/>
    </div>
  )
}

export default Logo
