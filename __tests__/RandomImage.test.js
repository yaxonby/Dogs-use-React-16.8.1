import React from 'react';
import RandomImage from '../src/Components/RandomImage';

it('should render a RandomImage', () => {
  const wrapper = shallow(
        <RandomImage />
  );
  expect(wrapper).toMatchSnapshot();
});
