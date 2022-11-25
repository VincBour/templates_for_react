import { renderHook } from '@testing-library/react-hooks';
import { useMyComponent } from './useMyComponent';

describe('useMyComponent', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => useMyComponent());
        const value = result.current();
        expect(value).toEqual(2);
    });
});