import React from 'react'
import './Card.css'
const Card = (props)=> {
  return (
    <div className='prop'>
    <div className='title'>
      {props.title}
    </div>
    <p>{props.description}</p>
    </div>
  )
}

export default Card
