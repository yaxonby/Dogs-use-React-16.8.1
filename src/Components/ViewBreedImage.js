import React from "react";
import {Component} from "react";

export default class ViewBreedImage extends Component{
	constructor(props) {
	    super(props);
	  }

		shouldComponentUpdate(nextProps, nextState, nextContext) {
			console.log("nextProps=", nextProps,"nextState=", nextState, "nextContext=", nextContext)
			return true
		}

	render () {

const {dogBreed}=this.props

		if (!dogBreed) {
			return ( <div>
				<div>...Loading...</div>
				</div>
			)

		} else {

			console.log(dogBreed);
	 	 return (
			 <div>
			 <div>
			 {dogBreed.map(function(elem, index) {return(
				 <li key={index}>
      <img src={elem}/>
				  </li>
			 )}
		 )}

			 </div>
		 </div>
	 );
	  };
}}
