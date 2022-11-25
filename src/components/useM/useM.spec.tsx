import { renderHook } from '@testing-library/react-hooks';
import { useM } from './useM';

describe('useM', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => useM());
        const value = result.current();
        expect(value).toEqual(2);
    });
});