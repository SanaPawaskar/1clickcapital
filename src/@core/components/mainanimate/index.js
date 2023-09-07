import React, {useEffect} from "react"
// import { gsap } from "gsap"
import './style.css'
import VideoDesktop from './16-9-h3.mp4'
import VM from './9-16 FIN-l.mp4'
// import Circle from './logologo.png'
// import Icon from './Vectorhand.png'
// import Banner from './1 click -Logo for Light BG 11click-HAS.png'
// import Glass from './Glass Slide. -Introglass effect.svg'

function Mainanimate() {
    useEffect(() => {
      document.getElementById("main-video").play()
    }, [])
   return (
    <video  loop autobuffer="" playsinline="" autoplay="" muted  className="video-animation" id="main-video">
    <source src={window.innerWidth > 500 ? VideoDesktop : VM } type="video/mp4"/>
   </video>
    
   )
 }
 export default Mainanimate