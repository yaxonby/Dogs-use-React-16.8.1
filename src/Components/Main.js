import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import path from 'path';
import Home from './Home';
import Loading from './function/Loading';
import fakeDelay from './function/fakeDelay';

const LoadAllBreedsContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import('../containers/AllBreedsContainer')),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../containers/AllBreedsContainer'),
});

const LoadRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import('./RandomImage')),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, './RandomImage'),
});

const LoadBreedRandomImageContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import('../containers/BreedRandomImageContainer')),
  loading: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../containers/BreedRandomImageContainer'),
});

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/all-breeds' component={LoadAllBreedsContainer}/>
      <Route path='/random-image' component={LoadRandomImage}/>
      <Route path='/breed-random-image' component={LoadBreedRandomImageContainer}/>
      <Route component={Home}/>
    </Switch>
  </main>
);

export default Main;