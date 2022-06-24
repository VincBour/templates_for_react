import {
    assign,
    BaseActionObject,
    createMachine,
    InternalMachineOptions,
    MachineConfig,
    ResolveTypegenMeta,
    ServiceMap,
    TypegenDisabled,
  } from "xstate";
  import { assignElapsed } from "./actions";
  import { pauseGuard } from "./guards";
  import { timerClock } from './services';
  import { [UpName]Context, [UpName]Event, [UpName]Schema } from "./types";

  const initialContext: [Name]Context = {
    
  };
  
  const [Name]MachineConfig: MachineConfig<[UpName]Context, [UpName]Schema, [UpName]Event> =
    {
      id: '[Name]',
      initial: "",
      context: initialContext,
      states: {
      },
    };
  
  
  const [Name]MachineOptions: InternalMachineOptions<
  [UpName]Context,
  [UpName]Event,
    ResolveTypegenMeta<TypegenDisabled, [UpName]Event, BaseActionObject, ServiceMap>
  > = {
    services: {
      
    },
    actions: {
      
    },
    guards: {
      
    },
  };
  
  export const timerMachine = createMachine<[UpName]Context, [UpName]Event>(
    [Name]MachineConfig,
    [Name]MachineOptions
  );
  