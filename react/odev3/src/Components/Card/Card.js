import React from 'react'
import "./Card.scss"
import { getDate , dayNumber } from '../../Helper/Helper'
const Card = ({icon,high,low,timeStamp}) => {
    {getDate(timeStamp)}
    return (
        <div className="card">
        <h3>{dayNumber[getDate(timeStamp)]}</h3>
        <img src = {`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        <p><b>{high}</b><span>{low}</span></p>
   </div>
    )
    
}

export default Card
