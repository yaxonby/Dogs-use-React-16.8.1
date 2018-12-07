import React from "react";
import {Component} from "react"
import { Link } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';

const Header = () => (
  <header>
  <h1> Dog pictures </h1>
    <nav>

	  	<Link to='/'> <Fab color="default" variant='extended'> <span>Home </span></Fab> </Link>
	  	<Link to='/all-breeds'> <Fab color="default" variant='extended'><span>List all breeds</span></Fab> </Link>
			<Link to='/random-image'> <Fab color="default" variant='extended'><span>Random image</span></Fab> </Link>
			<Link to='/breed-random-image'> <Fab  color="default" variant='extended'><span> Browse breed list</span></Fab></Link>


    </nav>
  </header>
)

export default Header







//  <ul>
	//   <Link to='/'> <Button variant="contained" color="primary"> Home </Button> </Link>
	//   <Link to='/all-breeds'> <Button ariant="outlined" color="primary">List all breeds</Button> </Link>
	//   <Link to='/random-image'> <Button variant="raised" color="primary"> Random image</Button> </Link>
//		 <Link to='/breed-random-image'> <Fab  color="primary"> Browse breed list</Fab></Link>
//  </ul>
