import React from 'react';
import { render } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('<MyComponent />', () => {
    it('should be defined', () => {
        const { container } = render(<MyComponent />);
        expect(container).toBeDefined();
    });
});