import React, { useEffect } from "react"
import './style.css'
 function Loader () {
    useEffect(() => {
        window.scrollTo(0, 0)
         }, [])
    return (
        <>
        <div className="parent-loader">
      <h2>Please Wait a Minute</h2>
           <span className="loader-circle">
            <span className="loader-circle1" >
            </span>
           </span>
        </div>
        </>
    )
 }
 export default Loader