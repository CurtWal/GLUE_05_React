import React from 'react'
import { useParams } from 'react-router-dom'

export default function Number(){
    let Params = useParams();
  return (
    <div>
        <h2>Contact Info <br></br> {Params.contactNum} </h2>
        
    </div>
  )
}