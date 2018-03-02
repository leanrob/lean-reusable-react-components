import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

test('shows a progress bar', () => {
  const tree = renderer.create(
    <ProgressBar percent={50} width={50}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})