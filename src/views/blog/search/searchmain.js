import {React, useState, useEffect} from "react"
// import { Link} from 'react-router-dom'
import image1 from '../calendar/1 click -Logo for Light BG 4.svg'
import Readmore from '../main/Group 207button.png'
// import  Id from './index'
 export default function searchMain(props)  {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  
  useEffect(() => {
    fetch("https://blog.1clickcapital.com/wp-json/wp/v2/posts/".concat(props.id))
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div></div>
  } else {
    return (
      <div className="content-head" key={items.id} >
      <img className="blog-image-head"  src={ items.yoast_head_json.og_image[0].url === undefined ? image1 : items.yoast_head_json.og_image[0].url } alt='image'></img>
    <div className="blog-head-container">
      <h1 className="blog-title-head">
       {items.title.rendered}
      </h1>
      <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:items.excerpt.rendered.replace('[&hellip;]', '')} } />
      <a key={items.id} href={items.link}><img src={Readmore} className="read-blog-head"></img>
      </a>
    </div>
 </div>

)
  }
}