import React, { PureComponent } from 'react';

export default class ListAllBreeds extends PureComponent {
  render() {
    const { post, SeeBreed } = this.props;
    return (
          <ul>
            <li className='liStyle' key={post.id} onClick={SeeBreed.bind(null, post[0])}> {post[0]}
              <ul>
                {post[1].map((elem, index) => (
                <li key={index} onClick={SeeBreed.bind(null, post[0])}> {elem} </li>
                ))
                }
              </ul>
            </li>
            </ul>
    );
  }
}
