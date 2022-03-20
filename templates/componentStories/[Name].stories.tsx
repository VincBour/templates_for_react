import React from 'react';
import { Meta, Story } from '@storybook/react';
import { [Name], [Name]Props } from './[Name]';

export default {
    title: "Components/[Name]",
    component: [Name],
} as Meta;

const Template: Story<[Name]Props> = (args) => {
    return <[Name] {...args} />;
};

export const Default = Template.bind({});