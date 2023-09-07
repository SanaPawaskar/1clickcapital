import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navdd.css'

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
        name:"Supply Chain Finance",
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
        name:"Collateral Free MSME/SME Loan",
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
function Navdd() {
    const [isActive, setIsActive] = useState(false)
    const path = window.location.pathname
  return (
    <div className='Navtitle' 
    onMouseEnter={() => setIsActive(true)} 
    onMouseLeave={() => setIsActive(false)}
    onClick={() => setIsActive(false)}
    >
        <div className="Nav-dd-title nav-item"><NavLink
                exact
                to="/products/1-click-payroll"             
                 activeClassName="active"
                className={path.includes('/products') ? "nav-links active" : "nav-links"}
              >
              Product
              </NavLink></div>
        {isActive && (
    
        <div className='hover-data'>
            {options.map((option) => (
               <div 
               className='Nav-dd-item'key ={option.id}>
               <span className='item-cname'><Link
               exact
               to={option.path}
             >{option.cname}</Link>
             </span>
             <span className='item-name'><Link
               exact
               to={option.path}
             >{option.name}</Link></span>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default Navdd
