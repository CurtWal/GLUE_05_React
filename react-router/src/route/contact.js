import React, { Component } from 'react'
import contactData from '../number.json'
import {Link, Outlet} from 'react-router-dom'

export default class contact extends Component {
  render() {
    return (
        
        <div style={{display: "grid"}}>
            <h3>Click the Name for Contact Info</h3>
        {contactData.map(contact => {
            return(
                <Link to={ `/contact/${contact.Name} ${contact.Num}`}  key={contact.id}>{contact.Name}</Link>
            )
        })}
        <Outlet/>
      </div>
    )
  }
}
