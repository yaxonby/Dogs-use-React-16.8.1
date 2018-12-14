import React, { PureComponent } from 'react';
import MyImage from './function/MyImage';

export default class BreedImage extends PureComponent {
/*
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("nextProps=", nextProps,"nextState=", nextState, "nextContext=", nextContext)
return true
}
*/

  render() {
    const { ListImageBreed, breedName } = this.props;
    if (!ListImageBreed) {
      return (<p> </p>);
    }
    return (
      <div>
        <h3> View images breed {breedName}  </h3>
        <div>
          {ListImageBreed.map((elem, index) => (
            <li className='liStyle' key={index}>
              <MyImage src={elem}/>
            </li>
          ))}
        </div>
      </div>
    );
  }
}
