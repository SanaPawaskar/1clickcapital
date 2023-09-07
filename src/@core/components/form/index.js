import React, { useState, useEffect } from 'react'
import './form.css'
import CreatableSelect from 'react-select/creatable'
import cityname  from './city'
import designames from './designation'
import { Input, Label, FormGroup} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Button from './Group 218.png'
import SlideButton from 'react-slide-button'
import Swal from 'sweetalert2'
const form = () => {
    const width = window.innerWidth
    const session = window.sessionStorage
    const userFirstName = session.getItem("firstname") ? session.getItem("firstname") : ''
    const userLastName = session.getItem("lastname") ? session.getItem("lastname") : ''
    const userCompName = session.getItem("companyname") ? session.getItem("companyname") : ''
    const userContact = session.getItem("contactno") ? session.getItem("contactno") : ''
    const userEmail = session.getItem("emailid") ? session.getItem("emailid") : ''
    const userCity = session.getItem("cityname") ? session.getItem("cityname") : ''
    const userDesig = session.getItem("designame") ? session.getItem("designame") : ''
    const [cname, setCname] = useState(userCompName)
    const [fname, setFname] = useState(userFirstName)
    const [lname, setLname] = useState(userLastName)
    const [cno, setCno] = useState(userContact)
    const [email, setEmail] = useState(userEmail)
    const [city, setCity] = useState(userCity)
    const [desig, setDesig] = useState(userDesig)
    const [isHidden, setIshidden] = useState(false)
    const isTouch = width
    const [reset, setreset] = useState(0)
    const handlecityChange = e => {
        if (e === null) {
          e = ''
          setCity(e)
        }
        setCity(e.value)
      }
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
    const handlefnameChange = e => { 
        setFname(e.target.value)
    }
    const handlelnameChange = e => { 
        setLname(e.target.value)
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
        setFname('')
        setLname('')
        setCno('')
        setEmail('')
        setCity('')
        setDesig('')
        setIshidden(false)
        session.clear()
    }
    const handleSubmit = () => {
    const FNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const LNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const PHONE_REGEX = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gmi)
      const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!yahoo.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/gmi)
      if (cname === '') {
        alert('All fields are Mandotary') 
       setreset(reset + 1)
      } else if (fname === '') {
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
      } else if (city === '') {
        alert('All fields are Mandotary') 
        setreset(reset + 1)
      } else if (desig === '') {
        alert('All fields are Mandotary') 
        setreset(reset + 1)
      } else if (isHidden === false) { 
        alert("Please Agree to Privacy policy")
        setreset(reset + 1)
      } else {
        console.log(city)
        console.log(desig)
      setreset(reset + 1)
      const userdata = `first_name=${fname}&last_name=${lname}&company_name=${cname}&email=${email}&mobile=${cno}&designation=${desig}&city=${city}&product_name=1_Click_Payroll&campaign=website`
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
      session.setItem('firstname', fname)
      session.setItem('lastname', lname)
      session.setItem('contactno', cno)
      session.setItem('companyname', cname)
      session.setItem('emailid', email)
      session.setItem('designame', desig)
      session.setItem('cityname', city)
    }, [fname, lname, cno, cname, email, desig, city])
  return (
    <div className='form-div'>
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
          <input className='input-box' type="text" id='companyname'
          value={cname} onChange={handlecnameChange} />
          {cname === "" ? <label className='label-name' htmlFor='companyname'>Company Name</label> : <label className='label2' htmlFor='companyname'>Company Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box' type="email" id='emailid'
          value={email} 
          onChange={handleemailChange} required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
          title='Email format is example@companyname.com'/>
          {email === "" ? <label className='label-name' htmlFor='emailid'>Email</label> : <label className='label2' htmlFor='emailid'>Email</label>  }
        </div>
        <div className='input-container1'>
            <CreatableSelect
            className='input-box'
            id='designation'
            isClearable
            value={designames.find(obj => obj.value === desig) ? designames.find(obj => obj.value === desig) : ""} 
            options={designames}
            onChange={handledesigChange}
            />
          <label className='label2' htmlFor='designation'>Designation</label>
        </div>
        <div className='input-container1'>
            <CreatableSelect
            className='input-box'
            id='cityname'
            isClearable
            value={cityname.find(obj => obj.value === city) ? cityname.find(obj => obj.value === city) : ""}
            options={cityname}
            onChange={handlecityChange}
            />
        <label className='label2' htmlFor='cityname'>City</label>
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
)}
        <h5 className='login-text'> Already a user <span className='questionmark-form'>?</span> <a className="link" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5>
        </form>    
    </div> 
        
  )
}

export default form
