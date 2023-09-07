
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
      const response = await fetch('https://indiafirstapi.1clickcapital.com/pdf/download/assignmentDeed', requestOptions)
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      setPdfUrl(objectUrl)
    }
    fetchapi()
  }, [])
  return (
    <>
          <h2 className="app-header">Assignment Deed</h2>
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
