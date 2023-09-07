import React from "react"
import "@styles/base/components/_card.scss"
// import Footer from "../../pages/Footer/Footer"
import './Contact.css'
// import Foot from './images/Group 146.svg'
import Rect1 from './images/Rectangle 123.svg'
// import Logo from './images/1 click -Logo for Light BG 4.svg'
import Instagram from './images/Instagram.png'
import Facebook from './images/Facebook.png'
import LinkedIn from './images/LinkedIn.png'
import Twitter from './images/Twitter.png'
import Form from "../../@core/components/hori-form/index"
import Button from "../../@core/components/Registration/index"
import { NavLink } from 'react-router-dom'
function Contact () {
        return (
          <><helmet>
            <title>Get in touch with us for any queries | 1 Click Capital</title>
            <meta name="description" content="Contact us for any queries and feedback related to payroll funding or advance salary. Please get in touch with us via phone or email."/>
            <meta name="keywords" content="Contact us, Get in touch with us"/>
           <link rel="canonical" href="https://1clickcapital.com/contact-us" />
                     </helmet>
                     <Button/>
            <div className='main-footer card'>
                 <Form />
                 <div className='Stylecont'>
          <p className='footer-style1'>If you are looking  for speed and ease for raising capital,<br /> you have came to the right place</p>
        </div>    
        <div className='Rectangle'>
          <img  src={Rect1} alt="BigCo Inc. logo" className="footer-rectangle-top"/> 
        </div>
        <div className='rowfootor'>
          <div className='colfootor'>
            <h2 className='colfootor-h2'>  Quick Links  </h2>
            <a><NavLink
            exact
               to="/" className='footor-text'>Home
              </NavLink></a><br></br>
            <a><NavLink
            exact
               to="/about-us" className='footor-text'>About
              </NavLink></a><br></br>
            <a><NavLink
            exact
               to="/products/1-click-payroll" className='footor-text'>Our Product
              </NavLink></a><br></br>
              <a><NavLink
            exact
               to="/faqs" target="_blank"  className='footor-text'>FAQ
              </NavLink></a><br></br>
          </div>
          <div className='colfootor'>
            <h2 className='colfootor-h2'>  Other Links  </h2>
            <a><NavLink
            exact
               to="/privacy-policy" className='footor-text'>Privacy policy
              </NavLink></a><br></br>
            <a><NavLink
            exact
               to="/career" className='footor-text'>Career
              </NavLink></a><br></br>
            <a><NavLink
            exact
               to="/contact-us" className='footor-text'>Contact us
              </NavLink></a><br></br><br></br>
          </div>
          <div className='colfootor colfootor2'>
            <h2 className='colfootor-h2'>  Our Address </h2>
            <a className='footor-text' href="https://www.google.com/maps/place/1+Click+Capital/@19.1113219,72.9080361,15z/data=!4m5!3m4!1s0x0:0xe932828b9f7ade92!8m2!3d19.1113219!4d72.9080361">701-702 Wing A, Supreme Business Park,
            Hiranandaini gardens,
            Powai, Mumbai:400076,
            Maharashtra</a>
          </div>
          <div className='colfootor colfootor2'>
            <h2 className='colfootor-h2'> Contact Details  </h2>
            <a href="tel:18005325200"  className='footor-text'> 180 05325 200</a><br></br>
            <a href="mailto:contactus@1clickcapital.com"  className='footor-text'>contactus@1clickcapital.com</a><br></br>
            <a href="mailto:grievance@1clickcapital.com"  className='footor-text'>grievance@1clickcapital.com</a>
          </div>
          {/* <div className='colfootor contactno'>
            <h2 className='colfootor-h2'>  Contact Number  </h2>
            
          </div> */}
        </div>
        <div className='Rectangle'>
          <img className='footer-rectangle-bottom' src={Rect1} alt="BigCo Inc. logo"/>  
        </div>
        <div className='footer-logo-sm rowfootor-logo'>
          <div className='footer-logo colfootor-logo'>
            <a href="https://www.instagram.com/1clickcapital/"><img src={Instagram} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor-logo'>
            <a href=" https://www.facebook.com/1clickcapital"><img src={Facebook} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor-logo'>
            <a href="https://www.linkedin.com/company/1-click-capital/mycompany/"><img src={LinkedIn} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor-logo'>
            <a href='https://twitter.com/1clickcapital'><img src={Twitter} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
        </div>
          {/* <div className='Style1'>
          <div className='smallrect'></div>
          </div> */}
          <div className='Style2'>
            <p className="footer-style1">Copyright &#169; 2022 1Click Capital.</p>
            <p className="footer-style1">All Rights Reserved </p>
            <p className="footer-style1">Powered by C.H.P FINANCE PRIVATE LIMITED</p>
          </div>
             </div>
             </>
        )
}
export default Contact