import React from "react"
import {Component} from "react"
import {connect} from "react-redux"
import Loadable from 'react-loadable'
import path from 'path'
import Loading from '../Components/function/Loading'
import fakeDelay from '../Components/function/fakeDelay'
import loadData from '../Components/function/loadData'
import loadSeeBreed from '../Components/function/loadSeeBreed'

let LoadListAllBreeds = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/ListAllBreeds")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/ListAllBreeds")
});

let LoadBreedRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("../Components/BreedRandomImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../Components/BreedRandomImage")
});

const url='https://dog.ceo/api/breeds/list/all'
const urlRandom="/images/random"

class BreedRandomImageContainer extends Component {
	constructor(props) {
		super(props);
		this.state={error: null}
		this.SeeBreed=this.SeeBreed.bind(this)
	}

	SeeBreed(breed) {
		const { dispatch} = this.props
		dispatch({  type: "LOAD_IMAGE_BREED",  payload: null})
		dispatch({  type: "LOAD_LIST_SUB_BREED",  payload: null})
    	dispatch({  type: "CHOOSE_BREED",  payload: breed})
		loadSeeBreed(this.props, breed, urlRandom)
	}

componentDidCatch(errorString, errorInfo) {
	this.setState({error: errorString});
	ErrorLoggingTool.log(errorInfo);
}

componentDidMount() {loadData(this.props, url)}

render() {
  if(this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>)
		const  {ListImageBreed, listBreed, ListSubBreed, RandomImageBreed, breedName}=this.props
		const selfprops=this.props

		if (!listBreed) {
			return (<p>Loading...</p>)
		} else {
			const listDogs = listBreed.map((elem, index) => (
			<LoadListAllBreeds post={elem} key={index} SeeBreed={this.SeeBreed} ListSubBreed={ListSubBreed} />
			))
			return (
				<div>
					<h3 className="positionCenter"> Choose a breed of dog to view random photos. </h3>
			  		<div className="containerAllBreeds">
					<div className="listBreeds"> <ul>{listDogs} </ul> </div>
					<div className="imageBreeds">
					<LoadBreedRandomImage NextSeeBreed={loadSeeBreed}
					breedName={breedName} ListImageBreed={RandomImageBreed}
					urlRandom={urlRandom} selfprops={selfprops}/>
					</div>

				</div>
				</div>
			)
		}
}
}

const mapStateToProps = state => ({
	breedName: state.breedName,
	RandomImageBreed: state.RandomImageBreed,
	listBreed: state.list,
	ListSubBreed: state.loadListSubBreed
})

export default connect(mapStateToProps)(BreedRandomImageContainer)