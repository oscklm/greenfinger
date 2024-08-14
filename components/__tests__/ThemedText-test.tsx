import * as React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from '../ThemedText';

it(`renders correctly`, () => {
  const { toJSON, getByText } = render(<ThemedText>Snapshot test!</ThemedText>);
  
  expect(getByText('Snapshot test!')).toBeTruthy(); // Ensuring the text is rendered
  expect(toJSON()).toMatchSnapshot();
});
