import React, { useEffect, useState } from "react"
// import {Button} from "reactstrap"
// import Next from './submit.png'
import './style.css'
import Swal from "sweetalert2"
// import Loan2 from './newLoan Agreement-V1 2.pdf'
import { useNavigate } from "react-router-dom"

import PolicyHolder from './policyHolder.png'
import Witness1 from './App.png'
function Step5(props) {
  const [pdfUrl, setPdfUrl] = useState(null)
    const [Esign, setEsign] = useState(false)
    const navigate = useNavigate()
    function Confirmation() {
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Application Is Submited',
          focusConfirm: true,
          preConfirm: () => {
            navigate('/products/1-click-insurance-funding')
          }
        })
   }
  
    useEffect(() => {
      const requestOptions = {
        method: 'Get',
        headers: { 'Content-Type': 'application/pdf', 'Policy-Token' : props.token}
      }
      const fetchapi = async () => {
        const response = await fetch('https://indiafirstapi.1clickcapital.com/pdf/download/loanAgreement', requestOptions)
        const blob = await response.blob()
        const objectUrl = URL.createObjectURL(blob)
        setPdfUrl(objectUrl)
      }
      fetchapi()
        window.scrollTo(0, 0)
         }, [])
           function EssignProcess () {
            const requestOptions = {
              method: 'Get',
              headers: { 'Content-Type': 'application/json', 'Policy-Token' : props.token}
            }
            fetch('https://indiafirstapi.1clickcapital.com/pdf/esign', requestOptions)
            .then(
              function(response) {
                if (response.status !== 200) {
                  response.json().then(function(result) {
                    alert(result.message)
                  })
                  return
                }
                response.json().then(function(result) {
                  console.log(result)
                  Confirmation()
                })
              })
           }
           function MergedPdf () {
            const element = document.getElementById('Esign-check')
            if (element.checked) {
              const requestOptions = {
                method: 'Get',
                headers: { 'Content-Type': 'application/json', 'Policy-Token' : props.token}
              }
              fetch('https://indiafirstapi.1clickcapital.com/pdf/download/merged', requestOptions)
              .then(
                function(response) {
                  if (response.status !== 200) {
                    response.json().then(function(result) {
                      alert(result.message)
                    })
                    element.checked = false
                    return
                  }
                  response.json().then(function(result) {
                    console.log(result)
                  })
                })
           } 
           
           }
//   const navigate = useNavigate()

      useEffect(() => {
     window.scrollTo(0, 0)
      }, [])
    return (
         
        Esign ? <div className="outer-frame"><span className="crossButton-Esign" onClick={() => {
          setEsign(false)
          }}>X</span><iframe className="essign-frame" src="https://app.digio.in/#/gateway/login/DID230123150029681ECVEXFII7OP5J2/vI3atY/8976412394">
          </iframe></div>  : <><h2 className="app-header">Loan Agreement</h2>
          {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="70%"
          height="600px"
          className="pdf-frame"
          title=""
        />
      )}
        <span className="Esign-check"><input type="checkbox" id="Esign-check" onChange={MergedPdf} className="rounded-checkbox"/>&nbsp;I had read all documents and I here by giving my consent on the same <br></br>&nbsp;&nbsp;&nbsp;Click Below To E-sign as</span>
        <div className="essign">
    
  
      <img src={Witness1} onClick={() => {
         const element = document.getElementById('Esign-check')
         if (element.checked) {
            EssignProcess()
         } else {
          alert("Please read all documents ,give your consent on the same  and Check the checkbox")
         }
      }}/>
       </div>
      </>
    )
}
export default Step5
