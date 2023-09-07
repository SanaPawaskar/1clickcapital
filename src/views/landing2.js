import {useState, useEffect} from 'react'
import App from '../@core/components/mainanimate/index'
import App1 from '../App'
const Hide = () => {
 const [showComponent, setShowComponent] = useState(true)
 useEffect(() => {
    setTimeout(() => {
        setShowComponent(!showComponent)
    }, 4500)
 }, [])
  return <>{showComponent && <><App/><App1/></> }</>
}
export default Hide