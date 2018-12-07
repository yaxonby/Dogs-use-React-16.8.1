import React from 'react';
import renderer from 'react-test-renderer';
//import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//import { shallow, mount } from 'enzyme';
import ViewBreedRandomImage from '../src/Components/ViewBreedRandomImage';

//Enzyme.configure({ adapter: new Adapter() });

it("check state is not undefined by default", () => {
    const ViewBreedRandomImageComponent = shallow(<ViewBreedRandomImage />);
    expect(ViewBreedRandomImageComponent.props().randomFoto).toBe(undefined);
});
