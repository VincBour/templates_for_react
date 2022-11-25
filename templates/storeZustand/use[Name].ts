
import create, { StoreApi } from "zustand";
import { setIndex } from "./actions";

interface [Name]State {
    index: number;
};
interface [Name]Actions {
    setIndex: (value: number) => void;
};

const initialState: [Name]State = {
    index: 0,
}

export type [Name]StoreType = [Name]State & [Name]Actions;

export type Set[Name]Store = StoreApi<[Name]StoreType>["setState"];
export type Get[Name]Store = StoreApi<[Name]StoreType>["getState"];

export const use[Name]Store = create<[Name]State & [Name]Actions>(set => ({
    ...initialState,
    setIndex: setIndex(set)
}))