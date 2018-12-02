
import React from "react";
import {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Schedule from "./Schedule";

const Main = () => (
  <main>
		<Switch>
      <Route exact path='/' component={Home}/>
     <Route path='/schedule' component={Schedule}/>
		 <Route path='/schedule' component={Schedule}/>
 	  </Switch>
  </main>
)

export default Main;
//<Route path='/roster' component={Roster}/>
//<Route path='/schedule' component={Schedule}/>

//

//
