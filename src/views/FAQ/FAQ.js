import React, { useState} from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import './FAQ.css'
import {Helmet} from "react-helmet"
function FAQ() {
    const [open, setOpen] = useState('0')
    const toggle = (id) => {
        if (open === id) {
            setOpen()
        } else {
            setOpen(id)
        }
    }
  return (
    <>
    <Helmet>
    <title>Example Site - Frequently Asked Questions(FAQ)</title>
  <script type="application/ld+json">
  {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
        "@type": "Question",
        name: "How much time will it take to get approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It usually takes us around 12-48 hours to approve your case."
        }
      }, {
        "@type": "Question",
        name: "Do I need to put down any collateral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, 1 Click Capital provides you business loan completely collateral free. It is an Unsecured type of Payroll Financing"
        }
      }, {
        "@type": "Question",
        name: "Is there a minimum payroll value to get payroll financing and what is it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the minimum payroll required is 20 lakhs to be eligible for payroll financing."
        }
      }
    ]
    })}
    </script>
  </Helmet>
    <div className='card-of-faq' id='FAQ'>
   <div className='text-heading-of-faq'> Frequently Asked Questions</div>
   <Accordion open={open} toggle={toggle}>
      <AccordionItem >
        <AccordionHeader targetId="1">How much time will it take to get approval?</AccordionHeader>
        <AccordionBody accordionId="1">
        It usually takes us around 12-48 hours to approve your case.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="2">What are the documents required from your side?</AccordionHeader>
        <AccordionBody accordionId="2">
        We ask for only the most basic documents from you, that too only for the first time. Following is a list of documents you will have to submit:
        <ul>
        <li>Date of Incorporation Proof</li>
        <li>Company Pan Card Proof</li>
        <li>Registered Address Proof</li>
        <li>Last 2 years Financials</li>
        <li>Bank Statement of 1 Year</li>
        <li>Payroll Statement of 1 Year</li>
        </ul>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="3">Do I need to put down any collateral?</AccordionHeader>
        <AccordionBody accordionId="3">
        No, 1 Click Capital provides you business loan completely collateral free. It is an Unsecured type of Payroll Financing
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="4">Is there a minimum payroll value to get payroll financing and what is it?</AccordionHeader>
        <AccordionBody accordionId="4">
        Yes, the minimum payroll required is 20 lakhs to be eligible for payroll financing.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="5">What is the repayment structure?</AccordionHeader>
        <AccordionBody accordionId="5">
        The repayment structure is either daily or weekly.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="6">If I have an existing loan somewhere else, can I still get a loan?</AccordionHeader>
        <AccordionBody accordionId="6">
        Yes, once our credit team has gone through all your documents and approved it you get a loan.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="7">What is the loan tenure?</AccordionHeader>
        <AccordionBody accordionId="7">
        The loan tenure is 30 days or 1 month
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="8">How much amount will be sanctioned for the first time?</AccordionHeader>
        <AccordionBody accordionId="8">
        The maximum limit is up to 60% of your total monthly salary payout.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="9">Do I have to submit documents again after 1 month?</AccordionHeader>
        <AccordionBody accordionId="9">
        No, you only have to submit your documents in the start, once you are eligible and approved you only have to mail us for the funding.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="10">Will I have to physically visit your office?</AccordionHeader>
        <AccordionBody accordionId="10">
        No, that’s the best part about 1 Click Capital, that everything here is done digitally, so you can apply from anywhere you want and get your funding started.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="11">Can the sanctioned amount be increased?</AccordionHeader>
        <AccordionBody accordionId="11">
        Yes, once you have built a business relationship with us, we can increase your amount limit after a few monthly cycles.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="12">How to enroll for working capital or supply chain financing?</AccordionHeader>
        <AccordionBody accordionId="12">
        Our Payroll Financing service known as 1 Click Payroll is our gateway product to all our other services. Once we have built a good relationship we can look into our other services.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="13">Does my CIBIL score need to be very high for me to get approval?</AccordionHeader>
        <AccordionBody accordionId="13">
        CIBIL score is not the only criteria for approval, there are multiple other factors that matter for your case to be approved.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem >
        <AccordionHeader targetId="14">How to enroll for Salary Advance?</AccordionHeader>
        <AccordionBody accordionId="14">
        Once your company ties up with us, your HR will fill out your details in a structured sheet. You will be given a login id from which you can request an advanced salary.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="15">In whose bank account will the money be credited?</AccordionHeader>
        <AccordionBody accordionId="15">
        The financing amount will be credited to your official company account and not any personal account.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
    </div>
    </>
  )
}

export default FAQ