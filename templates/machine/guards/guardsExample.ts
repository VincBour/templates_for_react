import { ConditionPredicate } from "xstate";
import { [Name]Context, [Name]Event } from "../types";

export const guardsExample: ConditionPredicate<[Name]Context, [Name]Event> = (context: [Name]Context) => context.a > context.b;