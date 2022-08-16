import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import Footer from './components/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
        <Link to="/main">Main</Link> | {''}
        <Link to="/contact">Contact</Link> | {''}
        </nav>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
}

