import React from 'react'
import "@styles/base/components/_card.scss"
import Footer from "../../pages/Footer/Footer"
import Button from "../../@core/components/Registration/index"
import './career.css'
import Job from "./Job.json"
import Swal from 'sweetalert2'
import Viewjob from './Viewjob.png'
function Career() {
    const newalert = (getid) => {
      const data =  Job.filter(inpData => {
            return inpData.id === getid 
        })
        console.log(data)
        data.map(inpd => { 
            Swal.fire({
                title:"Qualities",
                html: inpd.qualities,
                confirmButtonText: "<a href='mailto:hr@1clickcapital.com'>Apply</a>",
                confirmButtonColor: '#FFA500',
                showCloseButton:true
            })
        })
    }
    return (
        <>
        <helmet>
        <title>1 Click Capital</title>
        <link rel="canonical" href="https://1clickcapital.com/career" />
        <link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
        </helmet>
        <Button/>
            <div className="career card">
                <h3 className="career-title">Job Opportunities in 1Click Capital</h3>
                <div className="row-job">
                    {
                        Job.map(inputData => {
                            return (
                            <div className="job column-job" key={inputData.id}>
                                <p className='career-text'>Job title : {inputData.job_title}</p>
                                <p className='career-text'>Work Location: {inputData.work_location}</p>
                                <p className='career-text'>Experience: {inputData.experience}</p>
                                <img className='job-view' src={Viewjob} alt="ViewJob" onClick={() => newalert(inputData.id) }></img>
                            </div>
                            ) 
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default  Career