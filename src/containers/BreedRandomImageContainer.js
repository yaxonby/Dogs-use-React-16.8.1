import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadData from '../Components/function/loadData';
import loadSeeBreed from '../Components/function/loadSeeBreed';
import ListAllBreeds from '../Components/ListAllBreeds';
import BreedRandomImage from '../Components/BreedRandomImage';

const url = 'https://dog.ceo/api/breeds/list/all';
const urlRandom = '/images/random';

class BreedRandomImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(errorString /* , errorInfo */) {
    this.setState({ error: errorString });
    // ErrorLoggingTool.log(errorInfo);
  }

  componentDidMount() {
    this.props.loadDataActCreator(url);
  }

  render() {
    if (this.state.error) return (<div> Извините к нам пришел: {this.state.error} </div>);
    const {
      listBreed, ListSubBreed, RandomImageBreed, breedName, SeeBreedActCreator,
    } = this.props;

    if (!listBreed) {
      return (<p>Loading...</p>);
    }
    const listDogs = listBreed.map((elem, index) => (
      <ListAllBreeds post={elem} key={index} urlRandom={urlRandom}
      SeeBreedActCreator={SeeBreedActCreator} ListSubBreed={ListSubBreed} />
    ));
    return (
      <div>
        <h3 className='positionCenter'> Choose a breed of dog to view random photos. </h3>
        <div className='containerAllBreeds'>
          <div className='listBreeds'>
            <ul>{listDogs}</ul>
          </div>
          <div className='imageBreeds'>
          <BreedRandomImage NextSeeBreed={SeeBreedActCreator}
          breedName={breedName} RandomImageBreed={RandomImageBreed}
          urlRandom={urlRandom} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  SeeBreedActCreator: (breed, anyurlRandom) => dispatch(loadSeeBreed(...[breed, anyurlRandom])),
  loadDataActCreator: anyUrl => dispatch(loadData(anyUrl)),
});

const mapStateToProps = state => ({
  breedName: state.breedName,
  RandomImageBreed: state.RandomImageBreed,
  listBreed: state.list,
  ListSubBreed: state.loadListSubBreed,
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedRandomImageContainer);