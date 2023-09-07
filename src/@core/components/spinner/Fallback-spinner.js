import React from "react"
import { gsap } from "gsap"
import Circle from './images/svg2.svg'
import Fingure from './images/Vector (1).svg'
import "./style.css"
const { useLayoutEffect, useRef } = React
const SpinnerComponent = () => {
  const app = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
         gsap.to(".div1", {x:1000, y:1100, duration:4})
        const t1 = gsap.timeline()
      t1.fromTo(".svg1", {x:275, y:300}, {x:275, y:120, delay:4})
     t1.fromTo(".svg2", { x:500, y:60}, {x:500, y:-300})
    }, app)
    return () => ctx.revert()
  })

  return (
    <div ref={app}>
      <img className="svg1" src={Circle} ></img>
      <img className="svg2" src={Fingure} ></img>
    <div className="div1">
  <div className="urec"></div>
  <div className="lrecsmall">  
  </div>
  <div className="lrec"></div>
  <div className="urecsmall"></div>
</div> 
</div>
  )
}

export default SpinnerComponent
