import React from 'react';
import renderer from 'react-test-renderer';
//import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//import { shallow, mount } from 'enzyme';
import BreedRandomImage from '../src/Components/BreedRandomImage';

//Enzyme.configure({ adapter: new Adapter() });

it("check state is not undefined by default", () => {
    const BreedRandomImageComponent = shallow(<BreedRandomImage />);
    expect(BreedRandomImageComponent.props().randomFoto).toBe(undefined);
});
