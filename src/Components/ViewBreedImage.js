import React from "react";
import {Component} from "react";
import MyImage from "./function/MyImage"

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
		return (<p>...Loading...</p>)
				} else {
				console.log(dogBreed);
			 	 return (
					 <div>
						 <div>
							 {dogBreed.map(function(elem, index) {return(
								 <li key={index}>

                    <MyImage src={elem}/>

								  </li>
							 )}
						 )}
						 </div>
				 </div>
			 );
			  };
}}

//<img src={elem}/>
