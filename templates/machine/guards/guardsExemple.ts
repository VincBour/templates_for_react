import { ConditionPredicate } from "xstate";
import { [UpName]Context, [UpName]Event } from "../types";

export const pauseGuard: ConditionPredicate<[UpName]Context, [UpName]Event> = (context) => true;