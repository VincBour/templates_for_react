import { StateSchema } from "xstate";

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type [Name]EventType = PropType<[Name]Event, "type">;

export interface [Name]Context {

  }
  
  export interface [Name]Schema extends StateSchema {
    context: [Name]Context;
    states: {
      a: StateSchema<[Name]Context>;
      b: StateSchema<[Name]Context>;
    };
  }
  
  export type aEvent =  { type: "CONTINUE" };
  export type bEvent = { type: "UPDATE_CONTEXT", value: number }
  
  export type [UpName]Event = aEvent  | bEvent;