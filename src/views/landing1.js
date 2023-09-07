import {useState, useEffect} from 'react'
import App from '../App'
const Show = () => {
 const [showComponent, setShowComponent] = useState(false)
 useEffect(() => {
    setTimeout(() => {
        setShowComponent(!showComponent)
    }, 4500)
 }, [])
  return <>{showComponent && <App/> }</>
}
export default Show