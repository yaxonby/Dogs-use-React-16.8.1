import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import HelmetHead from "./Components/HelmetHead";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
	<CssBaseline>
		<div>
			<HelmetHead />
			<Header />
			<Main />
		</div>
	</CssBaseline>
)

export default App
