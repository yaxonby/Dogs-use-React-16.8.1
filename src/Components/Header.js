import React from "react";
import {Component} from "react"
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
  <h1> Dog pictures </h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-breeds'>List all breeds</Link></li>
        <li><Link to='/random-image'> Random image</Link></li>
        <li><Link to='/breed-random-image'> Browse breed list</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
