import React from "react";
import {Component} from "react";
import Fab from '@material-ui/core/Fab';


export default class ViewRandomImage extends Component{
	constructor(props) {
	    super(props);
	    this.state = { AnotherComponent: null,
			               randomFoto: null};
this.loadData=this.loadData.bind(this)
	  }

		loadData() {
				let self=this;
			const { dispatch} = this.props
			fetch("https://dog.ceo/api/breeds/image/random")
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

	//	if (!this.state.randomFoto) { return <div>Loading...</div>
//	  } else {
			console.log(this.state.randomFoto);
	 	 return ( <div className="positionCenter"> <h3> View random image of dog</h3>
			 <div>
<img src={this.state.randomFoto}/>
<Fab color="default" variant='round' onClick={this.loadData}> Next</Fab>
</div>
			 </div>);
//	  };
}}
