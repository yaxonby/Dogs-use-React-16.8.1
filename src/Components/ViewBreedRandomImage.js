import React from "react";
import {Component} from "react";
import MyImage from "./function/MyImage"
import Fab from '@material-ui/core/Fab';

export default class ViewBreedRandomImage extends Component{
	constructor(props) {
	    super(props);
	this.state = {randomFoto: null};
	}

	render () {
	const 	{ListImageBreed, NextSeeBreed, breedName, urlRandom, selfprops}=this.props
		let	 {randomFoto}=this.state;
		console.log("ListImageBreed1=", ListImageBreed)

		if (!ListImageBreed) {
		return (<p></p>)
				} else {
console.log("ListImageBreed2=",ListImageBreed)
		console.log("randomFoto", this.state.randomFoto);
		return (
			<div className="positionCenter">  <h3> View breed {breedName} random image </h3>

				<div>
					<img src={ListImageBreed}/>
					<Fab color="default" variant='round'
					 onClick={NextSeeBreed.bind(null, selfprops, breedName, urlRandom)}
					 > Next</Fab>
				</div>
			</div>);
						  };
		}
	}
