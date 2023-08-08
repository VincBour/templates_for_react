import * as  React from 'react';
import { render, screen } from '@testing-library/react';
import { [FCName] } from './[FCName]';

describe('<[FCName] />', () => {
    it('should be defined', () => {
        expect([FCName]).toBeDefined();
    });
    it('should be return title', () => {
        render(<[FCName] title="[FCName]_title"/>);
        expect(screen.getByText("[FCName]_title")).toBeInTheDocument();
    });
});