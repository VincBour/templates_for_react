import * as React from 'react';
import { Context } from './[Name]Context';
import { [Name]Context } from "./[Name]Context";

interface [Name]ProviderProps {}

export const [Name]Provider = ({}: PropsWithChildren<[Name]ProviderProps>) => {
    return (
        <[Name]Context.Provider>
            {children}
        </[Name]Context.Provider>
    )
}

[Name]Provider.displayName = "[Name]Provider";