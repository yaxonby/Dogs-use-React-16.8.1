import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Loadable from 'react-loadable';
import path from 'path';
import Loading from './function/Loading';
import fakeDelay from './function/fakeDelay';

let LoadAllBreedsContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import("../containers/AllBreedsContainer")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../containers/AllBreedsContainer")
});

let LoadRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("./RandomImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "./RandomImage")
});

let LoadBreedRandomImageContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import("../containers/BreedRandomImageContainer")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../containers/BreedRandomImageContainer")
});

const Main = () => (
  <main>
		<Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/all-breeds' component={LoadAllBreedsContainer}/>
		 <Route path='/random-image' component={LoadRandomImage}/>
     <Route path='/breed-random-image' component={LoadBreedRandomImageContainer}/>
		 <Route component={Home} />
 	  </Switch>
  </main>
)

export default Main;
