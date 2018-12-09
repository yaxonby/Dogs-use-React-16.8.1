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
		const {ListImageBreed, breedName}=this.props
		if (!ListImageBreed) {
		return (<p></p>)
				} else {
				console.log(ListImageBreed);
			 	 return (
					 <div>
					 <h3> View images breed {breedName}  </h3>
						 <div>
							 {ListImageBreed.map(function(elem, index) {return(
								<li className="liStyle" key={index}>
								{console.log(elem)}
                    				<MyImage src={elem}/>
								</li>
							 )}
						 	)}
						 </div>
				 	</div>
			 );
		};
	}
}

//<img src={elem}/>
