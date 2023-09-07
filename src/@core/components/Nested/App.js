// import "./App.css";
import ProductNAv from './components/index'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Payroll from './components/Payroll'
import CF from './components/Collateral'
import ProjectFun from './components/Project'
import InsuranceFun from './components/Insurance'
import LRD from './components/LRD'
import WorkingCap from './components/Workingcapital'
import SCF from './components/SCFiance'
import HRm from './components/HRMS'
import Production from './components/Entertement'
import SalaryAdv1 from './components/SalaryAdvance'

function App() {
  return (
    <>
    <BrowserRouter>
      <ProductNAv />
      <Routes>
          <Route path='/payroll' element={<Payroll/>} />
          <Route path='/cf' element={<CF/>} />
          <Route path='/projectfun' element={<ProjectFun/>} />
          <Route path='/insurancefun' element={<InsuranceFun/>} />
          <Route path='/lrd' element={<LRD/>} />
          <Route path='/workingcap' element={<WorkingCap/>} />
          <Route path='/scf' element={<SCF/>} />
          <Route path='/hrm' element={<HRm/>} />
          <Route path='/production' element={<Production/>} />
          <Route path='/salaryadv' element={<SalaryAdv1/>} />
      </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App