import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { [Name], [Name]Props } from './[Name]';

export default {
    title: "Components/[Name]",
    component: [Name],
} as ComponentMeta<typeof [Name]>;

const Template: ComponentStory<[typeof Name]> = (args) => {
    return <[Name] {...args} />;
};

export const Default = Template.bind({});