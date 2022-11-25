
import { Set[Name]Store } from "../use[Name]Store";

export const setIndex = (set: Set[Name]Store) => (value: number) =>
  set(_state => ({
    index: value
  }));