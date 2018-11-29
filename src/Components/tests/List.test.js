import React from 'react';
import {  mount, render } from '../../enzyme';

import List from '../List';

describe('List Test', () => {
    it('renders list-items', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = render(<List items={items} />);
        wrapper.addClass('foo');

        expect(wrapper.find('.list-items')).toBeDefined();
        expect(wrapper.find('.item')).toHaveLength(items.length);
    });

    it('renders a list', () => {
        const items = ['Thor', 'Loki'];
        const wrapper = mount(<List items={items} />);

        expect(wrapper.contains(<li key='Thor' className='item'>Thor</li>)).toBeTruthy();
    });

    it('renders correct text in item', () => {
        const items = ['Jhon', 'James', 'Luke'];
        const wrapper = mount(<List items={items} />);

        expect(wrapper.find('.item').get(0).props.children).toEqual('Jhon');
    });
});

