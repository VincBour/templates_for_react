import * as  React from 'react';
import { render } from '@testing-library/react';
import { [Name] } from './[Name]';

describe('<[Name] />', () => {
    it('should be defined', () => {
        const { container } = render(<[Name] />);
        expect(container).toBeDefined();
    });
});