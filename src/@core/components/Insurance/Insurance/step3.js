
import React, { useEffect, useState} from "react"
import "./style.css"

import Loan from './Application of Assignment (1).pdf' 

// mport React, { useState } from 'react';

// function App() {
  // return (
  //   <div>
  //     <button onClick={fetchPdf}>Fetch PDF</button>
      
  //   </div>
  // );

function Step3(props) {
  // const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [items, setItems] = useState([])
  const [pdfUrl, setPdfUrl] = useState(null)
  useEffect(() => {
    const requestOptions = {
      method: 'Get',
      headers: { 'Content-Type': 'application/pdf', 'Policy-Token' : props.Token}
    }
    const fetchapi = async () => {
      const response = await fetch('https://indiafirstapi.1clickcapital.com/pdf/download/applicationAssignment', requestOptions)
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      setPdfUrl(objectUrl)
    }
    fetchapi()
  }, [])//
   
  //   fetch("https://indiafirstapi.1clickcapital.com/pdf/download/loanAgreement", requestOptions)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true)
  //         setItems(result)
  //         console.log(items)
  //       },
  //       (error) => {
  //         setIsLoaded(true)
  //         setError(error)
  //         alert(error)
  //         console.log(items)
  //       }
  //     )
  // }, [])
  // if (error) {
  //   return <div>Error: {error.message}</div>
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>
  // } else {
  return (
    <>
          <h2 className="app-header">Application and Notice of Assignment</h2>
          {/* <iframe src={Loan} className="pdf-frame" width="70%" height="600px"></iframe> */}
          {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="70%"
          height="600px"
          className="pdf-frame"
          title="Application and Notice of Assignment"
        />
      )}
    </>
  ) 
}
export default Step3
