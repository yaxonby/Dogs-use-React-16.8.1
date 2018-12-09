import React from "react";
import {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import ViewRandomImage from "./ViewRandomImage";
import ViewBreedRandomImageContainer from "../containers/ViewBreedRandomImageContainer";
import ViewAllBreedsContainer from "../containers/ViewAllBreedsContainer";
import Loadable from 'react-loadable';
import path from 'path';
import Loading from './function/Loading';
import fakeDelay from './function/fakeDelay';

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

let LoadViewBreedRandomImageContainer = Loadable({
  loader: () => fakeDelay(400).then(() => import("../containers/ViewBreedRandomImageContainer")),
  loading: Loading,
	serverSideRequirePath: path.resolve(__dirname, "../containers/ViewBreedRandomImageContainer")
});

const Main = () => (
  <main>
		<Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/all-breeds' component={LoadViewAllBreedsContainer}/>
		 <Route path='/random-image' component={LoadViewRandomImage}/>   //ViewRandomImage
     <Route path='/breed-random-image' component={LoadViewBreedRandomImageContainer}/>
		 <Route component={Home} />
 	  </Switch>
  </main>
)

export default Main;
