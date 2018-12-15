import React, { PureComponent } from 'react';
import Fab from '@material-ui/core/Fab';

export default class BreedRandomImage extends PureComponent {
  handleClick() {
    console.log(this.props.breedName, this.props.urlRandom);
    this.props.NextSeeBreed(this.props.breedName, this.props.urlRandom);
  }

  render() {
    const {
      RandomImageBreed, breedName,
    } = this.props;
    if (!RandomImageBreed) {
      return (<p></p>);
    }
    return (
<div className='positionCenter'>
<h3> View images breed {breedName}  </h3>
<div>
<img src={RandomImageBreed}/>
<Fab color='default' variant='round'
onClick={this.handleClick.bind(this)}> Next </Fab>
</div>
</div>);
  }
}
