
import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
//import ViewAllBreeds from  "../Components/ViewListAllBreeds";
//import ViewBreedImage from "../Components/ViewBreedImage";
import Loadable from 'react-loadable';
import path from 'path';
import Loading from '../Components/function/Loading';
import fakeDelay from '../Components/function/fakeDelay';


let LoadViewListAllBreeds = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/ViewListAllBreeds")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/ViewListAllBreeds")
});


let LoadViewBreedRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/ViewBreedRandomImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/ViewBreedRandomImage")
});

//let LoadViewBreedImage = Loadable({
//  loader: () => fakeDelay(400).then(() => import("../Components/ViewBreedImage")),
//  loading: Loading,
//	serverSideRequirePath: path.resolve(__dirname, "../Components/ViewBreedImage")
//});

class ViewBreedRandomImageContainer extends Component {
	constructor(props) {
		super(props);
		this.state={error: null}
		this.SeeBreed=this.SeeBreed.bind(this)
		this.loadSeeBreed=this.loadSeeBreed.bind(this)
			this.loadData=this.loadData.bind(this)
	}

	SeeBreed(breed) {
	console.log("пришло", breed )
		const { dispatch} = this.props
		dispatch({  type: "LOAD_IMAGE_BREED",  payload: null})
		dispatch({  type: "LOAD_LIST_SUB_BREED",  payload: null})
    dispatch({  type: "CHOOSE_BREED",  payload: breed})
		console.log("SeeBreed", breed )
		this.loadSeeBreed(breed)
	}

loadSeeBreed(breed) {
  const { dispatch} = this.props
       	//"https://dog.ceo/api/breed/akita/images/random")
  let url="https://dog.ceo/api/breed/"+breed+"/images/random"
  fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
  	dispatch({  type: "ADD_RANDOM_IMAGE_BREED",  payload: data.message})
        });
      }
    )
    .catch(function(err) {	console.log('Fetch Error :-S', err)	});
}

/*
loadData() {
	let self=this;
	const { dispatch} = this.props

	console.log("ListImageBreed3", this.props)
//console.log("ListImageBreed3=", ListImageBreed)
	let url="https://dog.ceo/api/breed/"+this.props.RandomImageBreed+"/images/random"
						fetch(url)
							.then(function(response) {
									if (response.status !== 200) {
										console.log('Looks like there was a problem. Status Code: ' +
											response.status);
										return;
									}
									response.json().then(function(data) {
					dispatch({  type: "ADD_RANDOM_IMAGE_BREED",  payload: Object.entries(data.message)})
				//	self.setState({ randomFoto: data.message });
									});
								}
							)
							.catch(function(err) {	console.log('Fetch Error :-S', err)	});
					}
*/


	loadData() {
    const { dispatch} = this.props
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function(data) {
      dispatch({  type: "ADD_LIST_DOG",  payload: Object.entries(data.message)})
      console.log(Object.entries(data.message))
          });
        }
      )
      .catch(function(err) {	console.log('Fetch Error :-S', err)	});
  }


componentDidCatch(errorString, errorInfo) {
this.setState({error: errorString});
ErrorLoggingTool.log(errorInfo);
}

	componentDidMount() {
		this.loadData()
	}

render() {
  if(this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>)

		const  {ListImageBreed, listBreed, ListSubBreed, RandomImageBreed, breedName}=this.props

		if (!listBreed) {
			return (<p>Loading...</p>)
		} else {
			console.log(  "listBreed",  listBreed)
			const listDogs = listBreed.map((elem, index) => (
			<LoadViewListAllBreeds post={elem} key={index} SeeBreed={this.SeeBreed} ListSubBreed={ListSubBreed} />
			))
			return (
				<div>
					<h3 className="positionCenter"> Choose a breed of dog to view random photos. </h3>
			  	<div className="containerAllBreeds">
					<div className="listBreeds"> <ul>{listDogs} </ul> </div>

					<div className="imageBreeds">
					<LoadViewBreedRandomImage NextSeeBreed={this.loadSeeBreed}  breedName={breedName} ListImageBreed={RandomImageBreed} />
					</div>

				</div>
				</div>
			)
		}
}
}


//<div className="imageBreeds">
//	<LoadViewBreedRandomImage NextSeeBreed={this.loadSeeBreed} ListImageBreed={RandomImageBreed} />
//</div>


const mapStateToProps = state => ({
//	ListImageBreed: state.ListLoadImageBreed,
	breedName: state.breedName,
	RandomImageBreed: state.RandomImageBreed,
	listBreed: state.list,
	ListSubBreed: state.loadListSubBreed
})

export default connect(mapStateToProps)(ViewBreedRandomImageContainer)



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
