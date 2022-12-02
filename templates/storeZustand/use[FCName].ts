
import create, { StoreApi } from "zustand";
import { setIndex } from "./actions";

interface [FCName]State {
    index: number;
};
interface [FCName]Actions {
    setIndex: (value: number) => void;
};

const initialState: [FCName]State = {
    index: 0,
}

export type [FCName]StoreType = [FCName]State & [FCName]Actions;

export type Set[FCName]Store = StoreApi<[FCName]StoreType>["setState"];
export type Get[FCName]Store = StoreApi<[FCName]StoreType>["getState"];

export const use[FCName]Store = create<[FCName]State & [FCName]Actions>(set => ({
    ...initialState,
    setIndex: setIndex(set)
}))