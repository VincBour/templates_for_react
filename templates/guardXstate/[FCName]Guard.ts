import { ConditionPredicate } from "xstate";
import { Context, Event } from "../types";

export const [FCName]Guard: ConditionPredicate<Context, Event> = (context: Context) => context.a > context.b;