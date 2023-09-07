import Month from "./month"
import Date from "./date"
import Year from "./year"
import './style.css'

const calendar = () => {
    return (
        <div className="calendar-div">
             <Year/>
        <Month/>
        <Date/>
       
        </div>
    )
}
export default calendar