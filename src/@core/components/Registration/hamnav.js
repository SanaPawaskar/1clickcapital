import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import Dropd from './Dropd'
import './Dropd.css'


function Registerhamnav(props) {
  const { className } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  return (
    <div className='btn-grp2'>
      <a className="menu-item-hamnav" alt="Register" onClick={toggle}>Register</a>
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

Registerhamnav.propTypes = {
  className: PropTypes.string
}

export default Registerhamnav