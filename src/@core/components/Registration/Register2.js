import React, { useState, useRef} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import Dropd from './Dropd'
import './Dropd.css'
import Register1 from './Group 86.svg'
import login from './Group 87.svg'
function Register2(props) {
  const ref1 = useRef()
  const { className } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
 
  return (
    <div className='btn-grp1'id='register' ref={ref1} >
      <img src={Register1}  className="button-animate1 bt1"  onClick={toggle}></img>
      <a  href="https://www.1clickcapital.com/portal/login.php">
        <img src={login} id="login"  className="button-animate1 bt2" alt="login"></img>
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

Register2.propTypes = {
  className: PropTypes.string
}

export default Register2