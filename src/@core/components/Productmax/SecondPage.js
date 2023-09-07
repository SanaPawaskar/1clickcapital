// import React, { useState } from "react"
// import {Routes, Route, useNavigate, NavLink} from 'react-router-dom'
// import Vect1 from "./Vector (1).png"
// import Vect2 from "./Group 24bag tick.png"
// import Vect from "./Vector.png"
// import PayrollIMG from "./Payroll.png"
// import CF from "./CF.png"
// import ProjectFun from "./ProjectFun.png"
// import InsuranceFun from "./InsuranceFun.png"
// import LRD from "./LRD.png"
// import WorkingCap from "./WorkingCap.png"
// import SCF from "./SCF.png"
// import HRm from "./HRm.png"
// import Production from "./production logo-01 1entertainment ptod.png"
// import "./Secondpage.css"
// import Button from "../button/Button"
// import Payroll1 from "./Payroll"
// import SalaryAdv1 from "./Salaryadv"
// function SecondPage() {
//   const navigate = useNavigate()
//   // const Payroll = () => {
//   //   navigate('/Payroll')
//   // }
//   const SalaryAdv = () => {
//     navigate('/Salaryadv')
//   }
//   const Insurance = () => {
//     navigate('/contacts')
//   }

//   const ProjectFun = () => {
//     navigate('/')
//   }
//   const LRD = () => {
//     navigate('/contacts')
//   }

//   const SupplyChain = () => {
//     navigate('/')
//   }
//   const WorkingCap = () => {
//     navigate('/contacts')
//   }

//   const HRM = () => {
//     navigate('/')
//   }
//   const Entm = () => {
//     navigate('/contacts')
//   }
//   const handleClick = () => setClick(!click)
 
//   const [showtab, setShowtab] = useState(1)

//   const handletab = (e) => {
//     setShowtab(e)
//   }
//   return (
//     <div className="card1">
//       <Button/>
//       <React.Fragment>
//         <div className="card2">
//           <div className="row">
//             <div className="col ">
//               <ul class="cntnv" id="pills-tab" role="tablist">
//                 <div className="colofnavbar me-1 "><NavLink
//                 exact
//                 to="/Payroll"
//                 onClick={handleClick}
//               >
//               </NavLink>
//                   <img src={PayrollIMG} className="pro-image" />
//                   <li role="presentation">
//                     <span className={showtab === 1 ? "nav-link-active" : "pll"}>
//                       Payroll{" "}
//                     </span>
//                   </li>
//                 </div>

//                <div className="colofnavbar me-1" onClick={SalaryAdv}>
//                   <img src={SalaryAdv} className="pro-image" />
//                   <li role="presentation">
//                     <span className={showtab === 2 ? "nav-link-active" : "pll"}>
//                       Salary Advance
//                     </span>
//                   </li>
//                 </div>

//                <a href="#Insurance"><div className="colofnavbar me-1" onClick={() => handletab(3)}>
//                   <img src={InsuranceFun} className="pro-image  " />
//                   <li role="presentation">
//                     <span className={showtab === 3 ? "nav-link-active" : "pll"}>
//                       Insurance Funding
//                     </span>
//                   </li>
//                 </div></a> 

//                <a href="#Project-funding"> <div className="colofnavbar me-1" onClick={() => handletab(4)}>
//                   <img src={ProjectFun} className="pro-image  " />
//                   <li role="presentation">
//                     <span className={showtab === 4 ? "nav-link-active" : "pll"}>
//                       Project Funding
//                     </span>
//                   </li>
//                 </div></a>

//                 <a href="#LRD"><div className="colofnavbar me-1" onClick={() => handletab(5)}>
//                   <img src={LRD} className="pro-image " />
//                   <li role="presentation">
//                     <span className={showtab === 5 ? "nav-link-active" : "pll"}>
//                       LRD
//                     </span>
//                   </li>
//                 </div></a>

//                 <a href="#Supply-Chain"><div className="colofnavbar me-1" onClick={() => handletab(6)}>
//                   <img src={SCF} className="pro-image " />
//                   <li role="presentation">
//                     <span className={showtab === 6 ? "nav-link-active" : "pll"}>
//                       Supply Chain <br></br>Financing
//                     </span>
//                   </li>
//                 </div></a>
//                <a href="#Working-Capital">
//                 <div className="colofnavbar me-1" onClick={() => handletab(7)}>
//                   <img src={WorkingCap} className="pro-image " />
//                   <li role="presentation">
//                     <span className={showtab === 7 ? "nav-link-active" : "pll"}>
//                       Working Cap
//                     </span>
//                   </li>
//                 </div></a>
//    <a href="#Collateral">
//                 <div className="colofnavbar me-1" onClick={() => handletab(8)}>
//                   <img src={CF} className="pro-image " />
//                   <li role="presentation">
//                     <span className={showtab === 8 ? "nav-link-active" : "pll"}>
//                       MSME/SME
//                     </span>
//                   </li>
//                 </div></a>

//                 <a href="#HRM">
//                 <div className="colofnavbar me-1" onClick={() => handletab(9)}>
//                   <img src={HRm} className="pro-image" />
//                   <li role="presentation">
//                     <span className={showtab === 9 ? "nav-link-active" : "pll"}>
//                       HRMS
//                     </span>
//                   </li>
//                 </div>
//                 </a>

//                 <a href="#entm">
//                 <div className="colofnavbar me-1" onClick={() => handletab(10)}>
//                   <img src={Production} className="pro-image " />
//                   <li role="presentation">
//                     <span
//                       className={showtab === 10 ? "nav-link-active" : "pll"}
//                     >
//                       Entmt &<br></br> Production
//                     </span>
//                   </li>
//                 </div></a>
//               </ul>
//               <Routes>
//           <Route path="/Payroll" element={<Payroll1/>} />
//           <Route path="/Salaryadv" element={<SalaryAdv1/>} />
//         </Routes>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     </div>
//   )
// }
// export default SecondPage
