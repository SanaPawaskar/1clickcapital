
import './style.css'
import "@styles/base/components/_card.scss"
import CountUp from "react-countup"
import React, { useState} from "react"
import ScrollTrigger from "react-scroll-trigger"
import CompanyLogo from './images/rise.png'
import CompanyLogo1 from './images/find.png'
import CompanyLogo2 from './images/wheel.png'
import CompanyLogo3 from './images/rupee.png'

function Stats() {
    const [counterOn, setCounterOn] = useState(false)
  //   const settings = {
  //    dots: true,
  //    infinite: false,
  //    speed: 500,
  //    autoplay: true,
  //    slidesToShow: 4,
  //    slidesToScroll: 4,
  //    initialSlide: 0,
  //    responsive: [
  //      {
  //        breakpoint: 1024,
  //        settings: {
  //          slidesToShow: 3,
  //          slidesToScroll: 3,
  //          infinite: true,
  //          dots: true
  //        }
  //      },
  //      {
  //        breakpoint: 600,
  //        settings: {
  //          slidesToShow: 2,
  //          slidesToScroll: 2,
  //          initialSlide: 2
  //        }
  //      },
  //      {
  //        breakpoint: 480,
  //        settings: {
  //          slidesToShow: 1,
  //          slidesToScroll: 1
  //        }
  //      }
  //    ]
  //  }
        return (
          <ScrollTrigger  onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="stats card">
       {/* <h2> Responsive </h2> */}
       
       {/* <Slider {...settings}> */}
         <div className='card10'>
         <img className="pic"src={CompanyLogo} alt="Happy-Corporates"/>
         <h3 className="heading-stats">{counterOn && <CountUp start={100} end={413}duration={2} delay={0}/>} </h3>
        <h3 className='heading-stats'> Happy Corporates</h3>
         </div>
         <div className='card10 '>
          <img className="pic" src={CompanyLogo1} alt="Individuals"/>
         <h3 className="heading-stats" >{counterOn && <CountUp start={3700} end={3762}duration={2} delay={0}/>} </h3>
        <h3 className='heading-stats'>Individuals</h3>
         </div>
         <div className='card10 '>
         <img className="pic"src={CompanyLogo2} alt="Sectors"/>
         <h3 className="heading-stats">{counterOn && <CountUp start={0} end={14}duration={2} delay={0}/>} </h3>
        <h3 className='heading-stats'>Sectors</h3>
         </div>
         <div className='card10 '>
         <img  className="pic" src={CompanyLogo3} alt="Transactions"/>
         <h3 className="heading-stats" >{counterOn && <CountUp start={6000} end={6176}duration={2} delay={0}/>} </h3> 
        <h3 className='heading-stats'>Transactions</h3>
         </div>
          {/* </Slider> */}
        </div>
        </ScrollTrigger>
        )
    }

export default  Stats