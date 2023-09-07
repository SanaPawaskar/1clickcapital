
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import React, {useState} from 'react'
import Loader from './otpstep'
import Swal from 'sweetalert2'
function Step2(props) {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [value, setvalue] = useState('')
  const [otpStep, setOtpStep] = useState(false)

  const [enterData, setEnterData] = useState({
    pname:"",
    email:"",
    pancard:"",
    current:"",
    tenure:"",
    emi:"",
    bankHolderName:"",
    AccountNumber:"",
    Ifsc:""

  })
  
 const AssignorDetail = props.dataOfAdhar
 const AdharDetail = AssignorDetail.aadhaar
 const PolicyDetail = AssignorDetail.policy
  const Addres = "".concat(AdharDetail.house, " ", AdharDetail.street, " ", AdharDetail.postOfficeName, " ", AdharDetail.district, " ", AdharDetail.pincode, " ", AdharDetail.state)
  console.log(AssignorDetail)
  function ValidatePAN() {
    const txtPANCard = document.getElementById("pancard")
    const regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
    if (regex.test(txtPANCard.value.toUpperCase())) {
        return true
    } else {
        return false
    }
}
  function callEmi () {
    const Stenure = document.getElementById('tenure').value
    const z = parseInt(Stenure)
    const LoanAmount = document.getElementById('Loan-amount').innerText
    const y = parseInt(LoanAmount)
      const Roi = 0.01 * Stenure * y
      const Proc_fee = 0.03 * y
          const EMI = (y + Roi + Proc_fee) / z
     document.getElementById('Emi').innerText = EMI
  }
  function storePolicy () {
    setOtpStep(true)
    const data = JSON.stringify({
      currentAddress: enterData.current,
      title: document.getElementById('gender-title').value,
      panNumber: enterData.pancard.toUpperCase(),
      tenure: enterData.tenure,
      bankDetails: {
        accountHolderName: enterData.bankHolderName,
        accountNumber: enterData.AccountNumber.toString(),
        ifscCode: enterData.Ifsc
      }
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Policy-Token' : props.token},
      body: data
    }         
    fetch('https://indiafirstapi.1clickcapital.com/policy/storePolicyDetails', requestOptions)
    .then(
      function(response) {
        if (response.status !== 200) {
          response.json().then(function(result) {
            alert(result.message)
          })
          setOtpStep(false)
          return
        }
        response.json().then(function(result) {
         setOtpStep(false)
          console.log(result)
          props.child(true)
        })
      })
  }
  const toggle = () => setModal(!modal)
  function CopyAddress() {
    const ref1 = document.getElementById('per-add')
    const ref2 = document.getElementById('check')
    const ref3 = document.getElementById('cur-add')
    if (ref2.checked) {
      ref3.value = ref1.innerHTML 
    } else {
      ref3.value = ""
    }
   }

    function getNewData () {
      setEnterData({...enterData,
        pname:document.getElementById('pname').innerText,
        email:document.getElementById('email').value,
        pancard:document.getElementById('pancard').value,
        current:document.getElementById('cur-add').value,
        tenure:document.getElementById('tenure').value,
        emi:document.getElementById('Emi').innerText,
        bankHolderName:message,
        AccountNumber:value,
        Ifsc:document.getElementById('ifsc').value
      })
  }
    return (
        <>
              {
                  otpStep ? <Loader/> : <></>
                }
           <h2 className="app-header" style={{letterSpacing:"1px"}}>IndiaFirst<span style={{color:"orange"}}>Life</span>&nbsp;Insurance Funding</h2>
          <h3 className="app-header">Personal Detail</h3>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Holder Name</label>
           <label id='pname'>{AssignorDetail.aadhaar.name}</label>
            </div>
            <div className="app-form-input">
           <label>Email</label>
           <input className="input-insurance" id='email' type="email"></input>
           </div>
           <div className="app-form-input">
           <label>Select Gender Title</label>
           <select id='gender-title'>
            <option value="Mr">Mr</option>
            <option value="Mx">Mx</option>
            <option value="Mrs">Mrs</option>
            <option value="Mrs">Miss</option>
          </select>
           </div>
           <div className="app-form-input">
           <label>Pan Card</label>
           <input className="input-insurance" name='txtPANCard' id='pancard' minLength={10} maxLength={10} onChange={() => {
            document.getElementById('pancard').value.toUpperCase()
           }} style={{textTransform: "uppercase"}}></input>
           </div>
           <div className="app-form-input">
           <label>Adhar Card</label>
           <label>660184035137</label>
           </div>
           <div className="app-form-input">
           <label>Current Addres</label>
           <textarea id='cur-add' className="input-insurance"></textarea>
           <span><input type="checkbox" id='check'  onChange={CopyAddress} />Same as Permanent Address</span>
           </div>
           <div className="app-form-input">
           <label>Permanent Addres</label>
           <label id='per-add' >{Addres}</label>
           </div>
          </div>
          <h2 className="app-header">Policy Details</h2>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Number</label>
           <label>{PolicyDetail.policyNumber}</label>
            </div>
            <div className="app-form-input">
           <label>Policy Type</label>
           <label>{PolicyDetail.policyType}</label>
           </div>
           <div className="app-form-input">
           <label>Due Premium</label>
           <label>{PolicyDetail.duePremium}</label>
           </div>
           <div className="app-form-input">
           <label>Surrender Value</label>
           <label>100000</label>
           </div>
           <div className="app-form-input">
           <label>Processing Fees</label>
           <label>3% </label>
           </div>
           <div className="app-form-input">
           <label>ROI</label>
           <label id='Roi'>1% per Month</label>
           </div>
           <div className="app-form-input">
           <label>Select Tenure</label>
           <select id='tenure' onChange={callEmi}>
            <option value="" disabled selected hidden >Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
          </select>
           </div>
           <div className="app-form-input">
           <label>Loan Amount</label>
           <label id='Loan-amount'>{PolicyDetail.duePremium}</label>
           </div>
           <div className="app-form-input">
           <label>EMI</label>
           <label id='Emi'></label>
           <label></label>
           </div>
          </div>
          <h2 className="app-header">Bank Detail</h2>
          <div className="personal-detail">
          <div className="app-form-input">
            <label>Account Holder Name</label>
            <input  className="input-insurance"value={message}
        onChange={(event) => {
          const result = event.target.value.replace(/[^a-z]/gi, '')
          setMessage(result)
        }}></input>
            </div>
            <div className="app-form-input">
            <label>Account Number</label>
           <input className="input-insurance" value={value}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setvalue(result1)
             }}></input>
            </div>
            <div className="app-form-input">
            <label>IFSC Code</label>
           <input className="input-insurance" id='ifsc'></input>
            </div>
            </div>
            <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Policy Holder Detail</ModalHeader>
        <ModalBody>
        <h5>Personal Detail</h5>
         <label>Name:&nbsp;{enterData.pname}</label><br></br>
         <label>Email:&nbsp;{enterData.email}</label><br></br>
         <label style={{textTransform:"uppercase"}}>PanCard:&nbsp;{enterData.pancard}</label><br></br>
         <label>Current Addres:&nbsp;{enterData.current}</label><br></br>
         <label>Tenure:&nbsp;{enterData.tenure}</label><br></br>
         <label>Emi:&nbsp;{enterData.emi}</label>
         <h5>Bank Detail</h5>
         <label>Account Holder Name:&nbsp;{enterData.bankHolderName}</label><br></br>
         <label>Account Number:&nbsp;{enterData.AccountNumber}</label><br></br>
         <label>IFSC:&nbsp;{enterData.Ifsc}</label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
           toggle()
           storePolicy()
          }}>
            Submit Detail
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
            <button style={{width:"20%", marginLeft:"70%"}} className="witness-button" onClick={() => {
                 if (message === "" || value === "" || document.getElementById('ifsc').value === "") {
                  Swal.fire('All Fields are madatory')
                } else {
                  const Email = document.getElementById('email').checkValidity()
                  const Pancard =  ValidatePAN()
                  if (Email && Pancard) {
                    toggle()
                    getNewData()
                  } else {
                    Email ? alert('Invalid Pancard') : alert('Enter Valid Email')
                  }
                }
            }}>Confirm Filled Detail</button>
          </>
    )
   
}
export default Step2  
