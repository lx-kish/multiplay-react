import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './main-page.page';

const setUp = (props = {}) => {
    return shallow(<MainPage {...props} />);
}

describe('MainPage page test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render Header component without errors', () => {
        const wrapper = component.find('Header');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Tab component without errors', () => {
        const wrapper = component.find('Tab');
        expect(wrapper.length).toBe(1);
    });


    it('Should render Footer component without errors', () => {
        const wrapper = component.find('Footer');
        expect(wrapper.length).toBe(1);
    });
})