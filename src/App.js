import React from "react";
import  axios from "axios";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
	<CssBaseline>
		<div>
			<Header />
			<Main />
		</div>
	</CssBaseline>
)

export default App
