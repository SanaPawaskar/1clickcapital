import React, { useState, useRef} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import Dropd from './Dropd'
import './Dropd.css'
import Register1 from './Group 86.svg'
import login from './Group 87.svg'
function Register(props) {
  const ref1 = useRef()
  const { className } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
 
    function sticky1() {
      const element = ref1.current
        if (element !== null) {
          element.style.position = "sticky"
          element.style.top = "60px"
        }
      }
      window.onscroll = function () {
           sticky1()
      }
  return (
    <div className='btn-grp'id='register' ref={ref1} >
      <img src={Register1}  className="button-animate bt1"  onClick={toggle} alt="1-Click-Registration"></img>
      <a  href="https://www.1clickcapital.com/portal/login.php">
      <img src={login} id="login"  className="button-animate bt2" alt="1-Click-Login"></img>
</a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader>
        <p>Get Registered</p>
      </ModalHeader>
      <ModalBody>
        <Dropd />
      </ModalBody>
      </Modal>
    </div>
  )
}

Register.propTypes = {
  className: PropTypes.string
}

export default Register