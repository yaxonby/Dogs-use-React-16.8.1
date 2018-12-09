import React from 'react';
import renderer from 'react-test-renderer';
//import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//import { shallow, mount } from 'enzyme';
import RandomImage from '../src/Components/RandomImage';

//Enzyme.configure({ adapter: new Adapter() });

//it("check prop is null by default", () => {
//    const ViewRandomImageComponent = shallow(<ViewRandomImage />);
//    expect(ViewRandomImageComponent.props().dogBreed).toBe(undefined);
//});

it('should render a RandomImage', () => {
    const wrapper = shallow(
        <RandomImage />
    );
    expect(wrapper).toMatchSnapshot();
});
