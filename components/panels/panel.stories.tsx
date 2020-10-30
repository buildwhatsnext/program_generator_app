import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Panel, IPanel } from './panel';

export default {
  title: 'PGAPP/Panel',
  component: Panel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<IPanel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'string'
}