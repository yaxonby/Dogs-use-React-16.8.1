import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
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
    console.log('Инициализация конструктора');
  }

  SeeBreed(breed) {
    // const { dispatch } = this.props;
    // dispatch({ type: 'LOAD_IMAGE_BREED', payload: null });
    // dispatch({ type: 'LOAD_LIST_SUB_BREED', payload: null });
    // dispatch({ type: 'CHOOSE_BREED', payload: breed });
    // console.log('breed-', breed);
    loadSeeBreed(this.props, breed, urlRandom);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', 'nextProps=', nextProps, 'prevState=', prevState);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate проверяет');
    console.log('shouldComponentUpdate', 'nextProps=', nextProps,
      'nextState=', nextState, 'nextContext=', nextContext);
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    console.log('shouldComponentUpdate возвращает false');
    return false;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  // console.log('getSnapshotBeforeUpdate', 'prevProps=', prevProps, 'prevState', prevState);
  // return null;
  // }

  componentDidCatch(errorString /* ,  errorInfo */) {
    this.setState({ error: errorString });
    // ErrorLoggingTool.log(errorInfo);
  }

  componentDidMount() {
    console.log('DidMount --> loadData');
    loadData(this.props, url);
  }

  render() {
    console.log('render');
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

/* use to reselect
const getListImageBreed = state => state.ListLoadImageBreed;
const getlistBreed = state => state.list;
const getListSubBreed = state => state.loadListSubBreed;
const getbreedName = state => state.breedName;
*/

const mapStateToProps = state => ({
  ListImageBreed: state.ListLoadImageBreed,
  listBreed: state.list,
  ListSubBreed: state.loadListSubBreed,
  breedName: state.breedName,
});

export default connect(mapStateToProps)(AllBreedsContainer);