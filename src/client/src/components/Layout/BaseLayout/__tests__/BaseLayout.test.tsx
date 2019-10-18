/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Containers
 */
import StyledThemeProvider from '../../../../containers/StyledThemeProvider';

/**
 * Components
 */
import BaseLayout from '../BaseLayout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

const children = <span data-test="child">Test</span>;
const renderComponent = (props = {}) =>
  render(
    <StyledThemeProvider>
      <BaseLayout {...props}>{children}</BaseLayout>
    </StyledThemeProvider>,
  );

describe('<BaseLayout />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a <div> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have render children', () => {
    const { container } = renderComponent();
    // @ts-ignore
    expect(container.querySelector('[data-test="child"]')).not.toBeNull();
  });
});
