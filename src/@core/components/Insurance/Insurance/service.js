function getOtp(adharNumber, policyToken) {
    const MyValue = JSON.stringify({
    aadhaarNumber: adharNumber
      })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Policy-Token' : policyToken},
        body: MyValue 
      }
   fetch('https://indiafirstapi.1clickcapital.com/aadhaar/getotp', requestOptions)
   .then((res) => {
    res.text()
   console.log(res)
}
    )
}
// function generatePdf () {
//     const requestOptions = {
//         method: 'Get',
//         headers: { 'Content-Type': 'application/json', 'Policy-Token' : policyToken},
//         body: MyValue 
//       }
//       fetch('https://indiafirstapi.1clickcapital.com/pdf/download/loanAgreement', requestOptions)
//       .then((res) => {
//         res.text()
//        console.log(res)
//     }
//         )    
// }
function AddWitness(MyValue, Token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Policy-Token' : Token},
        body: MyValue 
      }
   fetch('https://indiafirstapi.1clickcapital.com/witness', requestOptions)
    .then(res => res.json)
    .then(data => console.log(data))
}

function verifyotpGetData (token, Otp, adharNumber) {
     let response = {}
    const MyValue = JSON.stringify({
        otp: Otp,
        aadhaarNumber: adharNumber
          })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Policy-Token' : token},
        body: MyValue 
      }
      fetch('https://indiafirstapi.1clickcapital.com/aadhaar/verifyotp/getdata', requestOptions)
      .then((res) => {
          response = res.json()  
 })
  return response
}
 export {getOtp, verifyotpGetData, AddWitness }