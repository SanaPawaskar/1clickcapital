// ** Horizontal Menu Components
import React from "react"
import HorizontalNavMenuItems from "./HorizontalNavMenuItems"
import './style.css'
import { gsap } from "gsap"
import svg from './Logo CIRCLE (1).svg'
// import Button from "../../../../components/button/Button"
const {useLayoutEffect, useRef } = React
const HorizontalMenu = ({menuData}) => {
  const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       gsap.fromTo(".navsvg", { x:"-600"}, {x:"-335"})
     }, app)
     return () => ctx.revert()
   })
  return (
    <div>
      <ul ref={app}>
      <img   src={svg} className="navsvg" alt="jaffar"/>
        <HorizontalNavMenuItems submenu={false} items={menuData} />
      </ul>
    </div>
  )
}

export default HorizontalMenu
