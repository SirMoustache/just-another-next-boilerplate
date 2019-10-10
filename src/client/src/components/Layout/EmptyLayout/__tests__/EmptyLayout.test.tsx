/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 *
 */
import EmptyLayout from '../EmptyLayout';

const children = <span>Test</span>;
const renderComponent = (props = {}) =>
  render(<EmptyLayout {...props}>{children}</EmptyLayout>);

describe('<EmptyLayout />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a <main> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('main')).not.toBeNull();
  });

  it('should have render children', () => {
    const { container } = renderComponent();
    // @ts-ignore
    expect(container.querySelector('main').children).toHaveLength(1);
  });
});
