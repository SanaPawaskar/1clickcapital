import React from 'react'
import house from "./Group 360328.png"
import downstyle from "./Group 314 (1).png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import "./Sky.css"
function ClickCa() {
  return (
    <div className='container_twit'>

        <div className='card_twit'>
          <div className='rect_twit'>
            1 Click Capital
          </div>
          <div className='text-div_twit'>
          <div className='title1_twit'> Leading</div>
          <div className='Bold-title_twit'> FinTech</div>
          <div className='small-title_twit'>company </div>
          </div>
          <div className='box-div_twit'>  
          <div className='border-white-div_twit'>
          <div className='box-text_twit'>
              Know more
            </div>
            </div>
            </div>
 <div className='contact-div-main_twit'>
    <div className='font-one_twit'>
       <FontAwesomeIcon icon={faSquarePhone}/>
     </div>
  <div className='num_twit'> 180 05325 200</div>
 <div className='font-one_twit'>
  <FontAwesomeIcon icon={faSquareEnvelope} className='font_twit'/>
    </div>
 <div className='num_twit'>contactus@1clickcapital.com  </div>
  </div>
          <div className='house_twit' >
          <img className='image-class-house_twit' src={house}/>
          </div>
          <div >
          <img  className='image2-class-downstyle_twit' src={downstyle} alt='name'/>
          </div>
        
        </div>
    </div>
  )
}

export default ClickCa