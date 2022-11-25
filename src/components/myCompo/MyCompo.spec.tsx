import { renderHook } from '@testing-library/react-hooks';
import { MyCompo } from './MyCompo';

describe('MyCompo', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => MyCompo());
        const value = result.current();
        expect(value).toEqual(2);
    });
});