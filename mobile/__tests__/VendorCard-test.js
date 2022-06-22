import React from 'react';
import renderer from 'react-test-renderer';
import VendorCard from '../src/components/VendorCard';

test('renders correctly', () => {
  const tree = renderer.create(<VendorCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
