
import {React, useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import "../style.css"

//  import Readmore from './index'
 function Exra()  {
  const [error, setError] = useState(null)

  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://blog.1clickcapital.com/wp-json/wp/v2/posts")
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
    return <div>Loading...</div>
  } else {
    const pathname = window.location.pathname.replace('/blogs/', '')
  return (
    <>
    {items.map((blogs) => (pathname !== blogs.slug ? (<div className="option" key={blogs.id} id="exra"  onClick={() => navigate("/blogs/".concat(blogs.slug)) & window.location.reload(false)}
    ><img  className="option-image" src={blogs.yoast_head_json.og_image[0].url} alt="opt1"></img><p className="option-title">{blogs.title.rendered}</p></div>) : null
    ))}
    </>
  )
    }
   
 
}
 export default Exra