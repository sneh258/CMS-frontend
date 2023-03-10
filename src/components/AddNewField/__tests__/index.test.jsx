import React from 'react';
import AddNewField from '..';
import { render } from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Header', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AddNewField col="value" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
