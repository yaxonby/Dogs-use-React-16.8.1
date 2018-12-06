import React from "react";
import  axios from "axios";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)

export default App
