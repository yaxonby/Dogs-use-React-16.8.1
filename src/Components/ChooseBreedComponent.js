import React from "react";
import  axios from "axios";
import {Component} from "react"

let loadList;

export default class ChooseBreedComponent extends Component{

	constructor(props) {
			super(props);
			this.state = { list: null};
		}

		componentWillMount() {
			let self=this;
				// List all breeds Список всех пород
			fetch("https://dog.ceo/api/breeds/list/all")
				.then(function(response) {
						if (response.status !== 200) {
							console.log('Looks like there was a problem. Status Code: ' +
								response.status);
							return;
						}
						// Examine the text in the response
						response.json().then(function(data) {
				////			for(let i in data.message) {
				//				console.log(i)}
				Object.entries(data.message)
								self.setState({ list: 	Object.entries(data.message) });
							console.log(data.message);
						});
					}
				)
				.catch(function(err) {	console.log('Fetch Error :-S', err)	});
		};

render() {
	return (
		<ul> загрузка данных
		{this.state.list}
	</ul> )
}
}


/*
{
	for(let element off loadList.data.message) {

	loadList.data.message
	return (
		<li> {elem} </li>
		)
	}
}




for(let element of loadList.data.message) {

loadList.data.message
return (
	<li> {elem} </li>
	)
}




{response.map(function (elem, index) {
	return (
		<li key={index}> {elem} </li>
		)
	}
)
}
*/

/*
//отображение карты пород

<div class="ui breadcrumb">
  <a class="section"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Главная</font></font></a>
  <div class="divider"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font></div>
  <a class="section"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">хранить</font></font></a>
  <div class="divider"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font></div>
  <div class="active section"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Футболка</font></font></div>
</div>
*/






/*
//выбор из списка
<div class="ui styled accordion">
  <div class="active title">
    <i class="dropdown icon"></i>
    Level 1
  </div>
  <div class="active content">
    Welcome to level 1
    <div class="accordion">
      <div class="title active">
          <i class="dropdown icon"></i>
          Level 1A
      </div>
      <div class="content active">
        <p class="transition visible" style="display: block !important;">Level 1A Contents</p>
        <div class="accordion transition visible" style="display: block !important;">
          <div class="title active">
              <i class="dropdown icon"></i>
              Level 1A-A
          </div>
          <div class="content active">
              Level 1A-A Contents
          </div>
          <div class="title">
              <i class="dropdown icon"></i>
              Level 1A-B
          </div>
          <div class="content">
              Level 1A-B Contents
          </div>
        </div>
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          Level 1B
      </div>
      <div class="content">
          Level 1B Contents
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          Level 1C
      </div>
      <div class="content">
          Level 1C Contents
      </div>
    </div>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    Level 2
  </div>
  <div class="content">
    <p>Welcome to level 2</p>
    <div class="accordion">
      <div class="active title">
        <i class="dropdown icon"></i>
        Level 2A
      </div>
      <div class="active content">
        <p>Level 2A Contents</p>
        <div class="accordion">
          <div class="title">
              <i class="dropdown icon"></i>
              Level 2A-A
          </div>
          <div class="content">
              Level 2A-A Contents
          </div>
          <div class="title">
              <i class="dropdown icon"></i>
              Level 2A-B
          </div>
          <div class="content">
              Level 2A-B Contents
          </div>
        </div>
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          Level 2B
      </div>
      <div class="content">
          Level 2B Contents
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          Level 2C
      </div>
      <div class="content">
          Level 2C Contents
      </div>
    </div>
  </div>
</div>


*/
