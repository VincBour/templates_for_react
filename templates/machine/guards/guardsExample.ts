import { ConditionPredicate } from "xstate";
import { [FCName]Context, [FCName]Event } from "../types";

export const guardsExample: ConditionPredicate<[FCName]Context, [FCName]Event> = (context: [FCName]Context) => context.a > context.b;