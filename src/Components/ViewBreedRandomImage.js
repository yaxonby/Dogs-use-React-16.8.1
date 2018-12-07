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
		<div>  <p> View breed random image </p>
			<Fab color="default" variant='round' onClick={this.loadData}> Next</Fab>
			<div>
				<img src={this.state.randomFoto}/>
			</div>
		</div>);
		//			  };
	}
}
