import {React} from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import PayrollIMG from "./Payroll.png"
import SalaryAdv from "./SalaryAdv.png"
import CF from "./CF.png"
// import Button from "../../button/Button"
import ProjectFun from "./ProjectFun.png"
import InsuranceFun from "./InsuranceFun.png"
import LRD from "./LRD.png"
import WorkingCap from "./WorkingCap.png"
import SCF from "./SCF.png"
import ScrollToTop from "../../../../scroltop"
import HRm from "./HRm.png"
import Retail from "./Retail.png"
// import { options } from './Navdd'
import Production from "./production logo-01 1entertainment ptod.png"
import "./Secondpage.css"
function SecondPage() {
//   useEffect(() => {
    
//     const element = document.getElementById('product')
//       // 👇 Will scroll smoothly to the top of the next section
//       element.scrollIntoView({ behavior: 'smooth' })
  
// }, [])
    const location = useLocation()
    let pname = location.pathname
    const click = pname
  return (
  
   
    <div className="card" id="product">
  
    <ul className="product-nav-menu">
                <li className={click === "/products/1-click-payroll" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-payroll" 
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={PayrollIMG} className="pro-image" alt="1-Click-Payroll-Financing"/>
                    <p className="product-nav-link">Payroll Financing</p>
                  </Link>
                </li>
                <li className={click === "/products/1-click-salary-advance" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-salary-advance"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={SalaryAdv} className="pro-image"  alt="1-Click-Salary-Advance"/>
                  <p className="product-nav-link">Salary Advance</p>
                  </Link>
                </li>
                <li className={click === "/products/retail-loans" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link to="retail-loans"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={Retail} className="pro-image "  alt="1-Click-Entertainment-and-Production-Financing"/>
                  <p className="product-nav-link">Retail</p>
                  </Link>
                </li>  
                <li className={click === "/products/skill-loan-Scheme" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="skill-loan-Scheme"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={HRm} className="pro-image"  alt="1-Click-Human-Resource-Management-System"/>
                  <p className="product-nav-link">Skill Loan Scheme</p>
                  </Link>
                </li>
                <li className={click === "/products/1-click-insurance-funding" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-insurance-funding"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={InsuranceFun} className="pro-image  "  alt="1-Click-Insurance-funding"/>
                  <p className="product-nav-link">Insurance Funding</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-project-funding" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-project-funding"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                    <img src={ProjectFun} className="pro-image"  alt="1-Click-Project-Funding"/>
                    <p className="product-nav-link">Project Funding</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-lease-rental-discounting" ? "product-nav-item  active-product" : "product-nav-item"}>                  
                <Link exact to="1-click-lease-rental-discounting"
                  onClick={() => { 
                    pname = location.pathname
                    }}><img src={LRD} className="pro-image "  alt="1-Click-Lease-Rental-Discounting"/>                  
                    <p className="product-nav-link">L.R.D</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-supply-chain-financing" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-supply-chain-financing"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={SCF} className="pro-image "  alt="1-Click-Supply-Chain-Financing"/>                  
                  <p className="product-nav-link">Supply Chain Financing</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-working-capital" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-working-capital"
                  onClick={() => { 
                    pname = location.pathname 
                    }}>
                  <img src={WorkingCap} className="pro-image "  alt="1-Click-Working-Capital"/>
                  <p className="product-nav-link">Working Capital</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-collateral-free-msme" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link exact to="1-click-collateral-free-msme"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={CF} className="pro-image "  alt="1-Click-Collateral-Free-MSME/SME"/>
                  <p className="product-nav-link">MSME/SME</p>
                  </Link>
                </li>

                <li className={click === "/products/1-click-entertainment-and-production-financing" ? "product-nav-item  active-product" : "product-nav-item"}>
                <Link to="1-click-entertainment-and-production-financing"
                  onClick={() => { 
                    pname = location.pathname
                    }}>
                  <img src={Production} className="pro-image "  alt="1-Click-Entertainment-and-Production-Financing"/>
                  <p className="product-nav-link">Entmt & Production</p>
                  </Link>
                </li>    
                  
    </ul>
    
    <Outlet />
     
     </div>
  )
}
export default SecondPage
