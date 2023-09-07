
import { useEffect, useRef} from 'react'

import './style.css'
function Ball () {
   const ref = useRef(null)
   const ref1 = useRef(null)
  //  const [mousePos, setMousePos] = useState({})
  
   useEffect(() => {
    //  const handleMouseMove = (event) => {
    //    setMousePos({ x: event.clientX, y: event.clientY })
   
    //  }
 
   //   window.addEventListener('mousemove', handleMouseMove)
  //  const ball1 = ref.current
  //  const ball2 = ref1.current
  //  console.log(ball1)
  //  ball1.addEventListener('onmouseover', handleMouseMove)
  //  ball2.addEventListener('onmouseover', handleMouseMove)
     return () => {
      //  window.removeEventListener(
      //    'mousemove',
      //    handleMouseMove
      //  )
      //  ball1.removeEventListener('onmouseover', handleMouseMove)
      //  ball2.removeEventListener('onmouseover', handleMouseMove)
     }
   }, [])
   return (
    <div className="box"><b ref={ref}></b>
    <span ref={ref1}></span>
    </div>
   )
}
export default Ball
// import React, { useRef, useEffect } from 'react'
// import './style.css'

// const BouncingBall = () => {
//   const canvasRef = useRef(null)
//   const canvasRef1 = useRef(null)
//   let x = 150
//   let y = 150
//  let x1 = 700
//  let y1 = 200
//   let vx = 8
//   let vy = 8
//   let vx1 = 8
//   let vy1 = 8
//   const draw = () => {
//     const ctx = canvasRef.current.getContext('2d')
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     x += vx
//     y += vy
//     if (x < 150 || x > ctx.canvas.width - 150) {
//       vx = -vx
//     }
//     if (y < 150 || y > ctx.canvas.height - 150) {
//       vy = -vy
//     }
//     ctx.beginPath()
//     ctx.arc(x, y, 150, 0, Math.PI * 2)
//     ctx.fillStyle = '#F6A624'
//     ctx.fill()
//     requestAnimationFrame(draw)
//   }
//   const draw1 = () => {
//     const ctx1 = canvasRef1.current.getContext('2d')
//     ctx1.clearRect(0, 0, ctx1.canvas.width, ctx1.canvas.height)
//     x1 += vx1
//     y1 += vy1
//     if (x1 < 150 || x1 > ctx1.canvas.width - 150) {
//       vx1 = -vx1
//     }
//     if (y1 < 150 || y1 > ctx1.canvas.height - 150) {
//       vy1 = -vy1
//     }
//     ctx1.beginPath()
//     ctx1.arc(x1, y1, 150, 0, Math.PI * 2)
//     ctx1.fillStyle = '#2FC4CE'
//     ctx1.fill()
//     requestAnimationFrame(draw1)
//   }
//   useEffect(() => {
//     requestAnimationFrame(draw1)
//     requestAnimationFrame(draw)
  
//   })
//   return (
//     <>
//     <canvas className="box"
//       ref = {canvasRef}
//       width = {900}
//       height = {500}
//     />
//     <canvas className="box"
//       ref = {canvasRef1}
//       width = {900}
//       height = {500}
   
//     />

//      </>
//   )
// }
//  export default BouncingBall