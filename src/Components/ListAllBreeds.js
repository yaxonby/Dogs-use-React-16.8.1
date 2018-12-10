import React, { Component } from 'react';

export default class ListAllBreeds extends Component {
  render() {
    const { post, SeeBreed, ListSubBreed } = this.props;
    console.log(ListSubBreed);
    return (
<ul>
<li className='liStyle' key={post.id} onClick={SeeBreed.bind(null, post[0])}> {post[0]}
<ul>
{post[1].map((elem, index) => {
  return (
<li key={index} onClick={SeeBreed.bind(null, post[0])}> {elem} </li>
  );
})
}
</ul>
</li>
</ul>
    );
  }
}
