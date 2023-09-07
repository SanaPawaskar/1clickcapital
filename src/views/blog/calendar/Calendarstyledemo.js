import './Calendar.css'
import React, { useState, useRef}  from 'react'
import Line1 from './Calendartopline.png'
import Arrow1 from './Unionarrow - L.png'
import Arrow2 from './Unionarrow - R.png'
import Readmore from '../main/Group 207button.png'

function Calendarstyle() {
  const [data, setData] = useState([])
  const refbutton = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  const current = new Date()
  const actualMonth = "January"
  const [year, setYear] = useState(current.getFullYear())
  const myMonths = [
    { name: "January", month: "01", shortname:"Jan"},
    { name: "February", month: "02", shortname:"Feb"},
    { name: "March", month: "03", shortname:"Mar" },
    { name: "April", month: "04", shortname:"Apr"},
    { name: "May", month: "05", shortname:"May"},
    { name: "June", month: "06", shortname:"Jun"},
    { name: "July", month: "07", shortname:"Jul"},
    { name: "August", month: "08", shortname:"Aug"},
    { name: "September", month: "09", shortname:"Sep" },
    { name: "October", month: "10", shortname:"Oct"},
    { name: "November", month: "11", shortname:"Nov"},
    { name: "December", month: "12", shortname:"Dec"}
  ]
  const [mstate] = useState([
    { id:1, name: 'January', month: '01'},
    { id:2, name: 'February', month:'02'},
    { id:3, name: 'March', month:'03'},
    { id:4, name: 'April', month:'04'},
    { id:5, name: 'May', month:'05'},
    { id:6, name: 'June', month:'06'},
    { id:7, name: 'July', month:'07'},
    { id:8, name: 'August', month:'08'},
    { id:9, name: 'September', month:'09'},
    { id:10, name: 'October', month:'10'},
    { id:11, name: 'November', month:'11'},
    { id:12, name: 'December', month:'12'}
  ])
  const date = current.getMonth() + 1
  function getMonthFromString(myMonth) {
    return new Date(Date.parse('0'.concat(myMonth, "1, 2012"))).getMonth() + 1
 }
  let first = ""
  mstate.map((ms) => { 
    if (ms.id === date) {
     first = ms.name
    }
  })
  { console.log(isLoading, err) }
  const [name, setName] = useState(first)
      const handleClick2 = async (month, year) => {
            setIsLoading(true)
            try {
              const same1 = '-01T00:01:01&before='.concat(year)
              const same2 = '-31T00:01:01'            
            const after = ''.concat(year, '-', month, same1) 
            const before = '-'.concat(month, same2) 
              const response = await fetch('https://blog.1clickcapital.com/wp-json/wp/v2/posts?after='.concat(after, before), {
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
       { /* function Display(nameofmonth) {
           mstate.map((ms) => { 
            if (ms.month === 01) 
               setName(ms.shortname)
          })
          for (const myMonth of myMonths) {
            if (myMonth.name === month1) {
              const jafu = myMonths.indexOf(myMonth) - 1
              if (jafu === -1) {
                setName("December")
              } else {
                const mera = myMonths[jafu].name
                setName(mera)
              }
            }
          }
        } */ }
    //arrow left and right karne pe month change hoga
        function Example(month1) {
          for (const myMonth of myMonths) {
            if (myMonth.name === month1) {
              const jafu = myMonths.indexOf(myMonth) - 1
              if (jafu === -1) {
                setName("December")
              } else {
                const mera = myMonths[jafu].name
                setName(mera)
              }
            }
          }
        }
        function Example2(month2) {
          for (const myMonthadd of myMonths) {
            if (myMonthadd.name === month2) {
              const sana = myMonths.indexOf(myMonthadd)
              if (sana >= 11) {
                setName("December")
              } else {
                const sana1 = sana + 1
                const tera = myMonths[sana1].name
                setName(tera)
              }
            }
          }
        }
  return (
      <>
      <div className='col-of-calendar'>
        <div className='button-container'>
          <img className="Arrow-Line-Imagel " onClick={() => {
             const actualMonth = getMonthFromString(refbutton.current.innerText)
               if (year > 2022) {
                setYear(year - 1)
                   handleClick2(actualMonth, year)
               }
             
          }} src={Arrow1} alt='Arrow-Left'/>
          <button   className='Button-of-Calendar'>{year}</button>
          <img className="Arrow-Line-Imager " src={Arrow2}  alt='Arrow-Right' onClick={() => {
            if (year < current.getFullYear()) {
              setYear(year + 1)
                handleClick2(actualMonth, year)
            }
          }}/>
        </div>
        
        <img className="Calendar-Line-Image" src={Line1} alt='Blog-Underline'/>
      </div>
      <div className='col-of-calendar2'>
        <div className='button-container'>
          <img className="Arrow-Line-Imagel" src={Arrow1} alt='Arrow-Left'
            onClick={() => {
              const buttonValue = document.getElementById("btn-month")
                .innerText
              Example(buttonValue)
             
                }}/>
          <button className='Button-of-Calendar2 ' id="btn-month" ref={refbutton}>{name}</button>
          <img className="Arrow-Line-Imager" src={Arrow2}  alt='Arrow-Right'
            onClick={() => {
              const buttonValue = document.getElementById("btn-month")
              .innerText
            Example2(buttonValue)
                }}/>
        </div>
        <div className='Month-names-Left'>
          {/* <h4 className='Month-Name' onClick={() => {
              const buttonValue = document.getElementById("btn-month")
              .innerText
            Example2(buttonValue)
                }}/> */}
        <h4 className='Month-Name'onClick={() => mstate.map((ms) => { if (ms.id === 1) setName(ms.name); handleClick2('01', year) })}>Jan</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 2) setName(ms.name); handleClick2('02', year) })}>Feb</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 3) setName(ms.name); handleClick2('03', year)  })}>Mar</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 4) setName(ms.name); handleClick2('04', year)  })}>Apr</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 5) setName(ms.name); handleClick2('05', year)  })}>May</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 6) setName(ms.name); handleClick2('06', year)  })}>Jun</h4>
        </div>
        <div className='Month-names-Right'>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 7) setName(ms.name); handleClick2('07', year)  })}>Jul</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 8) setName(ms.name); handleClick2('08', year)  })}>Aug</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 9) setName(ms.name); handleClick2('09', year)  })}>Sep</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 10) setName(ms.name); handleClick2('10', year)  })}>Oct</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 11) setName(ms.name); handleClick2('11', year)  })}>Nov</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 12) setName(ms.name); handleClick2('12', year)  })}>Dec</h4>
        </div>
        <img className="Calendar-Line-Image2" src={Line1} alt='Blog-Underline'/>
      </div>  
{data.length !== 0 ? data.map((blogs) => ( 
          <div className="content-head" key={blogs.id} >
          <img className="blog-image-head"  src={blogs.yoast_head_json.og_image[0].url} alt='1-Click-Blog-Image'></img>
        <div className="blog-head-container">
          <h1 className="blog-title-head">
           {blogs.title.rendered}
          </h1>
          <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:blogs.excerpt.rendered.replace('[&hellip;]', '')} } />
          <a key={blogs.id} href={blogs.link}><img src={Readmore} className="read-blog-head" alt='Readmore-Button'></img>
      </a>
        </div>
     </div>
        )
      ) : <></>} 
      </>
  )
}
export default Calendarstyle