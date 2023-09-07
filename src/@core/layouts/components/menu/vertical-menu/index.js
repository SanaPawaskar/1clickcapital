// // ** React Imports
// import { Fragment, useState, useRef } from "react"

// // ** Third Party Components
// import classnames from "classnames"
// import PerfectScrollbar from "react-perfect-scrollbar"

// // ** Vertical Menu Components
// import VerticalMenuHeader from "./VerticalMenuHeader"
// import VerticalNavMenuItems from "./VerticalNavMenuItems"

// const Sidebar = (props) => {
//   // ** Props
//   const { menuCollapsed, menu, skin, menuData } = props

//   // ** States
//   const [groupOpen, setGroupOpen] = useState([])
//   const [groupActive, setGroupActive] = useState([])
//   const [currentActiveGroup, setCurrentActiveGroup] = useState([])
//   const [activeItem, setActiveItem] = useState(null)

//   // ** Menu Hover State
//   const [menuHover, setMenuHover] = useState(false)

//   // ** Ref
//   const shadowRef = useRef(null)

//   // ** Function to handle Mouse Enter
//   const onMouseEnter = () => {
//     setMenuHover(true)
//   }


//   // ** Scroll Menu
//   const scrollMenu = (container) => {
//     if (shadowRef && container.scrollTop > 0) {
//       if (!shadowRef.current.classList.contains("d-block")) {
//         shadowRef.current.classList.add("d-block")
//       }
//     } else {
//       if (shadowRef.current.classList.contains("d-block")) {
//         shadowRef.current.classList.remove("d-block")
//       }
//     }
//   }

//   return (
//     <Fragment>
//       <div
//         className={classnames(
//           "main-menu menu-fixed menu-accordion menu-shadow",
//           {
//             expanded: menuHover || menuCollapsed === false,
//             "menu-light": skin !== "semi-dark" && skin !== "dark",
//             "menu-dark": skin === "semi-dark" || skin === "dark"
//           }
//         )}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={() => setMenuHover(false)}
//       >
//         {menu ? (
//           menu({ ...props })
//         ) : (
//           <Fragment>
//             {/* Vertical Menu Header */}
//             <VerticalMenuHeader
//               setGroupOpen={setGroupOpen}
//               menuHover={menuHover}
//               {...props}
//             />
//             {/* Vertical Menu Header Shadow */}
//             <div ref={shadowRef}></div>
//             {/* Perfect Scrollbar */}
//             <PerfectScrollbar
//               className="main-menu-content"
//               options={{ wheelPropagation: false }}
//               onScrollY={(container) => scrollMenu(container)}
//             >
//               <ul>
//                 <VerticalNavMenuItems
//                   items={menuData}
//                   menuData={menuData}
//                   menuHover={menuHover}
//                   groupOpen={groupOpen}
//                   activeItem={activeItem}
//                   groupActive={groupActive}
//                   setGroupOpen={setGroupOpen}
//                   menuCollapsed={menuCollapsed}
//                   setActiveItem={setActiveItem}
//                   setGroupActive={setGroupActive}
//                   currentActiveGroup={currentActiveGroup}
//                   setCurrentActiveGroup={setCurrentActiveGroup}
//                 />
//               </ul>
//             </PerfectScrollbar>
//           </Fragment>
//         )}
//       </div>
//     </Fragment>
//   )
// }

// export default Sidebar

// ** Horizontal Menu Components
import React from "react"
import HorizontalNavMenuItems from "../horizontal-menu/HorizontalNavMenuItems"
import './style.css'
// import { gsap } from "gsap"
// import svg from './Logo CIRCLE (1).svg'
// import Button from "../../../../components/button/Button"
// const {useLayoutEffect, useRef } = React
const verticalNav = ({menuData}) => {
  // const app = useRef()
  //  useLayoutEffect(() => {
  //    const ctx = gsap.context(() => {
  //      gsap.fromTo(".navsvg", { x:"-600"}, {x:"-335"})
  //    }, app)
  //    return () => ctx.revert()
  //  })
  return (
    <div>
      <ul>
      {/* <img   src={svg} className="navsvg" alt="jaffar"/> */}
        <HorizontalNavMenuItems submenu={false} items={menuData} />
      </ul>
    </div>
  )
}

export default verticalNav 
