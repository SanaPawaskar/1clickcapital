// import React from "react"
// import { gsap } from "gsap"
// import Circle from './images/svg2.svg'
// import Fingure from './images/Vector (1).svg'
// import "./style.css"
// const { useLayoutEffect, useRef } = React
// const SpinnerComponent = () => {
//   const app = useRef()
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//          gsap.to(".div1", {x:1000, y:1100, duration:4})
//         const t1 = gsap.timeline()
//       t1.fromTo(".svg2", {x:275, y:300}, {x:275, y:120, duration:1.5 })
//      t1.fromTo(".svg1", { x:500, y:60}, {x:500, y:-300, duration:2, fill:"orange"})
//     }, app)
//     return () => ctx.revert()
//   })

//   return (
//     <div className="card" ref={app}>
//       <img className="svg1" src={Circle} alt="image"></img>
//       <img className="svg2" src={Fingure} alt="image"></img>
//     <div className="div1">
//   <div className="urec"></div>
//   <div className="lrecsmall">  
//   </div>
//   <div className="lrec"></div>
//   <div className="urecsmall"></div>
// </div> </div>
//   )
// }

// export default SpinnerComponent

