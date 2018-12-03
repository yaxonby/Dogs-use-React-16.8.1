import React from "react";
import  axios from "axios";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

/*
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default App;

*/
test('два плюс два равно четыре', () => {
  expect(2 + 2).toBe(4);
});




const App = () => (
	<div>
	<Header />
	 <Main />
	  </div>
)

export default App



//
//<Main />

/*
export default function App () {

//axios
axios.get('https://dog.ceo/api/breeds/list/all')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});

*/
// List all breeds Список всех пород
//url="https://dog.ceo/api/breeds/list/all"



//	 Random image
//url="https://dog.ceo/api/breeds/image/random"


// By breed Порода
//url="https://dog.ceo/api/breed/hound/images"

//LIST ALL SUB-BREEDS
//url="https://dog.ceo/api/breed/hound/list"


//BREEDS LIST
//url="https://dog.ceo/api/breed/.....BREED...../images/random"
