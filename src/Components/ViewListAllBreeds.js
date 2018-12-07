import React from "react";
import {Component} from "react";
import ViewBreedImage from "./ViewBreedImage";
import Loadable from 'react-loadable';

export default class ViewListAllBreeds extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		const {post, SeeBreed, ListSubBreed}=this.props
		console.log(ListSubBreed)
		return (
						<ul>
							<li key={post.id} onClick={SeeBreed.bind(null, post[0])}> {post[0]}
								<ul>
									{post[1].map(function(elem, index) {
										return (
											<li key={index} onClick={SeeBreed.bind(null, post[0])}> {elem} </li>
										)
									})
									}
								</ul>
							</li>
						</ul>
		)
	};
};
