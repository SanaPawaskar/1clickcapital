import {React, useState, useRef, useEffect} from 'react'
import './sidemenu.css'
import HamReg from '../../Registration/hamnav'
import * as AiIcons from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom"
import './navprodd.css'
import Bars from './Group 213.png'
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
const Sidebar = () => {
  const options = [
    {
        id:1,
        cname:"1 Click",
        name:"Payroll Financing",
        path:"/products/1-click-payroll"
    },
    {
        id:2,
        cname:"1 Click",
        name:"Salary Advance",
        path:"/products/1-click-salary-advance"
    },
    {
        id:3,
        cname:"1 Click",
        name:"Retail",
        path:"/products/retail-loans"
        
    },  
    {
        id:4,
        cname:"1 Click",
        name:"Skill Loan Scheme",
        path:"/products/skill-loan-Scheme"
      
    },  
    {
        id:5,
        cname:"1 Click",
        name:"L.R.D",
        path:"/products/1-click-lease-rental-discounting"
    },  
    {
        id:6,
        cname:"1 Click",
        name:"Supply Chain Funding",
        path:"/products/1-click-supply-chain-financing"
    },  
    {
        id:7,
        cname:"1 Click",
        name:"Working Capital",
        path:"/products/1-click-working-capital"
    },  
    {
        id:8,
        cname:"1 Click",
        name:"Collateral Free MSME Loan",
        path:"/products/1-click-collateral-free-msme"
    },  
    {
        id:9,
        cname:"1 Click",
        name:"Project Funding",
        path:"/products/1-click-project-funding"
    },  
    {
        id:10,
        cname:"1 Click",
        name:"Entertainment & Production Financing",
        path:"/products/1-click-entertainment-and-production-financing"
    },
    {
      id:11,
      cname:"1 Click",
      name:"Insurance Funding",
      path:"/products/1-click-insurance-funding"
  }      
]
const ref = useRef()
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)
useOnClickOutside(ref, () => setSidebar(false))
  // const [isclicked, setClicked] = useState(false)
  // const ref1 = useRef()
  // function handleClicked () {
  //   setClicked(!isclicked)
  //   ref1.current.style.rotate = (isActive ? "none" : "180deg")
  // }
 

  // const [click, setClick] = useState(false)
  // //  const handleClick = () => setClick(!click)
  // const [show, setShow] = useState(false)
  // function handleClick() {
  //   setClick(!click)
  //   setShow(!show)
  // }
 
  return (
    <div onClick={showSidebar} >
      <img src={Bars} className='bm-burger-button' onClick={showSidebar} alt="HamburgerBars"/>
      <div className={sidebar ? 'side-menu active' : 'side-menu'} ref={ref}>
      {/* <AiIcons.AiOutlineClose className='bm-burger-button-close' onClick={showSidebar}/> */}
            <div>
              <NavLink
              className="menu-item"
                exact
                to="/"
                activeClassName="active"
                onClick={ showSidebar }
              >
                Home
              </NavLink>
            <div className="Navhmtitle"
              >
                <NavLink
                  exact
                  to="#"
                  className="Navhm-dd-title">
                  Product
                </NavLink>
                <div className='Navhm-dd-data'>
                  {options.map((option) => (
                    <div className='Navhm-dd-item'key ={option.id}>
                      <span className='itemhm-name' onClick={ showSidebar }>
                        <Link
                          exact
                          to={option.path}>
                            {option.name}
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
            </div>
              <NavLink
              className="menu-item"
                exact
                to="/blogs"
                activeClassName="active"
                onClick={ showSidebar }
              >
                Blogs
              </NavLink>
              <NavLink
              className="menu-item"
                exact
                to="/career"
                activeClassName="active"
                onClick={ showSidebar }
              >
                Career
              </NavLink>
              <NavLink
              className="menu-item"
                exact
                to="/about-us"
                activeClassName="active"
                onClick={ showSidebar }
              >
                About us
              </NavLink>
              <NavLink
              className="menu-item"
                exact
                to="/contact-us"
                activeClassName="active"
                onClick={ showSidebar }
              >
                Contact us
              </NavLink>
              <a className="menu-item" href="https://www.1clickcapital.com/portal/login.php" onClick={ showSidebar }>Login</a>
              <HamReg onClick={ showSidebar }/>
            </div>
            </div>
    </div> 
  )
}
export default Sidebar