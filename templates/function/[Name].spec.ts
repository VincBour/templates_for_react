import React from 'react';
import { [Name] } from './[Name]';

describe('[Name]', () => {
    it('should be return 2', () => {
        const result = [Name](1,1);
        expect(result).toEqual(2);
    });
});