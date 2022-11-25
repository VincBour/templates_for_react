import { ActionTypes, AssignAction } from "xstate";
import { [Name]Context, [Name]Event } from "../../types";

export const actionExample = (context: [Name]Context, _event: [Name]Event): Partial<[Name]Context> => {
    return {
        ...context,
        type: "test"
    };
}

export const assignActionExample : AssignAction<[Name]Context, [Name]Event> = {
    type: ActionTypes.Assign,
    assignment: actionExample
}