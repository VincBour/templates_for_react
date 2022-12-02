import { [FCName]Context } from '../../types';
import { ActionTypes } from "xstate";
import { assignAction, actionExample } from "./actionExample";

describe('assign actionExample', () => {
    it('should return object', () => {
        const result = assignAction;
        expect(result.type).toEqual(ActionTypes.Assign);
    });
    it('should return assignement', () => {
        const context: [FCName]Context = {
            type: "empty"
        }
        const newContext = actionExample(context);
        expect(newContext).toEqual({
            type: "test"
        });
    });
});