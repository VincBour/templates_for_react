import * as React from 'react';
import { render } from '@testing-library/react';
import { [FCName] } from './[FCName]';

describe('<[FCName] />', () => {
    it('should be defined', () => {
        const { container } = render(<[FCName] />);
        expect(container).toBeDefined();
    });
});