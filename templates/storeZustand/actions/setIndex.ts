
import { Set[FCName]Store } from "../use[FCName]Store";

export const setIndex = (set: Set[FCName]Store) => (value: number) =>
  set(_state => ({
    index: value
  }));