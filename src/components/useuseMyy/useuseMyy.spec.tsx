import { renderHook } from '@testing-library/react-hooks';
import { useuseMyy } from './useuseMyy';

describe('useuseMyy', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => useuseMyy());
        const value = result.current();
        expect(value).toEqual(2);
    });
});