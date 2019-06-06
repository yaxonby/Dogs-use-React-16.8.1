import React, {PureComponent} from 'react';
import Fab from '@material-ui/core/Fab';

export default class RandomImage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {randomFoto: null};
        this.loadData = this.loadData.bind(this);
    }


    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const self = this;
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                if (response.status !== 200) {
                    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                    return;
                }
                response.json().then((data) => {
                    self.setState({randomFoto: data.message});
                });
            })
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return (
            <div className='positionCenter'>
                <h3> View random image of dog</h3>
                <div>
                    <img src={this.state.randomFoto}/>
                    <Fab color='default' variant='round' onClick={this.loadData}> Next</Fab>
                </div>
            </div>
        );
    }
}
