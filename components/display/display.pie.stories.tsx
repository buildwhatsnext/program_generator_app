import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Pie from './display.pie';

export default {
  title: 'PGAPP/Pie',
  component: Pie,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<PieProps> = (args) => <Pie {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'red'
};
