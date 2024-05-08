import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card' style={{ overflow:"hidden"}}>
      <img src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg" alt="" 
       width="100%" style={{border:"2px solid black"}} />
  <h1>{props.title}</h1>
  <p> {props.Description}</p>

    </div>
  )
}

export default Card
