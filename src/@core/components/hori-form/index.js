import React, { useState, useEffect } from 'react'
import './horiform.css'
import CreatableSelect from 'react-select/creatable'
// import cityname  from './city'
import designames from './designation'
import { NavLink } from 'react-router-dom'
import { Input, Label, FormGroup} from 'reactstrap'
// import ReactSwipeButton from "react-swipe-button"
import SlideButton from 'react-slide-button'
import axios from 'axios'
import Button from './Group 218.png'
import Swal from 'sweetalert2'
 const horiForm = () => {
    const width = window.innerWidth
    const session = window.sessionStorage
    const userName = session.getItem("name") ? session.getItem("name") : ''
    const userCompName = session.getItem("companyname") ? session.getItem("companyname") : ''
    const userContact = session.getItem("contactno") ? session.getItem("contactno") : ''
    const userEmail = session.getItem("emailid") ? session.getItem("emailid") : ''
    const userDesig = session.getItem("designame") ? session.getItem("designame") : ''
    const [cname, setCname] = useState(userCompName)
    const [name, setName] = useState(userName)
    const [cno, setCno] = useState(userContact)
    const [email, setEmail] = useState(userEmail)
    const [desig, setDesig] = useState(userDesig)
    const [isHidden, setIshidden] = useState(false)
    const isTouch = width
    const [reset, setreset] = useState(0)
      const handledesigChange = e => {
        if (e === null) {
          e = ''
          setDesig(e)
        }
        setDesig(e.value)
      }
      const handlecnameChange = e => { 
        setCname(e.target.value)
    }
    const handlenameChange = e => { 
        setName(e.target.value)
    }
    const handlecnoChange = e => { 
        setCno(e.target.value)
    }
    const handleemailChange = e => { 
        setEmail(e.target.value)
    }
    const checkhandle = () => {
      setIshidden(!isHidden)
    }
    const resetForm = () => {
        setCname('')
        setName('')
        setCno('')
        setEmail('')
        setDesig('')
        setIshidden(false)
    }
    const handleSubmit = () => {
      const NAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const PHONE_REGEX = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gmi)
      const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!yahoo.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/gmi)
      if (cname === '') {
        alert('All fields are Mandotary') 
       setreset(reset + 1)
      } else if (name === '') {
        alert('All fields are Mandotary')  
        setreset(reset + 1)
      } else if (NAME_REGEX.test(name) === false) {
        alert('Entered First Name is not in correct format, there should only be alphabets in name')
        setreset(reset + 1)
      } else if (email === '') {
        alert('All fields are Mandotary') 
        setreset(reset + 1)
      } else if (EMAIL_REGEX.test(email) === false) {
        alert('Entered Email-Id is not in correct Format.Email format is example@companyname.com')
        setreset(reset + 1)
      } else if (cno === '') {
        alert('All fields are Mandotary')
        setreset(reset + 1)
      } else if (PHONE_REGEX.test(cno) === false) {
        alert('Entered Contact Number is not in correct Format eg:+91-111-111-1111/111-111-1111')
        setreset(reset + 1)
      } else if (desig === '') {
        alert('All fields are Mandotary') 
        setreset(reset + 1)
      } else if (isHidden === false) { 
        alert("Please Agree to Privacy policy")
        setreset(reset + 1)
      } else {
      setreset(reset + 1)
      const userdata = `first_name=${name}&last_name=&company_name=${cname}&email=${email}&mobile=${cno}&designation=${desig}&city=&product_name=custom_contact&campaign=website`
      try {
        axios({
          method: "post",
          url: "https://www.1clickcapital.com/portal/api/registration.php",
          data: userdata,
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then((res) => { 
          if (res.data.register_error === "email_already_in_use_msg") {
            Swal.fire({
              title:"Error",
              html: "<center>Entered Email is already in Use.</center>",
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
      session.setItem('name', name)
      session.setItem('contactno', cno)
      session.setItem('companyname', cname)
      session.setItem('emailid', email)
      session.setItem('designame', desig)
    }, [name, cno, cname, email, desig])
    return (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className='contact-form-div'>
          <div className='contact-input-container'>
            <input className='contact-input-box'type="text" 
            value={name} id='name'
            onChange={handlenameChange} required pattern="^[a-zA-Z\s]*$"
            title="Use Aplhabets in Name no numbers"/>
            {name === "" ? <label className='contact-label-name' htmlFor='name'>Name</label> : <label className='contact-label2' htmlFor='name'>Name</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box' type="tel" 
            value={cno} id='mobileno'
            onChange={handlecnoChange} required pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" 
            title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits" maxLength={13}/>
            {cno === "" ? <label className='contact-label-name' htmlFor='mobileno'>Contact No</label> : <label className='contact-label2' htmlFor='mobileno'>Contact No</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box'type="text" 
            value={cname} id='compname'
            onChange={handlecnameChange} />
            {cname === "" ? <label className='contact-label-name' htmlFor='compname'>Company Name</label> : <label className='contact-label2' htmlFor='compname'>Company Name</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box' type="email" 
            value={email} id='e-id'
            onChange={handleemailChange} required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
            title='Email format is example@companyname.com'/>
            {email === "" ? <label className='contact-label-name' htmlFor='e-id'>Email</label> : <label className='contact-label2' htmlFor='e-id'>Email</label>  }
          </div>
          <div className='contact-input-container'>
          <CreatableSelect
          className='contact-input-box  ci-container'
            id='designate'
            isClearable
            defaultValue="Select"
            value={designames.find(obj => obj.value === desig) ? designames.find(obj => obj.value === desig) : ""}
            options={designames}
            onChange={handledesigChange}
            />
            <label className='contact-label2' htmlFor='designate'>Designation</label>
          </div>
          <FormGroup
            check
            inline
            style={{margintop:"-4%"}}>
            <Input type="checkbox" id='terms-formchckbox'className='contact-checkbox' onChange={checkhandle} checked={isHidden}/>
            <Label check htmlFor='terms-formchckbox'><NavLink
             onClick={scroll}
            exact
               to="/privacy-policy">I Agree to <span style={{textDecoration:"underline", color: "red"}}>Privacy Policy</span>
              </NavLink> </Label>
          </FormGroup>
          {
  (isTouch >= 650 ? <img value="Send a request" src={Button} className='button-2' onClick={handleSubmit} alt="SubmitButton"/> : <div style={{width:"250px"}}> 
  <SlideButton 
  mainText="Swipe To Submit" 
  overlayText="Submitted" 
  onSlideDone={handleSubmit} 
  caretClassList="my-caret-class"
  classList="my-class"
  overlayClassList="my-overlay-class"
  reset={reset}
/></div>)}
          <h5 className='contact-login-text'> Already a user <span className='questionmark-horiform'>?</span> <a className="contact-link" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5>
      </div>
      </form>          
    )
}

export default horiForm
