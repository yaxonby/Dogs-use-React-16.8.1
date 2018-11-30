import React from "react";
import  axios from "axios";
import {Component} from "react"
//import { Card, Icon, Image } from 'semantic-ui-react';

export default class CardDog extends Component{
	constructor(props) {
	    super(props);
	    this.state = { AnotherComponent: null};
	  }

	  componentWillMount() {
			axios.get("https://dog.ceo/api/breeds/image/random").then(function (AnotherComponent) {
				this.setState({ AnotherComponent })
				loadList=AnotherComponent.data.message;
					console.log(AnotherComponent);
				})
			}

	render () {

		let {AnotherComponent} = this.state;
		    if (!AnotherComponent) { return <div>Loading...</div>
		    } else {
		      return ( <div> {AnotherComponent.data.message} </div>);
		    };

}
}
		/*
let loadList;
//="https://images.dog.ceo/breeds/otterhound/n02091635_919.jpg";
	//	 Random image
let	url="https://dog.ceo/api/breeds/image/random"

	axios.get(url).then(function (response) {
			console.log(response);
			for(let i in response) {
				console.log(response.data.message)


				if (response.data.status===200)	{	loadList=response.data.message;  return (
					<div>
					<img src={loadList}/>
					</div>
				)}
		}
			console.log("loadList", loadList)

		}
	)
		.catch(function (error) {
			console.log(error);
		});


	return (	<article>	</article>)
}
*/
//}

/*
<img className="CardImage" src={loadList} />
<div className="CardContent">
	<div className="CardHeader">Matthew</div>
	<div className="CardMeta">
		<span className='CardDate'>Joined in 2015</span>
	</div>
	<div className="CardDescription">Matthew is a musician living in Nashville.</div>
</div>
<div className="CardContent">
	<a>
		<div name='user' className="CardIcon"/>
		22 Friends
	</a>
</div>
*/
