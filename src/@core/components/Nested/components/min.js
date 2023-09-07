import {React} from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import PayrollIMG from "./Payroll.png"
import SalaryAdv from "./SalaryAdv.png"
import CF from "./CF.png"
import ProjectFun from "./ProjectFun.png"
import InsuranceFun from "./InsuranceFun.png"
import LRD from "./LRD.png"
import WorkingCap from "./WorkingCap.png"
import SCF from "./SCF.png"
import HRm from "./HRm.png"
import Retail from "./Retail.png"
import Production from "./production logo-01 1entertainment ptod.png"
import "./Secondpage.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { useEffect } from "react"

function Min() {
//   useEffect(() => {
    
//     const element = document.getElementById('product-min')
//       element.scrollIntoView({ behavior: 'smooth' })
  
// }, [])
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        //   dots: true
        }
      }
    ]
  }

  const location = useLocation()
  let pname = location.pathname
  const click = pname
  return (
    <div className="card">
    
    <ul className= "product-nav-menu-vertical">
    <Slider {...settings}>
    <li className={click === "/products/1-click-payroll" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-payroll" 
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={PayrollIMG} className="pro-image" />
                    <p className="product-nav-link">Payroll Financing</p>
                  </Link>
                </li>
                <li className={click === "/products/1-click-salary-advance" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-salary-advance"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={SalaryAdv} className="pro-image" />
                  <p className="product-nav-link">Salary Advance</p>
                  </Link>
                </li>
                <li className={click === "/products/retail-loans" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link to="retail-loans"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={Retail} className="pro-image " />
                  <p className="product-nav-link">Retail</p>
                  </Link>
                </li> 
                <li className={click === "/products/1-click-insurance-funding" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-insurance-funding"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={InsuranceFun} className="pro-image  " />
                  <p className="product-nav-link">Insurance Funding</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-project-funding" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-project-funding"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                    <img src={ProjectFun} className="pro-image"/>
                    <p className="product-nav-link">Project Funding</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-lease-rental-discounting" ? "product-nav-item  active-product" : "product-nav-item"}>                  
                <Link exact to="1-click-lease-rental-discounting"
                  onClick={() => { 
                    pname = location.pathname
                    }}><img src={LRD} className="pro-image " />                  
                    <p className="product-nav-link">Lease Rental Discount</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-supply-chain-financing" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-supply-chain-financing"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={SCF} className="pro-image " />                  
                  <p className="product-nav-link"> Supply Chain Financing</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-working-capital" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-working-capital"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={WorkingCap} className="pro-image " />
                  <p className="product-nav-link">Working Capital</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-collateral-free-msme" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-collateral-free-msme"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={CF} className="pro-image " />
                  <p className="product-nav-link">MSME/SME</p>
                  </Link>
                </li>

                <li className={click === "/products/skill-loan-Scheme" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="skill-loan-Scheme"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={HRm} className="pro-image" />
                  <p className="product-nav-link">Skill Loan Scheme</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-entertainment-and-production-financing" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link to="1-click-entertainment-and-production-financing"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={Production} className="pro-image " />
                  <p className="product-nav-link">Entmt & Production</p>
                  </Link>
                </li> 
               
                </Slider>   
    </ul>
    <Outlet />
   
    </div>
     
  )
}
export default Min
