import React from 'react';
import BreedRandomImage from '../src/Components/BreedRandomImage';

it('check state is not undefined by default', () => {
  const BreedRandomImageComponent = shallow(<BreedRandomImage />);
  expect(BreedRandomImageComponent.props().randomFoto).toBe(undefined);
});
