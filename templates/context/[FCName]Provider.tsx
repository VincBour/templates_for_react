import * as React from 'react';
import { Context } from './[FCName]Context';
import { [FCName]Context } from "./[FCName]Context";

interface [FCName]ProviderProps {}

export const [FCName]Provider = ({}: PropsWithChildren<[FCName]ProviderProps>) => {
    return (
        <[FCName]Context.Provider>
            {children}
        </[FCName]Context.Provider>
    )
}

[FCName]Provider.displayName = "[FCName]Provider";