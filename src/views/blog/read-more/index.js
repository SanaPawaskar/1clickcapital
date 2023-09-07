
import "@styles/base/components/_card.scss"
import "../style.css"
import Exra from './exra'
import {React, useState, useEffect} from "react"
function Readmore()  {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  useEffect(() => {
    const pathname = window.location.pathname
        const value = pathname.split("/").splice(-1)
    fetch("https://blog.1clickcapital.com/wp-json/wp/v2/posts?slug=".concat(value))
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

    const tag = items.map(blogs => (
      blogs.tags  
    ))

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
       
    return (
        items.map(blogs => (
          <div className="blog card">
          <section className="main"> 
           <div className="content" key={blogs.id}  >
           <div className="image-blog-container">
         <img className="blog-image"  src={blogs.yoast_head_json.og_image[0].url}></img>
         <div className="tblog-content">
       <h2 key={blogs.id}>{blogs.title.rendered}</h2>
            <div  className="blog-content" dangerouslySetInnerHTML={ {__html:blogs.excerpt.rendered.replace('[&hellip;]', '')} } />
       </div>
       </div>
         <div  className="extra-content" dangerouslySetInnerHTML={ {__html:blogs.content.rendered} } />
         </div>
         </section> 
         <span className="black-line"></span>
          <h3 className="option-heading">You Might also like</h3>
          <section className="more">
          <Exra/>
          </section>
             <section className="blog-footer">
             <span className="black-line"></span>
             <h3 className="comment-heading">Leave a Reply</h3>
             <input type="text" className="comment-section" placeholder="Your Comment here....."></input>
             <div className="comment-details">
             <input type="text" className="blog-comment-details1 blog-detail-size" placeholder="Name required"></input>
             <input type="text" className="blog-comment-details2 blog-detail-size" placeholder="Email required"></input>
             <input type="text" className="blog-comment-details3 blog-detail-size" placeholder="Website"></input>
             
             </div>
             <button className="Submit-comment-button">Submit</button>
             </section>
           </div>
        ))
      
    )
  }
 
}

 export default Readmore
