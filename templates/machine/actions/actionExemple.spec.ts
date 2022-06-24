import { [UpName]Context } from '../../types';
import { ActionTypes } from "xstate";
import { assignAction, assignmentAction } from "./actionExemple";

describe('assign', () => {
    it('should return object', () => {
        const result = assignAction;
        expect(result.type).toEqual(ActionTypes.Assign);
    });
    it('should return assignement', () => {
        const context: [UpName]Context = {

        }
        const newContext = assignmentAction(context, { type: ""});
        expect(newContext.).toEqual();
    });
});