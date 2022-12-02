import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { [FCName], [FCName]Props } from './[FCName]';

export default {
    title: "Components/[FCName]",
    component: [FCName],
} as ComponentMeta<typeof [FCName]>;

const Template: ComponentStory<[typeof Name]> = (args) => {
    return <[FCName] {...args} />;
};

export const Default = Template.bind({});