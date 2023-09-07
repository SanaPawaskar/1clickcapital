import Product from "../pages/Product/index"
import Feature from "../pages/feature/Featuresanimation"
// import About from "../pages/about/index"
import Award from "../pages/Award/Award"
import Collab from "../pages/Collab/index"
import Stats from "../pages/stats/index"
import MainPage from "../pages/MainPage/index"
import Footer from "../pages/Footer/Footer"
import Marqueee from "../@core/components/marquee"
import Register from "../@core/components/Registration/Register2"
// import Ball from "../@core/components/ball"

// import RippleButton from "../@core/components/ripple-button/index"
const Home = () => {
  return (
   <>
    <helmet>
   <title>Apply for Unsecured Business Loan in Mumbai | 1 Click Capital </title>
    <meta name="description" content="1 Click Capital your unsecured business loan partner providing you payroll funding or payroll financing. Limited Paperwork along with 24 x 7 Utilization. "/>
    <meta name="keywords" content=" payroll financing, payroll funding, unsecured business loan, collateral free business loan, business loan in mumbai, msme business loan, working capital loan"/>
    <link rel="canonical" href="https://1clickcapital.com"/>
    <link href="/fonts/futura-md-bt.css" rel="stylesheet"/>
   </helmet>
   <MainPage/>
   <Register/>
   <Product/>
   <Feature/>
   <Award/>
   <Collab/>
   <Stats/>
   <Marqueee/>
   <Footer/>
   </>
  )
}

export default Home
