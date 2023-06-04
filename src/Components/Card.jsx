import React from 'react'
import cardStyle from './Card.module.css'

const Card = ({name,mascota, color}) => {

  return (
    <div className="tarjeta" style={{border:'solid black 1.5px'}}>
        <h3>Hola {name}!</h3>
        <h3>Sabemos que tu mascota facorita es <span style={{color:color}}>{mascota}</span></h3>
        <h3>De color</h3>
        <span style={{backgroundColor: color}}>{color}</span>
    </div>
  )
}

export default Card