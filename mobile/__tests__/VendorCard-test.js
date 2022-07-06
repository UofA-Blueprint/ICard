import React from 'react';
import renderer from 'react-test-renderer';
import VendorCard from '../src/components/home/VendorCard';
jest.useFakeTimers();
test('renders correctly', async () => {
  const tree = renderer.create(<VendorCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
