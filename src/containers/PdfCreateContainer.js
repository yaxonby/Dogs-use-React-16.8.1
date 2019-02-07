import React, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';

class PdfCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('освободили ресурсы');
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

/*
import PDFPreview from '../Components/function/PDFPreview';

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
document.getElementsByTagName('body')[0].appendChild(el);
el = document.getElementsByClassName('portal')[0];

const userContext = React.createContext('Yura');

function Portal() {
  return ReactDOM.createPortal(<h1> Portal </h1>, el);
}

function User(props) {
  console.log('context-', props);
  return <div> ok, {props.value}</div>;
}

// User.contextType = userContext;

// Clock
//------------

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.t = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.t);
  }

  tick() {
    this.setState((prevState, props) => {
      console.log('prevState=', prevState, 'props=', props);
      return { date: new Date() };
    });
  }

  render() {
    return <div> Time: {this.state.date.toLocaleTimeString()}</div>;
  }
}

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: 'ON' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      console.log(prevState);
      return { switch: prevState.switch === 'ON' ? 'OFF' : 'ON' };
    });
  }

  render() {
    const cost = [1, 2, 3, 4, 5];
    return (
      <div>
        <button onClick={this.handleClick}> toogle {this.state.switch}</button>
        {cost.map(elem => (
          <li key={elem.toString()}> {elem}</li>
        ))}
      </div>
    );
  }
}

class PdfCreateContainer extends Component {
  state = {
    name: '',
    showPDFPreview: false
  };

  textInput = elem => {
    this.textInput = elem;
  };

  handleInput = () => {
    console.log('ref-', this.textInput.value);
  };

  handleClick = () => this.setState({ showPDFPreview: true });

  handleNameChange = event => this.setState({ name: event.target.value });

  render() {
    console.log('ref-', this.textInput.current);
    const greeting = `Hello ${this.state.name}`;
    console.log('context-', this.context);
    const user = 'Natalia';
    return (
      <userContext.Provider value="Natali">
        <div className="PDF">
          <input
            placeholder="Enter your name"
            type="text"
            onChange={this.handleNameChange}
          />
          <button onClick={this.handleClick}>Generate PDF</button>
          {this.state.showPDFPreview && <PDFPreview title={greeting} />}
          <userContext.Consumer>{value => <User />}</userContext.Consumer>
          <input type="text" ref={this.textInput} onChange={this.handleInput} />
          <Clock />
          <Toogle />
          <Portal />
        </div>
      </userContext.Provider>
    );
  }
}

*/

export default PdfCreateContainer;
