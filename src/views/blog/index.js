

import Footer from "../../pages/Footer/Footer"
import "./style.css"
import Content from "./main/main"
import Search from './search/index'
import { useState } from "react"
import Register from "../../@core/components/Registration"

function Blog () {
   const [show, setShow] = useState(true)
    function getValue(value) {
     setShow(!value)
    }
    return (
      <>
      <Register/>
      <div className="blog card">
        <section className="search-calendar">
        <Search getValue={getValue}/>
        </section>
         <section className="main">{
          (show ?  <></> : <Content/>)
         }
         </section>
        
      </div>
      <Footer/>
      </>
    )
  }

export default Blog
