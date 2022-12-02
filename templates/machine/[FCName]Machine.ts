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
  [FCName]Context,
  [FCName]Schema,
  [FCName]Events
} from './types';

const [FCName]MachineConfig: MachineConfig<[FCName]Context, [FCName]Schema, [FCName]Events> = {
  id: "[FCName]_Machine",
  initial: "state_1",
  context: {
    a: 0,
    b: 1
  },
  states: {
    state_1: {},
  },
};

const [FCName]MachineOption: InternalMachineOptions<
  [FCName]Context,
  [FCName]Events,
  ResolveTypegenMeta<TypegenDisabled, [FCName]Events, BaseActionObject, ServiceMap>
> = {
  actions: {},
  delays: {},
  guards: {},
  services: {},
};

export const NameMachine = (context?: [FCName]Context) => {
  if (context) {
    return createMachine<[FCName]Context, [FCName]Events>(
      [FCName]MachineConfig,
      [FCName]MachineOption
    ).withContext(context);
  }
  return createMachine<[FCName]Context, [FCName]Events>(
    [FCName]MachineConfig,
    [FCName]MachineOption
  );
};


