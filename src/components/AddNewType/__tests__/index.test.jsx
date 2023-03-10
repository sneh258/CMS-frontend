import React from 'react';
import AddNewType from '..';
import { render } from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Add new Content Type', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AddNewType data="value" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
