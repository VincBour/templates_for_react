import { renderHook } from '@testing-library/react-hooks';
import { [FCName] } from './[FCName]';

describe('[FCName]', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => [FCName]());
        const value = result.current();
        expect(value).toEqual(2);
    });
});