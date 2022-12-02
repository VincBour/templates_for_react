import { TimerContext } from '../../types';
import { ActionTypes } from "xstate";
import { [FCName]Assign, [FCName]Assignment } from "./assign[FCName]";

describe('assign[FCName]', () => {
    it('should return object', () => {
        const result = assign[FCName];
        expect(result.type).toEqual(ActionTypes.Assign);
    });
    it('should return assignement', () => {
        const context: Context = {
            
        }
        const newContext = assignment[FCName](context, { type: ''});
        expect(newContext.).toEqual();
    });
});