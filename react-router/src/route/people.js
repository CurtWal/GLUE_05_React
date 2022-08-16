import React from 'react'
import { useParams } from 'react-router-dom'

export default function People(){
    let Params = useParams();
  return (
    <div>
        <h2>{Params.peopleName} </h2>
    </div>
  )
}

