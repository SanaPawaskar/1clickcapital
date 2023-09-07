// import React, { useState} from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import './navprodd.css'

// const options = [
//     {
//         id:1,
//         cname:"1 Click",
//         name:"Payroll",
//         path:"/product/1-click-payroll"
//     },
//     {
//         id:2,
//         cname:"1 Click",
//         name:"Salary Advance",
//         path:"/product/1-click-salary-advance"
//     },
//     {
//         id:3,
//         cname:"1 Click",
//         name:"Insurance Funding",
//         path:"/product/1-click-insurance-funding"
//     },  
//     {
//         id:4,
//         cname:"1 Click",
//         name:"Project Funding",
//         path:"/product/1-click-project-funding"
//     },  
//     {
//         id:5,
//         cname:"1 Click",
//         name:"L.R.D",
//         path:"/product/1-click-lease-rental-discounting"
//     },  
//     {
//         id:6,
//         cname:"1 Click",
//         name:"Supply Chain Finance",
//         path:"/product/1-click-supply-chain-financing"
//     },  
//     {
//         id:7,
//         cname:"1 Click",
//         name:"Working Capital",
//         path:"/product/1-click-working-capital"
//     },  
//     {
//         id:8,
//         cname:"1 Click",
//         name:"Collateral Free MSME/SME Loan",
//         path:"/product/1-click-collateral-free-msme"
//     },  
//     {
//         id:9,
//         cname:"1 Click",
//         name:"H.R Management Systems",
//         path:"/product/1-click-human-resources-management-systems"
//     },  
//     {
//         id:10,
//         cname:"1 Click",
//         name:"Entertainment & Production Financing",
//         path:"/product/1-click-entertainment-and-production-financing"
//     }       
// ]
// function Navprodd() {
//     // const [isActive, setIsActive] = useState(false)
//     const [click, setClick] = useState(false)

//   const handleClick = () => setClick(!click)
//   return (
//     <div className='Navhmtitle'>
//         <div className="Navhm-dd-title"><NavLink
//                 exact
//                 to="/product/1-click-payroll"
//                 className="navhm-links"
//                 onClick={handleClick}
//               >
//               Product
//               </NavLink></div>
//         {/* {isActive && ( */}
//         <div className='Navhm-dd-data'>
//             {options.map((option) => (
//                <div 
//                className='Navhm-dd-item'key ={option.id}>
//                <span className='itemhm-cname'><Link
//                exact
//                to={option.path}
//              >{option.cname}</Link>
//              </span>
//              <span className='itemhm-name'><Link
//                exact
//                to={option.path}
//              >{option.name}</Link></span>
//             </div>
//             ))}
//         </div>
//         {/* )} */}
//     </div>
//   )
// }

// export default Navprodd
