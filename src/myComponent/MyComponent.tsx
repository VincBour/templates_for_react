import React from 'react';

interface MyComponentProps {};

export const MyComponent = ({}: MyComponentProps) => {
    return (<div>MyComponent</div>);
};

MyComponent.displayName = "MyComponent";
