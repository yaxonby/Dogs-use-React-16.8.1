import React, { lazy, Suspense } from 'react';
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

const PdfCreateContainer = lazy(() => import('../containers/PdfCreateContainer'));

const LoginComponent = lazy(() => import('./LoginComponent'));

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/all-breeds' component={LoadAllBreedsContainer}/>
        <Route path='/random-image' component={LoadRandomImage}/>
        <Route path='/breed-random-image' component={LoadBreedRandomImageContainer}/>
        <Suspense fallback={<div> ...Loading </div>}>
          <Route path='/pdf-create' component={PdfCreateContainer}/>
          <Route path='/login' component={LoginComponent}/>
        </Suspense>
        <Route component={Home}/>
      </Switch>
  </main>
);

export default Main;