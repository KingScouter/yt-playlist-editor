import { render } from '@testing-library/react';

import ProfileInfo from './profile-info';

describe('ProfileInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileInfo />);
    expect(baseElement).toBeTruthy();
  });
});
