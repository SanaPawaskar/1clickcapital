import React, { Component, useState } from 'react'
import OtpInput from 'react-otp-input'

export default function Otp () {
    const [otp, setotp] = useState('')
//   state = { otp: '' }

//   handleChange = (otp) => setotp({ otp })
  function handleChange (value) {
     setotp(value)
   }
 
    return (
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>&nbsp;</span>}
      />
    )
  
}