
import React, {useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from "axios"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style.css'
import Loader from '../Insurance/Insurance/otpstep'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
export default function Meeting(props) {
    const [modal, setModal] = useState(false)
    const [value, onChange] = useState(new Date())
    const [Appointment, setAppointment] = useState(false)
    const MaxMonth = new Date().getMonth() + 2
    const MaxDate = new Date().getDate()
    const MaxYear = new Date().getFullYear()
    const navigate = useNavigate()
    const ActualHours = new Date().getHours()
    const ActualMinute = new Date().getMinutes()
//    const [data1, setdata1] = useState()
    const [time, setTime] = useState("")
    const id = window.location.pathname.slice(-32)
     const data = props
    const employee = data.data.find(emp => {
        return emp.meeting_id === id
    })
  console.log(employee)
    const toggle = () => {
        setModal(!modal)
        setTime(''.concat(ActualHours, ':', ActualMinute))
    }
    function getValue(id) {
        const  MyButton = document.getElementById(id).value
        setTime(MyButton)
    }
    function showAlert() {
        Swal.fire({
            title: 'Appointment Reschedule Successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            focusConfirm: true,
            showCancelButton: false,
            showCloseButton: false,
            preConfirm: () => {
                navigate('/')
              }
        })

    }

    function changeButton(array) {
        const Elements = document.querySelectorAll('.Meeting-Timer button')
        for (const element1 of Elements) {
            for (const time of array) {
                if (element1.value === time) {
                    element1.classList.replace('Timer-active', 'Timer-notactive')
                }
            }
        }
    }
    function getTime(value1) {
        console.log(value1.toDateString())
        try {
            axios({
                method: "get",
                url: "https://www.1clickcapital.com/portal/api/meeting_data_fetch.php",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                params:{
                    date:value1.toDateString()
                }
            })
      .then(
              (result) => {
                  setAppointment(false)
                  const newArray = []
                  for (let i = 0; i < result.data.data.length; i++) {
                      newArray.push(result.data.data[i].time)
                  }
                  changeButton(newArray)
                  console.log(newArray)
              }
              )
        } catch (error) {
            alert(error)
        }

    }
    function checkTIme (myValue) {
        const MyElement = document.querySelectorAll('.Meeting-Timer button')
        if (myValue.getDate() === new Date().getDate()) {
            for (const Element of MyElement) {
                const ElementValue = Element.value
                const hr = ElementValue.slice(0, 2)
                if (hr > ActualHours) {
                    Element.classList.add('Timer-active')
                } else {
                    Element.classList.remove('Timer-active')
                }
            }
        }  else {
            for (const Element of MyElement) {
                Element.classList.add('Timer-active')
            }
        }
    }
    useEffect(() => {
        checkTIme(value)
        getTime(value)
    }, [value])
//    function toCheckValid() {
//        const Input = document.querySelectorAll('.Meeting-modal input')
//        let Value = false
//        for (let i = 0; i < Input.length; i++) {
//            if (Input[i].checkValidity()) {
//                Value = true
//            } else {
//                return false
//            }
//        }
//        return Value
//    }
    function SubmitData () {
        setAppointment(true)
        const userdata = ``
        try {
            axios({
                method: "post",
                url: "https://www.1clickcapital.com/portal/api/meeting_reschedule.php",
                data: userdata,
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            })
      .then(
              (result) => {
                  setAppointment(false)
                  setModal(!modal)
                  result.status === 200 ? showAlert() : alert('something wentwrong')
              }
              )
        } catch (error) {
            alert(error)
        }
    }
    return (
            <>
            <div style={{minHeight:"100vh", overflowY:"hidden"}}>
                { Appointment ? <Loader/> : <div className='card parent-meeting'>
                    <div className='Meeting-Calendar'>
                        <h3>30 Minute Financial Advice!!</h3>
                        <Calendar  onChange={onChange} value={value}
                            //  onClickDay ={() => { checkTIme(value);  getTime(value) } }
                            minDate ={new Date()} maxDate= {new Date(MaxYear, MaxMonth, MaxDate)}/>
                    </div>
                    <div className='Meeting-Timer'>
                        <button className='Timer-notactive' value="09:00" id="1" onClick={() => { toggle(); getValue(1) }}>9:00am</button>
                        <button className='Timer-notactive' value="09:30" id="2" onClick={() => { toggle(); getValue(2) }}>9:30am</button>
                        <button className='Timer-notactive' value="10:00" id="3" onClick={() => { toggle(); getValue(3) }}>10:00am</button>
                        <button className='Timer-notactive' value="10:30" id="4" onClick={() => { toggle(); getValue(4) }}>10:30am</button>
                        <button className='Timer-notactive' value="11:00" id="5" onClick={() => { toggle(); getValue(5) }}>11:00am</button>
                        <button className='Timer-notactive' value="11:30" id="6" onClick={() => { toggle(); getValue(6) }}>11:30am</button>
                        <button className='Timer-notactive' value="12:00" id="7" onClick={() => { toggle(); getValue(7) }}>12:00pm</button>
                        <button className='Timer-notactive' value="12:30" id="8" onClick={() => { toggle(); getValue(8) }}>12:30pm</button>
                        <button className='Timer-notactive' value="13:00" id="9" onClick={() => { toggle(); getValue(9) }}>1:00pm</button>
                        <button className='Timer-notactive' value="13:30" id="10" onClick={() => { toggle(); getValue(10) }}>1:30pm</button>
                        <button className='Timer-notactive' value="14:00" id="11" onClick={() => { toggle(); getValue(11) }}>2:00pm</button>
                        <button className='Timer-notactive' value="14:30" id="12" onClick={() => { toggle(); getValue(12) }}>2:30pm</button>
                        <button className='Timer-notactive' value="15:00" id="13" onClick={() => { toggle(); getValue(13) }}>3:00pm</button>
                        <button className='Timer-notactive' value="15:30" id="14" onClick={() => { toggle(); getValue(14) }}>3:30pm</button>
                        <button className='Timer-notactive' value="16:00" id="15" onClick={() => { toggle(); getValue(15) }}>4:00pm</button>
                        <button className='Timer-notactive' value="16:30" id="16" onClick={() => { toggle(); getValue(16) }}>4:30pm</button>
                        <button className='Timer-notactive' value="17:00" id="17" onClick={() => { toggle(); getValue(17) }}>5:00pm</button>
                        <button className='Timer-notactive' value="17:30" id="18" onClick={() => { toggle(); getValue(18) }}>5:30pm</button>
                        <button className='Timer-notactive' value="18:00" id="19" onClick={() => { toggle(); getValue(19) }}>6:00pm</button>
                        <button className='Timer-notactive' value="18:30" id="20" onClick={() => { toggle(); getValue(20) }}>6:30pm</button>
                        <button className='Timer-notactive' value="19:00" id="21" onClick={() => { toggle(); getValue(21) }}>7:00pm</button>
                        <button className='Timer-notactive' value="19:30" id="22" onClick={() => { toggle(); getValue(22) }}>7:30pm</button>
                        <button className='Timer-notactive' value="20:00" id="23" onClick={() => { toggle(); getValue(23) }}>8:00pm</button>
                        <button className='Timer-notactive' value="20:30" id="24" onClick={() => { toggle(); getValue(24) }}>8:30pm</button>
                        <button className='Timer-notactive' value="21:00" id="25" onClick={() => { toggle(); getValue(25) }}>9:00pm</button>
                        <button className='Timer-notactive' value="21:30" id="26" onClick={() => { toggle(); getValue(26) }}>9:30pm</button>
                        <button className='Timer-notactive' value="22:00" id="27" onClick={() => { toggle(); getValue(27) }}>10:00pm</button>
                        <button className='Timer-notactive' value="22:30" id="28" onClick={() => { toggle(); getValue(28) }}>10:30pm</button>
                    </div>
                    <div>
                        <Modal isOpen={modal} toggle={toggle} style={{background: "linear-gradient(0.55turn, #c9f1f4, #f6f9f5, #efb06d)", borderRadius:"25%"}}>
                            <ModalHeader toggle={toggle}>Appointment</ModalHeader>
                            <ModalBody>
                                <div className='Meeting-modal'>
                                    <label>Your Selected Date</label>
                                    <labe>{value.toDateString()}</labe>
                                    <label>Your Selected Time</label>
                                    <label>{time}</label>
                                    <label>Name</label>
                                    <label id="meeting-name">{employee.name}</label>
                                    <label>Email</label>
                                    <label id="meeting-email">{employee.email}</label>
                                    <label>Mobile Number</label>
                                    <label id="meeting-ts">{employee.mobile}</label>
                                    <label>Total Salary Payout of a employeer per Month</label>
                                    <label id="">{employee.total_salary}</label>
                                    <label>Total Number Of Employee</label>
                                    <label id="">{employee.total_employees}</label>
                                    <label>Reason for The Reschedule</label>
                                    <textArea id="reason"></textArea>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => {
                                    SubmitData()
                                }}>
                                    Reschedule The Appointment
                                </Button>
                                <Button color="secondary" onClick={toggle}>
                                    Change Date
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
            </div>
                }


            </div>
            </>

            )
}