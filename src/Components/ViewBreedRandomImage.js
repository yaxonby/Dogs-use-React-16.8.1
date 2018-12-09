import React from "react";
import {Component} from "react";
import MyImage from "./function/MyImage"
import Fab from '@material-ui/core/Fab';

export default class ViewBreedRandomImage extends Component{
	constructor(props) {
	    super(props);
	this.state = {randomFoto: null};

	}

/*
	loadData() {
		let self=this;
		const { dispatch} = this.props

		console.log("ListImageBreed3", this.props)
//console.log("ListImageBreed3=", ListImageBreed)
		let url="https://dog.ceo/api/breed/"+this.props.ListImageBreed+"/images/random"
							fetch(url)
								.then(function(response) {
										if (response.status !== 200) {
											console.log('Looks like there was a problem. Status Code: ' +
												response.status);
											return;
										}
										response.json().then(function(data) {
						self.setState({ randomFoto: data.message });
										});
									}
								)
								.catch(function(err) {	console.log('Fetch Error :-S', err)	});
						}

						componentDidMount() {
					    this.loadData()
					  }
*/
	render () {
	const 	{ListImageBreed, NextSeeBreed, breedName}=this.props
		let	 {randomFoto}=this.state;
		console.log("ListImageBreed1=", ListImageBreed)

		if (!ListImageBreed) {
		return (<p></p>)
				} else {
console.log("ListImageBreed2=",ListImageBreed)
				//			if (!this.state.randomFoto) { return <div>Loading...</div>
				//		  } else {
		console.log("randomFoto", this.state.randomFoto);
		return (
			<div className="positionCenter">  <h3> View breed {breedName} random image </h3>

				<div>
					<img src={ListImageBreed}/>
					<Fab color="default" variant='round'
					 onClick={NextSeeBreed.bind(null, breedName)}
					 > Next</Fab>
				</div>
			</div>);
						  };
		}
	}




/*
	render () {
		const {ListImageBreed}=this.props
		if (!ListImageBreed) {
		return (<p></p>)
				} else {
				console.log(ListImageBreed);
			 	 return (
					 <div>
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
*/


/*

import React from "react";
import {Component} from "react";
import Fab from '@material-ui/core/Fab';

export default class ViewBreedRandomImage extends Component{

constructor(props) {
super(props);
this.state = {randomFoto: null};
this.loadData=this.loadData.bind(this)
}

loadData() {
	let self=this;
	const { dispatch} = this.props
						fetch("https://dog.ceo/api/breed/akita/images/random")
							.then(function(response) {
									if (response.status !== 200) {
										console.log('Looks like there was a problem. Status Code: ' +
											response.status);
										return;
									}
									response.json().then(function(data) {
					self.setState({ randomFoto: data.message });
									});
								}
							)
							.catch(function(err) {	console.log('Fetch Error :-S', err)	});
					}

					componentDidMount() {
				    this.loadData()
				  }

render () {
	let	 {randomFoto}=this.state;

			//			if (!this.state.randomFoto) { return <div>Loading...</div>
			//		  } else {
	console.log(this.state.randomFoto);
	return (
		<div className="positionCenter">  <h3> View breed random image </h3>

			<div>
				<img src={this.state.randomFoto}/>
				<Fab color="default" variant='round' onClick={this.loadData}> Next</Fab>
			</div>
		</div>);
		//			  };
	}
}
*/
