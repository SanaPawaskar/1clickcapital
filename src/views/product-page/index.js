import {React, Component} from "react"
import SecondPage from "../../@core/components/Nested/components/index"
import Collabtionanimation from "../../@core/components/Nested/components/min"
import Footer from "../../pages/Footer/Footer"
export default class Product extends Component {
 
  constructor(props) {
  
     super(props)
     const width = window.innerWidth
     this.state = {}
     if (width > 600) {
       this.state.renderComponent = (
        <>
        <SecondPage/>
        <Footer/>
        </>
        
       )
     } else {
       this.state.renderComponent = (
        <>
        <Collabtionanimation/>
        <Footer/>
        </>
        
       )
     }
   }

  render() {
    return this.state.renderComponent
  }

}
