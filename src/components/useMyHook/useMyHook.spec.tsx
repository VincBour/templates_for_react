import { renderHook } from '@testing-library/react-hooks';
import { useMyHook } from './useMyHook';

describe('useMyHook', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => useMyHook());
        const value = result.current();
        expect(value).toEqual(2);
    });
});