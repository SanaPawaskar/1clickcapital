import React from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { EasePack } from "gsap/EasePack"
gsap.registerPlugin(TextPlugin, EasePack)
import './Effect.css'
const { useLayoutEffect, useRef } = React
function Effect() {
    const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       const words = ["Stability", "Success", "Peace", "Retention"]
       const boxTL = gsap.timeline()
       const masterTL = gsap.timeline({repeat: -1})
       boxTL.to('.auto-input', {duration: 3, delay: 0.7})
       .from('.auto-input', {duration: 1, onComplete: () => masterTL.play()})
       words.forEach(word => {
           const tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 0.5})
           tl.to('.auto-input', {duration: 1, text: word})
           masterTL.add(tl)
       })

     }, app)
     return () => ctx.revert()
   })
   return (
    <div className="motto3" ref={app}>
    <span>1 Click To   </span>
    <span className="auto-input"></span>
    </div> 
   )
 }
export default Effect