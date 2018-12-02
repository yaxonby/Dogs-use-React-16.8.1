import React from "react";
import  axios from "axios";
import {Component} from "react"
//import { Card, Icon, Image } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)



export default class CardDog extends Component{
	constructor(props) {
	    super(props);
	    this.state = { AnotherComponent: null,
			               randomFoto: null};
	  }

	  componentWillMount() {
			let self=this;
			fetch("https://dog.ceo/api/breeds/image/random")
			  .then(function(response) {
			      if (response.status !== 200) {
			        console.log('Looks like there was a problem. Status Code: ' +
			          response.status);
			        return;
			      }
			      // Examine the text in the response
			      response.json().then(function(data) {
								self.setState({ randomFoto: data.message });
			        console.log(data.message);
			      });
			    }
			  )
			  .catch(function(err) {
			    console.log('Fetch Error :-S', err);
			  });

			/*
			axios.get("https://dog.ceo/api/breeds/image/random")
			.then(function (AnotherComponent) {
				this.setState({ AnotherComponent })
				loadList=AnotherComponent.data.message;
					console.log(AnotherComponent);
				})
				*/
			}

	render () {

		if (!this.state.randomFoto) { return <div>Loading...</div>
	  } else {
			console.log(this.state.randomFoto);
	 	 return ( <div> Загрузилась
<img src={this.state.randomFoto}/>
			 </div>);
	  };
}}


		/*
console.log (AnotherComponent)
		let {AnotherComponent} = this.state;
		    if (!AnotherComponent) { return <div>Loading...</div>
		    } else {
		      return ( <div> {AnotherComponent.data.message} </div>);
		    };

}
}

*/

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
