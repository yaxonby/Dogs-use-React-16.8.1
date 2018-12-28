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
