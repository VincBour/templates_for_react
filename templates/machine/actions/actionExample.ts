import { ActionTypes, AssignAction } from "xstate";
import { [FCName]Context, [FCName]Event } from "../../types";

export const actionExample = (context: [FCName]Context, _event: [FCName]Event): Partial<[FCName]Context> => {
    return {
        ...context,
        type: "test"
    };
}

export const assignActionExample : AssignAction<[FCName]Context, [FCName]Event> = {
    type: ActionTypes.Assign,
    assignment: actionExample
}