import { useState, useEffect} from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
// import axios from "axios"
import Step1 from "./step1"
// import IndiaFirst from './indiaFirst logo.png'
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Step5 from "./step5"
import Next from './Next.png'
import Submit1 from './submit.png'
import Loader from "./otpstep"
import Swal from "sweetalert2"
import { AddWitness } from "./service"

function Insurance() {
  const [data, setdata] = useState('')
  const [data1, setdata1] = useState('')
  const [data2, setdata2] = useState('')
  const [step, setStep] = useState('step1')
  const [value1, setvalue1] = useState('')
  const [message, setMessage] = useState('')
  const [Mobile1, setmobile1] = useState('')
  const [active2, setactive2] = useState(false)
 const [otpStep, setOtpStep] = useState(false)
  const [active3, setactive3] = useState(false)
  const [active4, setactive4] = useState(false)
  const [active5, setactive5] = useState(false)
  const [modal, setModal] = useState(false)
  const [showOTp, setshowOTp] = useState(false)
  const [showWitness, setShowWitness] = useState(false)
  const [count, setCount] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [Step1Data, setStep1Data] = useState({})
  const [AdharData, setAdharData] = useState({})
  const [Token1, setToken1] = useState("")
  const [witnessDeatil, setwitnessDetail] = useState({})
 const [show, setShow] = useState(false)
     useEffect(() => {
    window.scrollTo(0, 0)
     }, [step])

     //function for preventing auto-relod
  const handleBeforeUnload = (e) => {
    e.preventDefault()
    const message =
      "Are you sure you want to leave? All provided data will be lost."
    e.returnValue = message
    return message
  }
   function getValue (value) {
    setShow(value)
   }

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])
  //modal
  function toggle() {
    setModal(!modal)
    if (modal === false) {
      setshowOTp(false)
    }
  }
    function AlertOtp(Token) {
      setOtpStep(false)
      Swal.fire({
        title: 'Adhaar Verification',
        html:'<div class="insurance-otp"> ' +
        '<input  autocomplete="off" class="swal2-input" id="otpData" maxlength="6"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        '</div>',
        focusConfirm: true,
        allowOutsideClick:false,
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off',
            type:'number'
          },
          
        preConfirm: () => {
          setOtpStep(true)
          const Otp = document.getElementById('otpData').value.toString()
          const otpData = JSON.stringify({
            otp: Otp,
            aadhaarNumber: data2
          })
          console.log(otpData)
          console.log(Token)
          setactive2(true)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Policy-Token' : Token},
              body: otpData
            }         
            fetch('https://indiafirstapi.1clickcapital.com/aadhaar/verifyotp/getdata', requestOptions)
            .then(
              function(response) {
                if (response.status !== 200) {
                  response.json().then(function(result) {
                    alert(result.message)
                    setOtpStep(false)
                    setStep('step1')
                  })
                  return
                }
                response.json().then(function(result) {
                  setAdharData(result)
                 setOtpStep(false)
                  console.log(result)
                  setStep('step2')
                })
              })
        }
      })
    }
    
    let MainMessage = ""
    function toCheckValid() {
      const Input = document.querySelectorAll('.test')
      let Value = false
       for (let i = 0; i < Input.length; i++) {
        if (Input[i].checkValidity()) {
          Input[1].value.length >= 10 && Input[2].value.length >= 12 ? Value = true  : Value = false
          // Value = true
        } else {
            MainMessage = MainMessage.concat(' ', Input[i].placeholder)
           return false
        }
       }
       return Value
    }
    function Submit () {
    const MyValue = JSON.stringify({
      policyNumber: data,
  mobileNumber: data1,
  aadhaarNumber: data2,
  companyName: "IndiaFirstLife"
    })
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: MyValue
      }
      setOtpStep(true)
      fetch('https://indiafirstapi.1clickcapital.com/policy/check', requestOptions)
      .then(
        function(response) {
          if (response.status !== 200) {
            response.json().then(function(result) {
              alert(result.policyCheck)
            })
            setOtpStep(false)
            return
          }
          response.text().then(function(data5) {
            console.log(data5)
            setToken1(data5)
            AlertOtp(data5)
          })
        })    
      }
    function toCheckEmpty () {
      if (data === "" || data1 === "" || data2 === "") {
        Swal.fire('All Fields are madatory')
      } else {
          const updatedObj = {
            policyNumber: "12345699",
            mobileNumber: "8976412394",
            aadhaarNumber: 660184035137,
            companyName: "IndiaFirstLife"
          }
          setStep1Data(updatedObj)
          toCheckValid() ? Submit() : alert('Please Enter Valid Detail')
      }
    }

 function witness1detail() {
  setShowWitness(!showWitness)
  setCount(count + 1)
 }
  function VerifyOtp () {
      const witness_otp = document.getElementById('witness1-otp').value 
      const MyValue = JSON.stringify({
       otp: witness_otp,
       aadhaarNumber: value1
         })
         const MyValue1 = JSON.stringify({
           aadhaarNumber: value1,
           relation: message,
           mobileNumber: Mobile1,
           remarks: "string"
         })
      setOtpStep(true)
      const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', 'Policy-Token' : Token1},
       body: MyValue 
     }
     fetch('https://indiafirstapi.1clickcapital.com/aadhaar/verifyotp/getdata', requestOptions)
     .then(
       function(response) {
         if (response.status !== 200) {
           alert(response.statusText)
           console.log(response.statusText)
           setOtpStep(false)
           toggle()
           return
         }
         response.json().then(function(result) {
          setOtpStep(false)
          setwitnessDetail(result.aadhaar)
          console.log(witnessDeatil)
          console.log(result)
          // witnessAddres = "".concat(witnessDeatil.house, " ", witnessDeatil.street, " ", witnessDeatil.postOfficeName, " ", witnessDeatil.district, " ", witnessDeatil.pincode, " ", witnessDeatil.state)
          witness1detail()
           toggle()
           AddWitness(MyValue1, Token1)
         })
       })
 }
  return (
    <div className="card">
        <div className="Insurance-step">{
      active2 ?  <p>You are At : {step}</p> : <></>
    }
      
      {
        active2 ? <div className="step step-active" id="1"><span className="line-step"></span></div> : <div className="step">1</div> 
       
      }
      {
       active3 ? <div className="step step-active" id="2" onClick={
        () => {
          if (active2 === true) {
            setStep('step2')
          }
        }}><span className="line-step"></span></div> : <div className="step">2</div>
      }
       {
       active4 ? <div className="step step-active" id="3" onClick={
        () => {
          if (active3 === true) {
            setStep('step3')
            document.getElementById('3').style.backgroundColor = "red"
          }
        }}><span className="line-step"></span></div> : <div className="step">3</div>
      }
       {
       active5 ? <div className="step step-active" id="4" onClick={
        () => {
          if (active4 === true) {
            setStep('step4')
          }
        }}><span className="line-step"></span></div> : <div className="step">4</div>
      }
      <div className="step" id="5"onClick={
        () => {
          if (active5 === true) {
            setStep('step5')
          }
        }}>5
      </div>
    </div>
    {(() => {
        switch (step) {
          case 'step1':
            return (
                <div style={{minHeight:"100vh", overflowY:"hidden"}}>
                   {
                  otpStep ? <Loader/> : <></>
                }
                 <h2 className="app-header" style={{letterSpacing:"1px"}}>IndiaFirst<span style={{color:"orange"}}>Life</span></h2>
                 {/* <img src={IndiaFirst} alt="" height={60} width={300}/> */}
                 {
               mobile ? <p className="mobile-toogle">Please enter the mobile number registered in your policy</p> : <></>
              }
              <div className="application-form" >
              <label htmlFor="policyNumber">Enter Policy  Number</label>
              <input className="input-insurance test" id="policyNumber" required value={data} maxLength={8} minLength={8}
               onChange={(event) => {
                const result = event.target.value.replace(/\D/g, '')
                setdata(result)
              }}></input>
             
              <label htmlFor="mobileNumber">Enter Mobile Number<br></br>(Registered with IndiaFirst)</label>
              <input  className="input-insurance test" minLength={10}  maxLength={10} id="mobileNumber" onFocus={() => { setMobile(true) }} onBlur={() => { setMobile(false) }}  placeholder="Please enter the mobile number registered in your policy" required style={{height: "30px"}}
              value={data1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setdata1(result1)
             }}></input>
              <label htmlFor="adharNumber">Enter Adhar Card Number</label>
              <input  className="input-insurance test" id="adharNumber" required maxLength={12} minLength={12} value={data2} placeholder="Adhar Number"
               onChange={(event) => {
                const result2 = event.target.value.replace(/\D/g, '')
                setdata2(result2)
              }}></input>
          </div>
                <img src={Submit1}  className="In-absolute-button" data-info="step1-button" onClick={() => {
                 toCheckEmpty()
                }}/>
                </div>
            )
          case 'step2':
            return (
                <> 
                {show ? <></> : <Step2 child={getValue} dataOfAdhar={AdharData} token={Token1}/>}
  <div>
        <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Witness Authentication</ModalHeader>
    <ModalBody>
    {
                  otpStep ? <Loader/> : <></>
                }
    <label>Adhar Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}}  value={value1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setvalue1(result1)
             }} id="witness1-adharnumber"></input>
       <label>Relationship with Assignor</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} value={message}
        onChange={(event) => {
          const result = event.target.value.replace(/[^a-z]/gi, '')
          setMessage(result)
        }}  id="witness1-relation"></input>
         <label>Mobile Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}} minLength={10} maxLength={10} value={Mobile1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setmobile1(result1)
             }} id="witness1-Mobilenumber"></input>
       {
        showOTp ? <div><label>Enter OTP</label><input className='spacing stop input-insurance'id="witness1-otp" type="number" minLength={6} maxLength={6}  style={{minHeight:"40px"}}></input></div> : <></>
       }
    </ModalBody>
    <ModalFooter>
      {
        showOTp ? <Button color="primary" onClick={() => { VerifyOtp() }}>Verify</Button> : <Button color="primary" onClick={() => { 
           if (value1 !== data2) {
            setOtpStep(true)
            const MyValue = JSON.stringify({
              aadhaarNumber: value1
                })
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', 'Policy-Token' : Token1},
                  body: MyValue 
                }
             fetch('https://indiafirstapi.1clickcapital.com/aadhaar/getotp', requestOptions)
             .then(
              function(response) {
                if (response.status !== 200) {
                  alert(response.statusText)
                  setOtpStep(false)
                  return
                }
                response.text().then(function(data5) {
                  console.log(data5)
                  setOtpStep(false)
                  setshowOTp(!showOTp)
                })
              })
           } else {
            alert('Witness and Assignor AdharNumber Should Not be Same')
          }
        }}>Request for OTP</Button>
      }
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  {/* <Modal isOpen={modal1} toggle={toggle1}>
    <ModalHeader toggle={toggle1}>Witness Authentication</ModalHeader>
    <ModalBody>
    <label>Adhar Number</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} id="witness2-adharnumber"value={value}
              onChange={(event) => {
               const result = event.target.value.replace(/\D/g, '')
               setvalue(result)
             }}></input>
       <label>Relationship with Assignor</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} 
       value={message1}
       onChange={(event) => {
         const result = event.target.value.replace(/[^a-z]/gi, '')
         setMessage1(result)
       }} id="witness2-relation"></input>
        <label>Mobile Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}}  value={Mobile2}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setmobile2(result1)
             }} id="witness2-Mobilenumber"></input>
       {
        showOTp1 ? <div><label>Enter OTP</label><input className='spacing stop input-insurance' style={{minHeight:"40px"}}></input> </div> : <></>
       }
    </ModalBody>
    <ModalFooter>
      {
        showOTp1 ? <Button color="primary" onClick={() => { witness2detail(); toggle1() }}>Verify</Button> : <Button color="primary" onClick={() => setshowOTp1(!showOTp1)}>Request for OTP</Button>
      }
      <Button color="secondary" onClick={toggle1}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal> */}
