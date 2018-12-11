import React from 'react';
import { shallow, mount } from 'enzyme';
import BreedImage from '../src/Components/BreedImage';

it("check prop is null by default", () => {
  const BreedImageComponent = shallow(<BreedImage />);
  expect(BreedImageComponent.props().dogBreed).toBe(undefined);
});

it('should render a ViewBreedImage', () => {
  const wrapper = shallow(
        <BreedImage />
  );
expect(wrapper).toMatchSnapshot();
});


describe('News container', () => {
  const props = { 
dogBreed:[]
}
});

const props = { dogBreed:[] }

describe('News container initial', () => { 
  const newsContainer = shallow(<BreedImage  {...props} />)

  it('render initial', () => {
    expect(newsContainer.find('p')).toHaveLength(1); // .find + 
    // expect(newsContainer.find('div')).toHaveLength(0) // .find + 
    // expect(newsContainer.find('p').text()).toEqual('Loading...')
  })
});
