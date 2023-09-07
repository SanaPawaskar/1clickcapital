import React, { useState, useEffect } from 'react'
import './form.css'
import { Input, Label, FormGroup} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Button from './Group 218.png'
import SlideButton from 'react-slide-button'
import Swal from 'sweetalert2'
const RetailForm = () => {
    const width = window.innerWidth
    const session = window.sessionStorage
    const userFirstName = session.getItem("firstname") ? session.getItem("firstname") : ''
    const userLastName = session.getItem("lastname") ? session.getItem("lastname") : ''
    const userPincode = session.getItem("contactno") ? session.getItem("contactno") : ''
    const userLoanAmount = session.getItem("contactno") ? session.getItem("contactno") : ''
    const userContact = session.getItem("contactno") ? session.getItem("contactno") : ''
    const [fname, setFname] = useState(userFirstName)
    const [lname, setLname] = useState(userLastName)
    const [cno, setCno] = useState(userContact)
    const [pincode, setpincode] = useState(userPincode)
    const [loanAmount, setloanamount] = useState(userLoanAmount)
    const [isHidden, setIshidden] = useState(false)
    const isTouch = width
    const [reset, setreset] = useState(0)

    const handlefnameChange = e => { 
        setFname(e.target.value)
    }
    const handlelnameChange = e => { 
        setLname(e.target.value)
    }
    const handlecnoChange = e => { 
        setCno(e.target.value)
    }
    const handlepincodeChange = e => { 
        setpincode(e.target.value)
    }
    const handleloanamountChange = e => { 
        setloanamount(e.target.value)
    }


    const checkhandle = () => {
      setIshidden(!isHidden)
    }
    const resetForm = () => {
        setFname('')
        setLname('')
        setCno('')
        setpincode('')
        setloanamount('')
        setIshidden(false)
        session.clear()
    }
    const handleSubmit = () => {
    const FNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const LNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const PHONE_REGEX = new RegExp(/^[0-9]*$/gmi)
      if (fname === '') {
        alert('All fields are Mandotary')  
        setreset(reset + 1)
      } else if (FNAME_REGEX.test(fname) === false) {
        alert('Entered First Name is not in correct format, there should only be alphabets in name')
        setreset(reset + 1)
      } else if (lname === '') {
        alert('All fields are Mandotary') 
        setreset(reset + 1)
      } else if (LNAME_REGEX.test(lname) === false) {
        alert('Entered Last Name is not in correct format, there should only be alphabets in name')
        setreset(reset + 1)
      }  else if (cno === '') {
        alert('All fields are Mandotary')
        setreset(reset + 1)
      } else if (pincode === '') {
        alert('All fields are Mandotary')
        setreset(reset + 1)
      }  else if (loanAmount === '') {
        alert('All fields are Mandotary')
        setreset(reset + 1)
      } else if (isHidden === false) { 
        alert("Please Agree to Privacy policy")
        setreset(reset + 1)
      } else {
        console.log(loanAmount)
        console.log(pincode)
      setreset(reset + 1)
      const userdata = `first_name=${fname}&last_name=${lname}&&company_name=${loanAmount}&email=${pincode.toString()}
      &designation=null&mobile=${cno}&city=${pincode.toString()}&amount=${loanAmount}&campaign=Retail&product_name=1_Click_Retail`
      try {
        axios({
          method: "post",
          url: "https://www.1clickcapital.com/portal/api/registration.php",
          data: userdata,
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then((res) => { 
          if (res.status !== 200) {
            Swal.fire({
              title:"Error",
              html: `<center>${JSON.stringify(res.data)}</center>`,
              showCloseButton:true
          })
          } else {
            Swal.fire({
              title:"Submitted Successfully",
              html: "<center>Thank You for Interest, we will get in touch with you.</center>",
              confirmButtonColor: '#FFA500',
              showCloseButton:true
          })
          }
        })
        resetForm()
      } catch (error) {
        alert(error)
      }
         resetForm()
      }
    }
    useEffect(() => {
      session.setItem('firstname', fname)
      session.setItem('lastname', lname)
      session.setItem('contactno', cno)
      session.setItem('contactno', pincode)
      session.setItem('contactno', loanAmount)
    
    }, [fname, lname, cno, pincode, loanAmount])
  return (
    <div className='form-div' style={{zIndex:"0", marginTop:"46px"}}>
         <h3 className="form-head">Get a Free Quote</h3>
        <form>
        
            <p className="form-msg-p">Striving To Get You The Best Financial Solutions
                To Grow Your Business With Ease & Stability.</p>
            <div className='input-container'>
                <input className='input-box' type="text" id="firstname"
                    value={fname} onChange={handlefnameChange} 
                    required pattern="^[a-zA-Z\s]*$" title="Use Aplhabets in Name no numbers"/>
                {fname === "" ? <label className='label-name' htmlFor='firstname'>First Name</label> : <label className='label2' htmlFor='firstname'>First Name</label>  }
        </div>
        <div className='input-container'>
            <input className='input-box' type="text" id="lastname"
                value={lname} onChange={handlelnameChange} required pattern="^[a-zA-Z\s]*$"
                title="Use Aplhabets in Name no numbers"/>
            {lname === "" ? <label className='label-name' htmlFor='lastname'>Last Name</label> : <label className='label2' htmlFor='lastname'>Last Name</label>  }
        </div>
        <div className='input-container'>
            <input className='input-box' type="tel" 
                value={cno} onChange={handlecnoChange} id='contactno'
                required  pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" 
                title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits" maxLength={13}/>
          {cno === "" ? <label className='label-name' htmlFor='contactno'>Contact No</label> : <label className='label2' htmlFor='contactno'>Contact No</label>  }
        </div>
        <div className='input-container'>
            <input className='input-box' type="text" 
                value={pincode} onChange={handlepincodeChange} id='pincode' maxLength={6}
                required  pattern="^[0-9]*$" title="Enter only number"/>
          {pincode === "" ? <label className='label-name' htmlFor='contactno'> Area PinCode</label> : <label className='label2' htmlFor='contactno'>Area Pincode</label>  }
        </div>
        <div className='input-container'>
            <input className='input-box' type="text" 
                value={loanAmount} onChange={handleloanamountChange} id='loanAmount'
                required  pattern="^[0-9]*$"
                title="Enter Numbers only number"/>
          {loanAmount === "" ? <label className='label-name' htmlFor='contactno'>Loan Amount</label> : <label className='label2' htmlFor='contactno'>Loan Amount</label>  }
        </div>
    
        <FormGroup
          check
          inline
          style={{margintop:"-4%"}}
          >
          <Input type="checkbox" id='termschkbx' className='checkbox' onChange={checkhandle} checked={isHidden} />
          <Label check htmlFor='termschkbx'><NavLink
             onClick={scroll}
            exact
               to="/privacy-policy">I Agree to <span style={{textDecoration:"underline", color: "red"}} target="_blank">Privacy Policy</span>
              </NavLink> </Label>
        </FormGroup>
        {
  (isTouch >= 650 ? <img value="Send a request" src={Button} className='button' onClick={handleSubmit} alt="SubmitButton"/> : <SlideButton 
  mainText="Swipe To Submit" 
  overlayText="Submitted" 
  onSlideDone={handleSubmit} 
  caretClassList="my-caret-class"
  classList="my-class"
  overlayClassList="my-overlay-class"
  reset={reset}
/>
)}        </form>    
    </div> 
        
  )
}

export default RetailForm
