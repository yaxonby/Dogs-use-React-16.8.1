import React from "react";
import  axios from "axios";
import ChooseBreed from "./Components/ChooseBreedComponent"
import CardDog from "./Components/CardDogComponent"



export default function App () {

//axios
axios.get('https://dog.ceo/api/breeds/list/all')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});


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


return (
	<div>
<ChooseBreed />
<CardDog />
	</div>
)

}
