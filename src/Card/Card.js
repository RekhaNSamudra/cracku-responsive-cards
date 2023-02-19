import React from 'react'
import '../Card/Card.css'
import Qe from '../CardContent/QE'
import {BsFillPlayCircleFill} from 'react-icons/bs'
function Card() {
  return (
    <div className="card">
      <div className='heading'>
        <p style={{marginTop: "10px", fontWeight: "500"}}>Algebra</p>
        <p>15 Concept Videos and Tests</p>
      </div>
    <BsFillPlayCircleFill style={{color: 'blue', opacity:"1", position: "absolute", top: "13%", left: "77%",zIndex: "5" ,width:"40px", height:"40px"}}/>
      <Qe/>
      <Qe/>
      <Qe/>
      <Qe/>

    </div>
  )
}

export default Card
