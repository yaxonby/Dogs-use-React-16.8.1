import React from 'react';
import renderer from 'react-test-renderer';
import {connect} from "react-redux";
import {Provider} from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import AllBreedsContainer from '../src/containers/AllBreedsContainer';

//Enzyme.configure({ adapter: new Adapter() });

/*
it('should render a ViewAllBreedsContainer', () => {
    const wrapper = shallow(
        <ViewAllBreedsContainer />
    );
    expect(wrapper).toMatchSnapshot();
});
*/