</div>

{
  showWitness ? <section  className='witness-detail'>
  <h2 className="app-header">Witness1 Detail</h2> 
  <div className="personal-detail">
 <div className="app-form-input">
   <label>Name of Witness</label>
   <label>{witnessDeatil.name}</label>
 
   </div>
   <div className="app-form-input">
   <label>Relationship with Assignor</label>
   <label id="witness1-relation-detail">{message}</label>
 
   </div>
   <div className="app-form-input">
   <label>Mobile Number</label>
   <label>{Mobile1}</label>
 
   </div>
   <div className="app-form-input">
   <label>Adhar Number</label>
   <label id="witness1-adhar-detail">{value1}</label>
 
   </div>
   <div className="app-form-input">
   <label>Address</label>
   <label>{ "".concat(witnessDeatil.house, " ", witnessDeatil.street, " ", witnessDeatil.postOfficeName, " ", witnessDeatil.district, " ", witnessDeatil.pincode, " ", witnessDeatil.state)}</label>
   </div>
   </div>
   </section> : <button className="witness-button" style={show ? {display:"block"} : {display:"none"}} onClick={toggle}>Click here to fill witness1 detail</button>
}
 {/* {
  showWitness2 ? <section className='witness-detail'>
  <h2 className="app-header">Witness2 Detail</h2> 
  <div className="personal-detail">
 <div className="app-form-input">
   <label>Name of Witness</label>
   <label>Nitesh Kumar</label>
 
   </div>
   <div className="app-form-input">
   <label>Relationship with Assignor</label>
   <label id="witness2-relation-detail">{witness2Detail.Relation}</label>
 
   </div>
   <div className="app-form-input">
   <label>Mobile Number</label>
   <label>{witness2Detail.MobileNumber}</label>
 
   </div>
   <div className="app-form-input">
   <label>Adhar Number</label>
   <label id="witness2-adhar-detail">{witness2Detail.AdharNumber}</label>
   </div>
   <div className="app-form-input">
   <label>Address</label>
   <label>Powai</label>
   </div>
   </div>
   
   </section> : <button className="witness-button" style={show ? {display:"block"} : {display:"none"}} onClick={toggle1}>Click here to fill witness2 detail</button>
}      */}
{
     count === 1 ?  <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step3'); setactive3(true) }}/> : <></>
   }
                </>
            )
          case 'step3': 
            return (
                <><Step3 Token={Token1}/>
                <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step4'); setactive4(true) }}/>
                </>
            )
          case 'step4':
            return (
                <><Step4 Token={Token1}/>
                <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step5'); setactive5(true) }}/>
                </>
            )
            case 'step5':
            return <Step5 token={Token1}/>
          default:
            return <Step1/>
        }
      })()}
   </div>
 )
}
 export default Insurance