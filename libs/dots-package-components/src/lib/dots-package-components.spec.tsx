import { render } from '@testing-library/react';

import DotsPackageComponents from './dots-package-components';

describe('DotsPackageComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotsPackageComponents />);
    expect(baseElement).toBeTruthy();
  });
});
