import React from "react"
import './style.css'
// import Button from "../../@core/components/button/Button"
import Payroll from './images/Payroll.png'
import Salary from './images/SAlary.png'
import Insurance from './images/Insure.png'
import Project from './images/Product.png'
import LRD from './images/LRD.png'
import Working from './images/Working.png'
import CR from './images/MSME.png'
import HRm from './images/HRMS.png'
import SCF from './images/SCF.png'
import Production from "./images/ENT.png"
import Retail from "./images/Retailpro.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Register from "../../@core/components/Registration/Register2"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
  function HeadingProduct() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-product')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-product'),
                start: "top 60%",
                end: "bottom 20%",
                scrub: true,
                repeat:0
            }
        })
        tl.from(wordmark, {
          width: "0px"
        })
        tl.to(wordmark, {
          width: "300px"
        })
    }, [])
    return (
        <div class="container-gsap-product" ref={ headingref } id="container-product">
          <div class="wordmark-title-product"></div>
        </div>
    )
  }
function Product () { 
  // const ref = useRef()
  useEffect(() => {
    function simple() {
      const nodeList = document.querySelectorAll(".product-content-container")
      for (let i = 0; i < nodeList.length; i++) {
        const rect = nodeList[i].getBoundingClientRect()
        const pos = rect.top.toFixed()   
        const height = window.screen.availHeight
        if (pos < height / 2  && pos > 120) {
          nodeList[i].classList.replace('zoomout', 'zoomin')
          nodeList[i].classList.replace('fadeOut', 'fadeIn')
        } else {
          nodeList[i].classList.replace('zoomin', 'zoomout')
          nodeList[i].classList.replace('fadeIn', 'fadeOut')
        }
      }
    }
    window.onscroll = function () {
      simple()
    }
  }, [])
 
        return (
        <div  className="card"  style={window.innerWidth < 600 ?  {marginTop:"1.5%"} : {marginTop:"-8%"}}>
          <HeadingProduct />
         <div className="card1-div">
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={Payroll}  alt="1-Click-Payroll-Financing"/>
                <p className=" product-round-corners-text">1 Click Payroll Financing is an industry-first, low-cost, short-term unsecured business loan for Payroll financing or payroll funding solution that assists corporates in meeting their payroll obligations on time.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={Salary} alt="1-Click-salary-Advance"/>
                <p className=" product-round-corners-text">It is a short-term loan usually paid back within 2 to 3 months. It gives immediate access to liquidity when an employee is in a need of contingency salary.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={Insurance} alt="1-Click-Insurance-Funding"/>                  
                <p className=" product-round-corners-text">1 Click Insurance Funding offers loans to individuals against the surrender value of their insurance policies. It also offers loans to individuals for paying their insurance premiums.</p> 
              </div>
              <div className="product-content-container zoomout fadeOut">            
                <img className="product-pro-image" src={Project}  alt="1-Click-Project-Funding"/>                  
                <p className=" product-round-corners-text">1 Click Capital’s Project Funding is a complete financial solution to fund your project start to end.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={LRD} alt="1-Click-Lease-Rental-Discounting"/>                 
                <p className=" product-round-corners-text">With 1 Click Capitals Lease Rental Discount (LRD) get quick access to capital against your leased property with the rental receipts working as collateral. </p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={SCF} alt="1-Click-Supply-Chain-Financing"/>
                <p className=" product-round-corners-text">SCF is a combination of technology based collateral free business loan that lowers cost and improves competency for all parties involved. It funds the entire line of supply chain aspects.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="product-pro-image" src={Working} alt="1-Click-Working-Capital"/>   
                <p  className=" product-round-corners-text">Working capital is that money used to conduct the day to day functions and operations of a business. Get funding to support the everyday requirements of day to day business.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="productproimg" src={CR}  alt="1-Click-Collateral-Free-MSME/SME"/>  
                <p  className=" product-rctext">1 Click Capital’s Collateral free MSME or SME loan is a credit service offered to micro, small or medium enterprises without putting down assets for collateral to raise funds.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="productproimg" src={HRm}  alt="1-Click-Human-Resource-Management0-System"/>   
                  <p  className="product-rctext2">Human Resources Management System or HRMS refers to a combination of software and services that deals with 360 degree of internal Human Resources functions throughout an employees work cycle.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="productproimg" src={Production}  alt="1-Click-Entertainment-and-Project-Funding"/>
                <p  className="product-rctext2">1 Click Capital’s Entertainment & Project Funding (E&PF) is a complete financial solution to fund your project start to end.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <img className="productproimg" src={Retail}  alt="1-Click-Entertainment-and-Project-Funding"/>
                <p  className="product-rctext2"> 1 Click Retail, a shopkeeper financing solution to provide everyday financial support to all shopkeepers.</p>
              </div>
            </div>
          </div>
           
        )
    }

export default  Product