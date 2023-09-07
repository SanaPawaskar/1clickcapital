
import React, {useState} from "react"
import './style.css'

// import  OTP from './submit.png'
// import Swal from "sweetalert2"
// import { useNavigate } from "react-router-dom"
   function Step1 ({Data}) {
  const [data, setdata] = useState('')
  const [data1, setdata1] = useState('')
  const [data2, setdata2] = useState('')
   const [Step1Data, setStep1Data] = useState({
    Adhar:"",
    Mobile:"",
    Capt:"",
    PNumber:""
   })
    const AdharNumber = document.getElementById('adharNumber').value
    const PolicyNumber = document.getElementById('policyNumber').value
    const Captcha = document.getElementById('captcha').value
    const MobileNumber = document.getElementById('mobileNumber').value
    setStep1Data(existingValues => ({
      ...existingValues,
      Adhar:AdharNumber,
      Mobile:MobileNumber,
      Capt:Captcha,
      PNumber:PolicyNumber
    })) 
   Data(Step1Data)
   
    return (
        <>
          <div className="application-form" >
               <label>Select Company Name</label>
               <select>
                <option value="India First">India First</option>
               </select>
              <label>Enter Policy  Number</label>
              <input className="input-insurance" id="policyNumber" value={data}
               onChange={(event) => {
                const result = event.target.value.replace(/\D/g, '')
                setdata(result)
              }}></input>
              <label>Enter Mobile Number<br></br>(Registered with IndiaFirst)</label>
              <input  className="input-insurance" maxLength={11} id="mobileNumber" style={{height: "30px"}}
              value={data1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setdata1(result1)
             }}></input>
              <label>Enter Adhar Card Number</label>
              <input  className="input-insurance" id="adharNumber" maxLength={12} value={data2}
               onChange={(event) => {
                const result2 = event.target.value.replace(/\D/g, '')
                setdata2(result2)
              }}></input>
          <label>12345</label>
          <input  className="input-insurance" id="captcha" placeholder="enter captcha"></input>
          </div>
          {/* <img  src={OTP} className="otp-button" onClick={AlertOtp}/> */}
        </>
    )
   }
 
   export default Step1