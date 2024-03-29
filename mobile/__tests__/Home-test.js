import React from 'react';
import renderer from 'react-test-renderer';
import HomeView from '../src/views/HomeView';

jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer.create(<HomeView />).toJSON();
  expect(tree).toMatchSnapshot();
});
