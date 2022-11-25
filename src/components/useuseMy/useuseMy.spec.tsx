import { renderHook } from '@testing-library/react-hooks';
import { useuseMy } from './useuseMy';

describe('useuseMy', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => useuseMy());
        const value = result.current();
        expect(value).toEqual(2);
    });
});