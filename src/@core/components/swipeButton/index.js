import React from "react"
// import "./styles.css"
import ReactSwipeButton from 'react-swipe-button'


export default function Swipe() {
 
  return (
        <ReactSwipeButton
          text="SWIPE TO READMORE"
          color="#f00"
          onSuccess={onSucces}
        />
  )
}
