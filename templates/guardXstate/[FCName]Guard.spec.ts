import { GuardMeta } from 'xstate';
import { Context, Event } from '../types';
import { [FCName]Guard } from './[FCName]Guard';

describe('[FCName]Guard', () => {
    it('should be defined', () => {
        expect([FCName]Guard).toBeDefined();
    });
    it('should return true', () => {
        const result = [FCName]Guard({ a: 2, b: 1} as Context, { type: "EVENT_1"}, {} as GuardMeta<Context, Event>);
        expect(result).toBeTruthy();
    });
    it('should return false', () => {
        const result = [FCName]Guard({ a: 0, b: 1} as Context, { type: "EVENT_1"}, {} as GuardMeta<Context, Event>);
        expect(result).toBeFalsy();
    });
});