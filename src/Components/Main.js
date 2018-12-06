import React from "react";
import {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import ViewRandomImage from "./ViewRandomImage";
import ViewBreedRandomImage from "./ViewBreedRandomImage";
import ViewAllBreedsContainer from "../containers/ViewAllBreedsContainer";
import Loadable from 'react-loadable';
import path from 'path';
import Loading from './Loading';
import fakeDelay from './fakeDelay';

let LoadViewAllBreedsContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import("../containers/ViewAllBreedsContainer")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../containers/ViewAllBreedsContainer")
});

let LoadViewRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("./ViewRandomImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "./ViewRandomImage")
});

let LoadViewBreedRandomImage = Loadable({
  loader: () => fakeDelay(400).then(() => import("./ViewBreedRandomImage")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "./ViewBreedRandomImage")
});

const Main = () => (
  <main>
		<Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/all-breeds' component={LoadViewAllBreedsContainer}/>
		 <Route path='/random-image' component={LoadViewRandomImage}/>   //ViewRandomImage
     <Route path='/breed-random-image' component={LoadViewBreedRandomImage}/>
 	  </Switch>
  </main>
)

export default Main;
