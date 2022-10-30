import React from 'react';
import renderer from 'react-test-renderer';
import RegistrationView from '../src/views/RegistrationView';

test('renders correctly', async() => {
    const tree = renderer.create(<RegistrationView/>).toJSON();
    expect(tree).toMatchSnapshot();
})