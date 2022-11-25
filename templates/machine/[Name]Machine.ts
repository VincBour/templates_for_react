import {
  BaseActionObject,
  createMachine,
  InternalMachineOptions,
  MachineConfig,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";

import {
  [Name]Context,
  [Name]Schema,
  [Name]Events
} from './types';

const [Name]MachineConfig: MachineConfig<[Name]Context, [Name]Schema, [Name]Events> = {
  id: "[Name]_Machine",
  initial: "state_1",
  context: {
    a: 0,
    b: 1
  },
  states: {
    state_1: {},
  },
};

const [Name]MachineOption: InternalMachineOptions<
  [Name]Context,
  [Name]Events,
  ResolveTypegenMeta<TypegenDisabled, [Name]Events, BaseActionObject, ServiceMap>
> = {
  actions: {},
  delays: {},
  guards: {},
  services: {},
};

export const NameMachine = (context?: [Name]Context) => {
  if (context) {
    return createMachine<[Name]Context, [Name]Events>(
      [Name]MachineConfig,
      [Name]MachineOption
    ).withContext(context);
  }
  return createMachine<[Name]Context, [Name]Events>(
    [Name]MachineConfig,
    [Name]MachineOption
  );
};


