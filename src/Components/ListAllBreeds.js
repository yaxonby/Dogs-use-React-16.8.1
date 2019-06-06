import React, {PureComponent} from 'react';

export default class ListAllBreeds extends PureComponent {
    handleClick(anypost) {
        console.log('urlRandom=', this.props.urlRandom);
        this.props.SeeBreedActCreator(anypost, this.props.urlRandom);
    }

    render() {
        const {post} = this.props;
        return (
            <ul>
                <li className='liStyle' key={post.id} onClick={this.handleClick.bind(this, post[0])}> {post[0]}
                    <ul>
                        {post[1].map((elem, index) => (
                            <li key={index} onClick={this.handleClick.bind(this, post[0])}> {elem} </li>
                        ))
                        }
                    </ul>
                </li>
            </ul>
        );
    }
}