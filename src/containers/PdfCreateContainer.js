import React, { Component } from 'react';
import PDFPreview from '../Components/function/PDFPreview';

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
      </div>
    );
  }
}

export default PdfCreateContainer;
