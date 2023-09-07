

import {React, useState } from "react"
import Component from '../main/main'
import Calendar from '../calendar/Calendarstyledemo'
import SearchMain from "./searchmain"
export default function Bloghead (props) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  const [show, setShow] = useState(true)
  const [message, setMessage] = useState(null)
  const handleClick = async (message1) => {
      setIsLoading(true)
    try {
      const response = await fetch('https://blog.1clickcapital.com/wp-json/wp/v2/search?search='.concat(message1), {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setErr(err.message)
    } finally {
      setIsLoading(false)
    }
    
  }
  const handleClick1 = (event) => {
      if (event.key === "Enter") {
        handleClick(message)
        props.getValue(setShow(true))
      } else {
       setShow(false)
       props.getValue(show)
    }
  }
    return (
      <> 
         <div className="search-section">
            <input className="search" type="text" placeholder="Search here"  onChange={(event) => {
                const result = event.target.value
                result === "" ? setMessage(null) : setMessage(result)
              }} onKeyUp={handleClick1}/>
            <span className="searchicon" onClick={handleClick1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></span>
            </div>
            <Calendar/>
            {console.log(err)}
            {
              isLoading ? <h2>Loading please wait...</h2> : <></>
            }
           {console.log(isLoading)}
             {
              data.map((blogs) => (
                <SearchMain id={blogs.id}/>
              )
              )
              }
               {message === null ? <Component/> : <></>}
      </>

)
  
}