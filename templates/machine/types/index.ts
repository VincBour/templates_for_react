import { StateSchema } from "xstate";

export interface [FCName]Context {
 a: number,
 b: number,
}

export interface [FCName]Schema extends StateSchema {
    context: [FCName]Context;
    states: {
        state_1: StateSchema<[FCName]Context>;
    }
}

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type [FCName]EventsType = PropType<[FCName]Events, "type">;

export type [FCName]Events = Event_1 | Event_2

type Event_1 = { type: "EVENT_1" };
type Event_2 = { type: "EVENT_2" };