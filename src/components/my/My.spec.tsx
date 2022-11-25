import { renderHook } from '@testing-library/react-hooks';
import { My } from './My';

describe('My', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => My());
        const value = result.current();
        expect(value).toEqual(2);
    });
});