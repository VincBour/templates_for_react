import { GuardMeta } from 'xstate';
import { [Name]Context, [Name]Event } from '../types';
import { guardsExample } from './guardsExample';

describe('guardsExample', () => {
    it('should be defined', () => {
        expect(guardsExample).toBeDefined();
    });
    it('should return true', () => {
        const result = guardsExample({ a: 2, b: 1} as [Name]Context, { type: "EVENT_1"}, {} as GuardMeta<[Name]Context, [Name]Event>);
        expect(result).toBeTruthy();
    });
    it('should return false', () => {
        const result = guardsExample({ a: 0, b: 1} as [Name]Context, { type: "EVENT_1"}, {} as GuardMeta<[Name]Context, [Name]Event>);
        expect(result).toBeFalsy();
    });
});