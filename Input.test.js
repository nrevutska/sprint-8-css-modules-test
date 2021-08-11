import React from 'react';
import { render } from '@testing-library/react';
import Input from '../Input';

test('Renders with a className equal to \'active\'', () => {
  const { container } = render(<Input />)
  expect(container.firstChild).toHaveClass('active') 
})
