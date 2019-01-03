'use strict';

const car = {
  audi: 'a3',
  wheel: 4,
};

console.log(Object.keys(car).map((item, i, arr) => [item, i, arr]));
console.log(Object.values(car));
console.log(Object.entries(car));

const map = new Map();
map.set(1, 'yura');
console.log(map.get(1));


const user = {
  name: 'Yura',
  surname: 'Nadolskiy',
  set fullname(value) {
    const arr = value.split(' ');
    this.name = arr[0];
    this.surname = arr[1];
  },
  get fullname() {
    return this.name + this.surname;
  },
};
user.fullname = 'Sergey Garist';
console.log(user.fullname);

const mather = 'Galya';
const word = `Happy new year ${mather}`;
console.log(word);

const books = [1, 2, 3];
const book = 4;
console.log([...books, book]);

const name = 'Yura';
function func(str, val) {
  console.log(...str);
  console.log(...val);
}
func`Hi, my name is ${name} ${name}`;


const pen = {
  color() {
    console.log('super - color');
  },
};

const knife = {
  __proto__: pen,
  tut() {
    console.log('- knife');
    super.color();
  },
};
knife.tut();


import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import PDFPreview from '../Components/function/PDFPreview';
// import { get } from 'https';

const UserContext = React.createContext('I is on holiday.');

let el = document.createElement('div');
el.className = 'portal';
document.getElementsByTagName('div')[0].appendChild(el);
el = document.getElementsByClassName('portal')[0];

const User = () => (
  <div>
    <span>User</span>
    <InformationUser>
      <PersonalData />
    </InformationUser>
    <UserContext.Consumer>
      {val => <Commets val={val} />}
    </UserContext.Consumer>
  </div>);

class InformationUser extends React.Component {
   static contextType = UserContext;

   render() {
     console.log(this.context);
     return ReactDOM.createPortal(this.props.children, el);
   }
}

function PersonalData() {
  return (<div> Personal data</div>)
}

// InformationUser.contextType = UserContext;

function Commets(props) {
  return (
<div> Commets: {props.val}</div>
  );
}

class PdfCreateContainer extends Component {
  state = {
    name: '',
    showPDFPreview: false,
  };

  handleClick = () => this.setState({ showPDFPreview: true });

  handleNameChange = event => this.setState({ name: event.target.value });

  render() {
    const greeting = `Hello ${this.state.name}`;

    return (
      <div className='PDF'>
        <input
          placeholder='Enter your name'
          type='text'
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleClick}>Generate PDF</button>
        {this.state.showPDFPreview && <PDFPreview title={greeting} />}

        <UserContext.Provider value={'I work.'}>
          <User />
        </UserContext.Provider>
</div>
    );
  }
}

export default PdfCreateContainer;
