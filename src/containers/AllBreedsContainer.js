import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadData from '../Components/function/loadData';
import loadSeeBreed from '../Components/function/loadSeeBreed';
import ListAllBreeds from '../Components/ListAllBreeds';
import BreedImage from '../Components/BreedImage';

const url = 'https://dog.ceo/api/breeds/list/all';
const urlRandom = '/images';

class AllBreedsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.SeeBreed = this.SeeBreed.bind(this);
  }

  SeeBreed(breed) {
    const { dispatch } = this.props;
    dispatch({ type: 'LOAD_IMAGE_BREED', payload: null });
    dispatch({ type: 'LOAD_LIST_SUB_BREED', payload: null });
    dispatch({ type: 'CHOOSE_BREED', payload: breed });
    console.log('breed-', breed);
    loadSeeBreed(this.props, breed, urlRandom);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidCatch(errorString /* ,  errorInfo */) {
    this.setState({ error: errorString });
    // ErrorLoggingTool.log(errorInfo);
  }

  componentDidMount() { loadData(this.props, url); }

  render() {
    if (this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>);
    const {
      ListImageBreed, listBreed, ListSubBreed, breedName,
    } = this.props;

    if (!listBreed) {
      return (<p>Loading...</p>);
    }
    const listDogs = listBreed.map((elem, index) => (
    <ListAllBreeds post={elem} key={index} SeeBreed={this.SeeBreed} ListSubBreed={ListSubBreed} />
    ));
    return (
        <div>
          <h3 className='positionCenter'> Choose a breed or sub breed of dog to view photos. </h3>
          <div className='containerAllBreeds'>
            <div className='listBreeds'>
              <ul>{listDogs} </ul>
            </div>
            <div className='imageBreeds'>
              <BreedImage ListImageBreed={ListImageBreed} breedName={breedName}/> </div>
            </div>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  ListImageBreed: state.ListLoadImageBreed,
  listBreed: state.list,
  ListSubBreed: state.loadListSubBreed,
  breedName: state.breedName,
});

export default connect(mapStateToProps)(AllBreedsContainer);