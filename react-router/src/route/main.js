import React, { Component } from 'react'
import peopleData from '../data.json'
import {Link, Outlet} from 'react-router-dom'

export default class main extends Component {
  render() {
    return (
      <div style={{display: "grid", marginTop: "25px"}}>
        <h3>Click to see something surprising</h3>
        {peopleData.map(people => {
            return(
                <Link to={ `/main/${people.Name} has ${people.fingers} fingers`}  key={people.id}>{people.Name}</Link>
            )
        })}
        <Outlet/>
      </div>
    )
  }
}
