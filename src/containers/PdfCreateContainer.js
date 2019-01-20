import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import PDFPreview from '../Components/function/PDFPreview';

class Animal {
  constructor(name) {
    this.name = name;
  }

  names() {
    return this.name;
  }
}

class Leon extends Animal {
  constructor() {
    super();
    // this.user = val;
  }
}

const leon = new Leon('lew');
console.log(leon.names());
// leon();

const car = {
  audi: 'a3',
  wheel: 4
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
  }
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
  }
};

const knife = {
  __proto__: pen,
  tut() {
    console.log('- knife');
    super.color();
  }
};
knife.tut();
// import { get } from 'https';

let el = document.createElement('div');
el.className = 'portal';
document.getElementsByTagName('div')[0].appendChild(el);
el = document.getElementsByClassName('portal')[0];

const userContext = React.createContext('Yura');

class Comment extends React.Component {
  render() {
    console.log('commit', this.context);
    return <div> commet</div>;
  }
}

Comment.contextType = userContext;

class PdfCreateContainer extends Component {
  state = {
    name: '',
    showPDFPreview: false
  };

  handleClick = () => this.setState({ showPDFPreview: true });

  handleNameChange = event => this.setState({ name: event.target.value });

  render() {
    const greeting = `Hello ${this.state.name}`;
    console.log('context-', this.context);
    const user = 'Natalia';
    return (
      <userContext.Provider value={user}>
        <div className="PDF">
          <Comment />
          {this.context}
          <input
            placeholder="Enter your name"
            type="text"
            onChange={this.handleNameChange}
          />
          <button onClick={this.handleClick}>Generate PDF</button>
          {this.state.showPDFPreview && <PDFPreview title={greeting} />}
        </div>
      </userContext.Provider>
    );
  }
}

PdfCreateContainer.contextType = userContext;

export default PdfCreateContainer;
