import React from "react"
import {Component} from "react"
import {connect} from "react-redux"
//import ViewAllBreeds from  "../Components/ViewListAllBreeds";
//import ViewBreedImage from "../Components/ViewBreedImage";
import Loadable from 'react-loadable'
import path from 'path'
import Loading from '../Components/function/Loading'
import fakeDelay from '../Components/function/fakeDelay'
import loadData from '../Components/function/loadData'
import loadSeeBreed from '../Components/function/loadSeeBreed'

const url='https://dog.ceo/api/breeds/list/all'
const urlRandom="/images/random"

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

class ViewBreedRandomImageContainer extends Component {
	constructor(props) {
		super(props);
		this.state={error: null}
		this.SeeBreed=this.SeeBreed.bind(this)
		//this.loadSeeBreed=this.loadSeeBreed.bind(this)
		//this.loadData=this.loadData.bind(this)
	}

	SeeBreed(breed) {
	console.log("пришло", breed )
		const { dispatch} = this.props
		dispatch({  type: "LOAD_IMAGE_BREED",  payload: null})
		dispatch({  type: "LOAD_LIST_SUB_BREED",  payload: null})
    dispatch({  type: "CHOOSE_BREED",  payload: breed})
		console.log("SeeBreed", breed )
		loadSeeBreed(this.props, breed, urlRandom)
	}

componentDidCatch(errorString, errorInfo) {
this.setState({error: errorString});
ErrorLoggingTool.log(errorInfo);
}

	componentDidMount() {
		loadData(this.props, url)
	}

render() {
  if(this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>)

		const  {ListImageBreed, listBreed, ListSubBreed, RandomImageBreed, breedName}=this.props
		const selfprops=this.props

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
					<LoadViewBreedRandomImage NextSeeBreed={loadSeeBreed}
					breedName={breedName} ListImageBreed={RandomImageBreed}
					urlRandom={urlRandom} selfprops={selfprops}/>
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
	breedName: state.breedName,
	RandomImageBreed: state.RandomImageBreed,
	listBreed: state.list,
	ListSubBreed: state.loadListSubBreed
})

export default connect(mapStateToProps)(ViewBreedRandomImageContainer)
