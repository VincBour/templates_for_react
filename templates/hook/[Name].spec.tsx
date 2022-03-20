import { renderHook } from '@testing-library/react-hooks';
import { use[Name] } from './use[Name]';

describe('use[Name]', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => use[Name]());
        const value = result.current(1,1);
        expect(value).toEqual(2);
    });
});