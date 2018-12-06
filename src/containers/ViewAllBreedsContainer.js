import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import ViewAllBreeds from  "../Components/ViewListAllBreeds";
import ViewBreedImage from "../Components/ViewBreedImage";
import Loadable from 'react-loadable';
import path from 'path';
import Loading from '../Components/Loading';
import fakeDelay from '../Components/fakeDelay';


let LoadViewAllBreeds = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/ViewListAllBreeds")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/ViewListAllBreeds")
});


let LoadViewBreedImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/ViewBreedImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/ViewBreedImage")
});

class ViewAllBreedsContainer extends Component {
	constructor(props) {
		super(props);
		this.state={error: null}
		this.SeeBreed=this.SeeBreed.bind(this)
	}

	SeeBreed(breed) {
		const { dispatch} = this.props
		dispatch({  type: "LOAD_IMAGE_BREED",  payload: null})
		dispatch({  type: "LOAD_LIST_SUB_BREED",  payload: null})
		console.log("SeeBreed", breed )
		this.loadSeeBreed(breed)
	}


loadSeeBreed(breed) {
  const { dispatch} = this.props
	//https://dog.ceo/api/breed/hound/images
  let url="https://dog.ceo/api/breed/"+breed+"/images"
  fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
    dispatch({  type: "LOAD_IMAGE_BREED",  payload: data.message})
        });
      }
    )
    .catch(function(err) {	console.log('Fetch Error :-S', err)	});
}

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

//static getDerivedStateFromProps(nextProps, prevState) {}

//getSnapshotBeforeUpdate(prevProps, prevState) {}

componentDidCatch(errorString, errorInfo) {
this.setState({error: errorString});
ErrorLoggingTool.log(errorInfo);
}

	componentDidMount() {this.loadData()}



render() {
  if(this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>)

		const  {dogBreed, listBreed, ListSubBreed}=this.props

		if (!listBreed) {
			return (<p>Loading...</p>)
		} else {
			console.log(  "ListSubBreed",  ListSubBreed)
			const listDogs = listBreed.map((elem, index) => (
			<LoadViewAllBreeds post={elem} key={index} SeeBreed={this.SeeBreed} ListSubBreed={ListSubBreed} />
			))
			return (
				<div>
					<ul>{listDogs} </ul>
					<LoadViewBreedImage dogBreed={dogBreed} />
				</div>
			)
		}
}
}

export default connect(
	state => ({
		dogBreed: state.loadBreed,
		listBreed: state.list,
		ListSubBreed: state.loadListSubBreed
	})
)(ViewAllBreedsContainer)
