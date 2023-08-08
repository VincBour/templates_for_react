import * as React from 'react';

interface Temporary[FCName]Props {
    title: string;
};

export const Temporary[FCName] = ({ title }: Temporary[FCName]Props) => {
    return (<div>{title}</div>);
};

