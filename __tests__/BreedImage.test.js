import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import BreedImage from '../src/Components/BreedImage';

//Enzyme.configure({ adapter: new Adapter() });



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
  const props = { // описываем props
dogBreed:[]
    }
    // функция получения новостей onGetNews. Ее содержимое тестировать не нужно.
    // Но нам потребуется протестировать, что функция была вызвана в componentDidMount
  //  onGetNews: () => {},
//  }
  // здесь будут будущие it
})

const props = { dogBreed:[] }

describe('News container initial', () => { // группируем еще на один уровень, так как здесь потом будет тест componentDidMount
	 const newsContainer = shallow(<BreedImage  {...props} />)

	 it('render initial', () => {
		 expect(newsContainer.find('p')).toHaveLength(1) // .find + поиск по тэгу
		// expect(newsContainer.find('div')).toHaveLength(0) // .find + поиск по имени компонента
		// expect(newsContainer.find('p').text()).toEqual('Loading...')

	 })

 })
