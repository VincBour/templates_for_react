import { ActionTypes, AssignAction } from "xstate";
import { [UpName]Context, [UpName]Event } from "../../types";

export const assignmentAction = (context: [UpName]Context, _event: [UpName]Event): Partial<[UpName]Context> => {
    return {
        
    };
}

export const assignAction : AssignAction<[UpName]Context, [UpName]Event> = {
    type: ActionTypes.Assign,
    assignment: assignmentAction
}