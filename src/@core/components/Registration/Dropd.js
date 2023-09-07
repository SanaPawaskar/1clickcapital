import React, {useState, useEffect} from 'react'
import data from './Data'
import './Dropd.css'
import propertytype from './Property'
import cityname  from './city'
import designames from './designation'
import employeesize from './Employeesize'
import CreatableSelect from 'react-select/creatable'
import { Input, Label, FormGroup} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
const Dropdform = () => {
  const session = window.sessionStorage
    const userProduct = session.getItem("product") ? session.getItem("product") : "1 Click Payroll Financing"
    const userFirstName = session.getItem("firstname") ? session.getItem("firstname") : ''
    const userLastName = session.getItem("lastname") ? session.getItem("lastname") : ''
    const userCompName = session.getItem("companyname") ? session.getItem("companyname") : ''
    const userContact = session.getItem("contactno") ? session.getItem("contactno") : ''
    const userEmail = session.getItem("emailid") ? session.getItem("emailid") : ''
    const userTenure = session.getItem("tenures") ? session.getItem("tenures") : ''
    const userAmount = session.getItem("amounts") ? session.getItem("amounts") : ''
    const userProjectName = session.getItem("projectnames") ? session.getItem("projectnames") : ''
    const userCity = session.getItem("cityname") ? session.getItem("cityname") : ''
    const userDesig = session.getItem("designame") ? session.getItem("designame") : ''
    const userEmpsize = session.getItem("employeesizes") ? session.getItem("employeesizes") : ''
    const userPtype = session.getItem("propertytypes") ? session.getItem("propertytypes") : ''
    const [pname, setPname] = useState(userProduct)
    const [cname, setCname] = useState(userCompName)
    const [fname, setFname] = useState(userFirstName)
    const [lname, setLname] = useState(userLastName)
    const [cno, setCno] = useState(userContact)
    const [tenure, setTenure] = useState(userTenure)
    const [amount, setAmount] = useState(userAmount)
    const [proname, setProname] = useState(userProjectName)
    const [email, setEmail] = useState(userEmail)
    const [city, setCity] = useState(userCity)
    const [desig, setDesig] = useState(userDesig)
    const [empsize, setEmpsize] = useState(userEmpsize)
    const [ptype, setPtype] = useState(userPtype)
    const [isHidden, setIshidden] = useState(false)
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
    const handleempsizeChange = e => {
      if (e === null) {
        e = ''
        setEmpsize(e)
      }
      setEmpsize(e.value)
    }
    const handleptypeChange = e => {
      if (e === null) {
        e = ''
        setPtype(e)
      }
      setPtype(e.value)
    }
    const handlepnameChange = e => { 
        setPname(e.target.value)
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
    const handletenureChange = e => { 
        setTenure(e.target.value)
    }
    const handleamountChange = e => { 
        setAmount(e.target.value)
    }
    const handlepronameChange = e => { 
        setProname(e.target.value)
    }
    const handleemailChange = e => { 
        setEmail(e.target.value)
    }
    const checkhandle = () => {
      setIshidden(!isHidden)
    }
    const resetForm = () => {
      setPname("1 Click Payroll Financing")
      setCname('')
      setFname('')
      setLname('')
      setCno('')
      setTenure('')
      setAmount('')
      setProname('')
      setEmail('')
      setCity('')
      setDesig('')
      setIshidden(false)
  }
  const showdata = () => {
    const userdata = `first_name=${fname}&last_name=${lname}&company_name=${cname}&email=${email}
    &mobile=${cno}&designation=${desig}&city=${city}&tenure=${tenure}&amount=${amount}&emp_size=${empsize}
    &project_name=${proname}&property_type=${ptype}&product_name=${pname}&campaign=website`
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
  const citydesigvalid = () => {
    if (city === '') {
      alert('All fields are Mandotary') 
    } else if (desig === '') {
      alert('All fields are Mandotary') 
    } else if (isHidden === false) { 
      alert("Please Agree to Privacy policy")
    } else {
      showdata()
    }
}
const secondvalid = () => {
  if (tenure === '') {
    alert('All fields are Mandotary') 
  } else if (amount === '') {
    alert('All fields are Mandotary') 
  } else if (isHidden === false) { 
    alert("Please Agree to Privacy policy")
  } else {
    showdata()
  }
}
const thirdvalid = () => {
  if (tenure === '') {
    alert('All fields are Mandotary') 
  } else if (amount === '') {
    alert('All fields are Mandotary') 
  }  else if (proname === '') {
    alert('All fields are Mandotary') 
  } else if (isHidden === false) { 
    alert("Please Agree to Privacy policy")
  } else {
    showdata()
  }
}
    const mainvalid = () => {
      const FNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const LNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
      const PHONE_REGEX = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gmi)
      const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!yahoo.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/gmi)
      if (cname === '') {
        alert('All fields are Mandotary') 
      } else if (fname === '') {
        alert('All fields are Mandotary')  
      } else if (FNAME_REGEX.test(fname) === false) {
        alert('Entered First Name is not in correct format, there should only be alphabets in name')
      } else if (lname === '') {
        alert('All fields are Mandotary') 
      } else if (LNAME_REGEX.test(lname) === false) {
        alert('Entered Last Name is not in correct format, there should only be alphabets in name')
      } else if (email === '') {
        alert('All fields are Mandotary') 
      } else if (EMAIL_REGEX.test(email) === false) {
        alert('Entered Email-Id is not in correct Format.Email format is example@companyname.com')
      } else if (cno === '') {
        alert('All fields are Mandotary') 
      } else if (PHONE_REGEX.test(cno) === false) {
        alert('Entered Contact Number is not in correct Format eg:+91-111-111-1111/111-111-1111')
      } else if (pname === "1 Click Payroll Financing" || pname === "1 Click Salary Advance" || pname === "1 Click Insurance Funding") {
        citydesigvalid()
      } else if (pname === "1 Click Lease Rental Discounting") {
          if (ptype === '') {
            alert('All fields are Mandotary')
          } else if (isHidden === false) { 
            alert("Please Agree to Privacy policy")
          } else {
            showdata()
          }
      } else if (pname === "1 Click Project Funding" || pname === "1 Click Supply Chain Funding" || pname === "1 Click Working Capital" || pname === "1 Click MSME") {
        secondvalid()
      } else if (pname === "1 Click HRMS") {
        if (empsize === '') {
          alert('All fields are Mandotary')
        } else if (isHidden === false) { 
          alert("Please Agree to Privacy policy")
        } else {
          showdata()
        }
      } else if (pname === "1 Click Entertainment and Production Financial") {
        thirdvalid()
      } else {
        resetForm()
      }
    }
    const handleSubmit = () => {
        mainvalid()
    }
    useEffect(() => {
      session.setItem('firstname', fname)
      session.setItem('lastname', lname)
      session.setItem('contactno', cno)
      session.setItem('companyname', cname)
      session.setItem('emailid', email)
      session.setItem('designame', desig)
      session.setItem('cityname', city)
      session.setItem('tenures', tenure)
      session.setItem('amounts', amount)
      session.setItem('projectnames', proname)
      session.setItem('employeesizes', empsize)
      session.setItem('propertytypes', ptype)
    }, [fname, lname, cno, cname, email, desig, city, tenure, amount, proname, empsize, ptype])
    return (
        <form>
            <select value={pname} onChange={(e) => { handlepnameChange(e) }} className="model-register-title">
                {data.form.sections.map((prd) => (
                        <option key={prd.product_id} value={prd.product_title}>{prd.product_title}</option>
                        ))}
            </select>  
            <div style={{width:"88%"}}> 
            { 
            data.form.sections.filter((prd) => prd.product_title === pname).map((ff) => (ff.fields.map((inputData) => {
                switch (inputData.html_element) {
                    case "textbox":   
                    if (inputData.name === "Company Name") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='company-name'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                          value={cname} onChange={(e) => { handlecnameChange(e) }}
                          className="model-form-data" id='company-name'/>
                        </div>
                      )   
                    } else if (inputData.name === "First Name") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='first-name'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                          value={fname} onChange={(e) => { handlefnameChange(e) }}
                          className="model-form-data" pattern="^[a-zA-Z\s]*$"
                          title='Use only Alphabets' id='first-name'/>
                        </div>
                      )   
                    } else if (inputData.name === "Last Name") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='last-name'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                          value={lname} onChange={(e) => { handlelnameChange(e) }}
                          className="model-form-data" pattern="^[a-zA-Z\s]*$"
                          title='Use only Alphabets'id='last-name'/>
                        </div>
                      )   
                    } else if (inputData.name === "Contact No") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='contact-no'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type="tel" name={inputData.name} 
                          value={cno} onChange={(e) => { handlecnoChange(e) }} id='contact-no'
                          className="model-form-data" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" 
                          title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits" maxLength={13}/>
                        </div>
                      )   
                    } else if (inputData.name === "Tenure") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='tenure'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type="number" name={inputData.name} 
                          value={tenure} onChange={(e) => { handletenureChange(e) }} id='tenure'
                          className="model-form-data" pattern="[0-9]+" 
                          title="Use numbers"/>
                        </div>
                      )   
                    } else if (inputData.name === "Amount") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='amount'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type="number" name={inputData.name} id='amount'
                          value={amount} onChange={(e) => { handleamountChange(e) }}
                          className="model-form-data" pattern="[0-9]+" 
                          title="Use numbers"/>
                        </div>
                      )   
                    } else if (inputData.name === "Project Name") {  
                      return (
                        <div>
                          <label className='modal-form-label' htmlFor='project-name'>{inputData.label}</label><br/>
                          <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                          value={proname} onChange={(e) => { handlepronameChange(e) }} id='project-name'
                          className="model-form-data"/>
                        </div>
                      )   
                    } else {
                      return null
                    }
                    case "email":   return (
                      <div>
                        <label className='modal-form-label' htmlFor='email-id'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                        value={email} onChange={(e) => { handleemailChange(e) }} id='email-id'
                        className="model-form-data" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                        title='Email format is example@companyname.com'/>
                      </div>
                    )
                    case "dropdown": 
                      if (inputData.name === "Property Type") {  
                        return (
                          <div>
                            <label className='modal-form-label' htmlFor='property-type'>Property Type</label><br/>
                            <CreatableSelect
                            id="property-type"
                            isClearable
                            defaultValue="Select"
                            value={propertytype.find(obj => obj.value === ptype) ? propertytype.find(obj => obj.value === ptype) : ""}
                            options={propertytype}
                            onChange={handleptypeChange}
                          />
                          </div>       
                        )   
                      } else if (inputData.name === "Designation") {  
                        return (
                          <div>
                            <label className='modal-form-label' htmlFor='desig-name'>Designation</label><br/>
                            <CreatableSelect
                            id='desig-name'
                            isClearable
                            defaultValue="Select"
                            value={designames.find(obj => obj.value === desig) ? designames.find(obj => obj.value === desig) : ""}
                            options={designames}
                            onChange={handledesigChange}
                          />
                          </div>       
                        )   
                      } else if (inputData.name === "City") {  
                        return (
                          <div>
                            <label className='modal-form-label' htmlFor='city-name'>City</label><br/>
                            <CreatableSelect
                            id='city-name'
                            isClearable
                            defaultValue="Select"
                            value={cityname.find(obj => obj.value === city) ? cityname.find(obj => obj.value === city) : ""}
                            options={cityname}
                            onChange={handlecityChange}
                          />
                          </div>       
                        )   
                      } else if (inputData.name === "Employee Size") {  
                        return (
                          <div>
                            <label className='modal-form-label' htmlFor='employee-size'>Employee Size</label><br/>
                            <CreatableSelect
                            id='employee-size'
                            isClearable
                            defaultValue="Select"
                            value={employeesize.find(obj => obj.value === empsize) ? employeesize.find(obj => obj.value === empsize) : ""}
                            options={employeesize}
                            onChange={handleempsizeChange}
                          />
                          </div>       
                        )   
                      } else {
                        return null
                      }
                    default: return null
                  }
                })
            ))}  
            <br/><center><FormGroup
                check
                inline>
                <Input type="checkbox" id='form-termschkbx' className='checkbox-dropd' onChange={checkhandle} checked={isHidden} />
                <Label check htmlFor='form-termschkbx'><NavLink
             onClick={scroll}
            exact
               to="/privacy-policy">I Agree to <span style={{textDecoration:"underline", color: "red"}} target="_blank">Privacy Policy</span>
              </NavLink> </Label>
              </FormGroup></center>
              <br/><center><input type="button" value="Send a request" className='modal-form-button' id="sub1" onClick={handleSubmit}/></center>
              <br/><center><h5 className='login-text'> Already a user <span className='questionmark-form'>?</span> <a className="link" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5></center>
          </div> 
        </form>
    )
}
export default Dropdform