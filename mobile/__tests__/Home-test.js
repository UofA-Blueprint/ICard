import React from 'react';
import renderer from 'react-test-renderer';
import HomeView from '../src/views/HomeView';

test('renders correctly', () => {
  const tree = renderer.create(<HomeView />).toJSON();
  expect(tree).toMatchSnapshot();
});